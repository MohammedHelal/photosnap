import Plan from "./Plan";

export default function PaymentPlans({ paymentDuration }) {
  return (
    <section className="w-full px-[25px] xl:flex xl:items-center xl:justify-center">
      <Plan
        title="Basic"
        para="Includes basic usage of our platform. Recommended for new and aspiring photographers."
        price="19"
        payment={paymentDuration}
      />
      <Plan
        title="Pro"
        para="More advanced features available. Recommended for photography veterans and professionals."
        price="39"
        payment={paymentDuration}
        black={true}
      />
      <Plan
        title="Business"
        para="Additional features available such as more detailed metrics. Recommended for business owners."
        price="99"
        payment={paymentDuration}
      />
    </section>
  );
}
