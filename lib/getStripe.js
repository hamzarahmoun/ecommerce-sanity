
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;


const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_yNeGSyZogkxS3EF1EgJzQPtN00uz3VlR9s');
  }

  return stripePromise;
}

export default getStripe;