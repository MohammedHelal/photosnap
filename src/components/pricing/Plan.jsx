export default function Plan({ title, para, price, payment, black = false }) {
  return (
    <div
      className={`relative w-full my-[25px] px-[25px] py-[50px] text-center ${
        black
          ? "bg-black text-white xl:w-[400px] xl:px-[50px] xl:py-[75px]"
          : "bg-lighter-grey"
      } xl:w-[350px]`}
    >
      {black && (
        <div className="absolute top-0 right-0 fancy-bar w-full box-decoration-clone"></div>
      )}
      <h2>{title}</h2>
      <p className="text-slate-500">{para}</p>
      <div className="my-[25px]">
        <h2 className="mb-0 text-4xl">
          $ {payment === "Monthly" ? price : price * 10}.00
        </h2>
        <p className="mt-0 text-slate-500">
          per {payment === "Monthly" ? "month" : "year"}
        </p>
      </div>
      <button
        className={`uppercase w-full py-[15px] md:px-[25px] mx-auto mt-[20px] md:m-0 ${
          black
            ? "text-black bg-white hover:bg-slate-300"
            : "text-white hover:text-black bg-black hover:bg-slate-300"
        } xl:px-[50px] cursor-pointer`}
      >
        <h4 className="my-0">pick a plan</h4>
      </button>
    </div>
  );
}
