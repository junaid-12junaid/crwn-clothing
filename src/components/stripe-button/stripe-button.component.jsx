import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price*100;
  const publishableKey = "pk_test_51Mc0wdSF20byxlFMDeKXYUInKF3w4Ke2TkzEbynR4N2vnUFv38DSzFFICr5e1g9kK8dVtkArzLevLPhip9XpFuGP00BGM5qsjw";

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Zara Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABC-owEYl2-kE1SYurAomwBAC9pdrcxnW5PMm0wRM&s'
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;