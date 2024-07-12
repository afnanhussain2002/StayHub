import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { sendBookingPrice } from "../../api/payment";


const CheckoutForm = ({price}) => {
    const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState('')
  const [clientSecret, setClientSecret] = useState()
  const bookingAmount = price - (price * 0.8 )
  console.log(bookingAmount);
  // post payment
  useEffect(() =>{
    sendBookingPrice(bookingAmount)
    .then(data =>{
      console.log(data.clientSecret);
      setClientSecret(data.clientSecret)
    })
  },[bookingAmount])
    const handleSubmit = async e =>{
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type:'card',
          card
        })

        if (error) {
          console.log(error);
          setErr(error.message)
        }else{
          console.log(paymentMethod);
          setErr('')
        }

    }
    return (
        <form onSubmit={handleSubmit}>
              <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="p-1 bg-back-main-color rounded text-white font-bold" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600">{err}</p>
        </form>
    );
};

export default CheckoutForm;