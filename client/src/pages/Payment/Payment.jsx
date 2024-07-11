import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Container from '../../components/reUseComponents/Container';
import Title from '../../components/reUseComponents/Title';

const Payment = () => {
    // load stripe
    const stripePromise = loadStripe('')
    return (
      <Container>
    <Title title={'Pay For Booking'}/>

    <Elements stripe={stripePromise}>

    </Elements>
      </Container>
    );
};

export default Payment;