import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPayment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate("/spaces");
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center flex-col">
      <img
        className="w-80"
        src="https://niceillustrations.com/wp-content/uploads/2021/03/Successful-Payment-color-800px.png"
        alt="success_img"
      />
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-[#6ff8c6]">Success</h2>
        <p className="text-xl text-[#464493] font-semibold">
          Your payment has been processed successfully
        </p>
        <p>
          page will be automatically redirected to the main page or click button
          below
        </p>
      </div>

      <button
        className="mt-4 py-2 px-12 bg-[#7C76FE] text-white font-semibold rounded-md"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPayment;
