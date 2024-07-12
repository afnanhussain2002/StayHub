import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { sendBookingPrice } from "../../api/payment";
import useAuth from "../../hooks/useAuth";


const CheckoutForm = ({price}) => {
  const {user} = useAuth()
    const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState('')
  const [clientSecret, setClientSecret] = useState()
  const bookingAmount = price - (price * 0.8 )
 
  // post payment
  useEffect(() =>{
    const fetchData = async () =>{
      try {
        const data = await sendBookingPrice(bookingAmount)
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
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

        // confirm payment

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card:card,
            billing_details:{
               email:user?.email || 'anonymous',
               name: user?.displayName || 'anonymous'
            }
          }
        })
        if (confirmError) {
          console.log('confirm error',confirmError);
        }else{
            console.log('payment Intent', paymentIntent);
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
      <button type="submit" className="p-1 bg-back-main-color rounded text-white font-bold disabled:bg-slate-400" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{err}</p>
        </form>
    );
};

export default CheckoutForm;