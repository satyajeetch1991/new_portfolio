import React from "react";

const ThankYou = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 text-white">
    <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
    <p className="text-lg mb-8">Your message has been sent successfully. We appreciate your feedback and will get back to you soon.</p>
    <a href="/" className="text-green-400 underline">Go back to Home</a>
  </div>
);

export default ThankYou;
