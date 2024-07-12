import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Container from '../../components/reUseComponents/Container';
import Title from '../../components/reUseComponents/Title';
import CheckoutForm from './CheckoutForm';
import { getBookedHotel } from '../../utils/localStorage';

const Payment = () => {
    // load stripe
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)
    const getBookingInfo = getBookedHotel()
    return (
      <Container>
    <Title title={'Pay For Booking'}/>

    <Elements stripe={stripePromise}>
<CheckoutForm price={getBookingInfo[0].totalPrice}/>
    </Elements>
      </Container>
    );
};

export default Payment;