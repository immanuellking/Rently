import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const PayButton = ({email, amount}) => {
  const publicKey = import.meta.env.VITE_PS_PUBLIC_KEY;
  const [reference, setReference] = useState("");

  const handlePaystackSuccessAction = (reference) => {
    // handle payment success
  }

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: 'Book Space Now',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => alert('Payment canceled by user.'),
  };

  return <PaystackButton {...componentProps} />;
};

export default PayButton;
