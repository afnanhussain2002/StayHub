const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY)
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wpyq7sp.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const userCollection = client.db("stayHubDB").collection("hubUser");
    const hotelsCollection = client.db("stayHubDB").collection("hotel");

    // auth related api

    // jwt token
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      console.log("I Need Jwt", user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // clear cookie after user logout

    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            maxAge: 0,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    });

    // save user data on database
    app.post("/user", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne({
        user,
        timeStamp: Date.now(),
      });
      res.send(result);
    });

    // post hotels api
    app.post("/hotels", async (req, res) => {
      const hotel = req.body;
      const result = await hotelsCollection.insertOne(hotel);
      res.send(result);
    });

    // get all hotels

    app.get("/hotels", async (req, res) => {
      const result = await hotelsCollection.find().toArray();
      res.send(result);
    });

    // get a single hotel
    app.get('/hotel/:id', async(req,res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await hotelsCollection.findOne(query)
      res.send(result)
    });

    // get posted hotel by the host 
    app.get('/hotels/:email', async(req,res) =>{
     const email = req.params.email
     const query = {'host.email':email}
     const result = await hotelsCollection.find(query).toArray()
     res.send(result)
    })

    // get all users 
    app.get('/users', async(req,res) =>{
      const result = await userCollection.find().toArray()
      res.send(result)
    })

    // payment intent

    app.post('/create-payment-intent', async(req,res) =>{
      const {price} = req.body;
      const amount = parseInt(price * 100)

      const paymentIntent = await stripe.paymentIntents.create({
        amount:amount,
        currency:'usd',
        payment_method_types: ['card']  
      })
      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("StayHub Server");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
