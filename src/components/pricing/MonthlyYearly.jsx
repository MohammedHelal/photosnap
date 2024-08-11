"use client";

function MonthlyYearly({ paymentDuration, changePaymentDuration }) {
  return (
    <div className="w-full mt-[50px] flex items-center justify-center">
      <h3
        className={`transition-colors ease-in duration-300 ${
          paymentDuration === "Monthly" ? "text-black" : "text-slate-400"
        }`}
      >
        Monthly
      </h3>
      <div
        className="mx-[15px] w-[64px] h-[32px] rounded-full bg-light-grey cursor-pointer"
        onClick={changePaymentDuration}
      >
        <div
          className={`transition-transform ease-in duration-300 m-[4px] w-[24px] h-[24px] rounded-full bg-black ${
            paymentDuration === "Monthly"
              ? "translate-x-0"
              : "translate-x-[32px]"
          }`}
        ></div>
      </div>
      <h3
        className={`transition-colors ease-in duration-300 ${
          paymentDuration === "Yearly" ? "text-black" : "text-slate-400"
        }`}
      >
        Yearly
      </h3>
    </div>
  );
}

export default MonthlyYearly;
