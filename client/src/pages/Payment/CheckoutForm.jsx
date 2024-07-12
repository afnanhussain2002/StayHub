import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { sendBookingPrice } from "../../api/payment";
import useAuth from "../../hooks/useAuth";
import { removeFromLS } from "../../utils/localStorage";
import { bookHotel } from "../../api/booking";
import { successPopup } from "../../popups/popups";

const CheckoutForm = ({ getBookingInfo }) => {
  const {hotelName,roomType, startDate, endDate} = getBookingInfo[0] || {}
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState("");
  const [clientSecret, setClientSecret] = useState();
  const [transactionId, setTransactionId] = useState()
  
  const price = getBookingInfo[0]?.totalPrice
  const bookingAmount = price - (price * 0.8) || 0;

  // post payment
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sendBookingPrice(bookingAmount);
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [bookingAmount]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setErr(error.message);
    } else {
      console.log(paymentMethod);
      setErr("");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        // remove data from local storage
        removeFromLS(getBookingInfo)
        // show transaction id to ui
        setTransactionId(paymentIntent.id)

        // sent booking with payment in database
        const bookingInfo = { hotelName, roomType, startDate,endDate, email:user?.email, transactionId, bookingAmount, payment:'20% Complete'  }

        // call save booking function
        const result = await bookHotel(bookingInfo)
        console.log(result);
        if (result.insertedId) {
          successPopup('Payment Successfully')
        }

      }
    }
   
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p>Pay 20% of the full payment. So you have to pay ${bookingAmount} for confirm the booking</p>
      <button
        type="submit"
        className="p-1 bg-back-main-color rounded text-white font-bold disabled:bg-slate-400"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{err}</p>
      <p className="text-green-600">{transactionId && transactionId}</p>
    </form>
  );
};

export default CheckoutForm;
