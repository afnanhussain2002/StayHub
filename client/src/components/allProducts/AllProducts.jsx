import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../reUseComponents/Title";
import Product from "./Product";


const AllProducts = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() =>{
        axios('./data/rooms.json')
        .then(data =>{
            setRooms(data.data);
        })
    },[])
    return (
       <div className="mt-8">
      
        <Title title={'Best Places'}/>

        <div className="">
            {rooms.map(room => <Product key={room._id} room={room}></Product>)}
        </div>
     
       </div>
    );
};

export default AllProducts;