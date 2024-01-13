import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const PayButton = ({ email, amount }) => {
  const publicKey = import.meta.env.VITE_PS_PUBLIC_KEY;
  const [reference, setReference] = useState("");

  const handlePaystackSuccessAction = (reference) => {
    // handle payment success
    console.log(reference)
  };

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: "Book Space Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => console.log("Payment canceled by user."),
  };

  return (
    <button className="w-full py-3 bg-brightBlue rounded-3xl font-bold text-white" >
      <PaystackButton {...componentProps} className="w-full h-full" />
    </button>
  );
};

export default PayButton;
