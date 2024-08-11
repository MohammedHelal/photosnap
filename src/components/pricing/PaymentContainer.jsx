"use client";
import { useState } from "react";

import MonthlyYearly from "./MonthlyYearly";
import PaymentPlans from "./PaymentPlans";

export default function PaymentContainer() {
  const [paymentDuration, setPaymentDuration] = useState("Monthly");

  function changePaymentDuration() {
    if (paymentDuration === "Monthly") setPaymentDuration("Yearly");
    else setPaymentDuration("Monthly");
  }

  return (
    <>
      <MonthlyYearly
        paymentDuration={paymentDuration}
        changePaymentDuration={changePaymentDuration}
      />
      <PaymentPlans paymentDuration={paymentDuration} />
    </>
  );
}
