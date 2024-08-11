import Image from "next/image";

function Feature({ image, heading, para }) {
  return (
    <article className="my-[50px] mx-auto max-w-[300px] text-center md:max-w-[350px] lg:mx-[30px]">
      <div className="flex items-center justify-center h-[75px] mb-[30px]">
        <Image src={image} alt="feature illustration" />
      </div>

      <h3>{heading}</h3>
      <p className="text-slate-500">{para}</p>
    </article>
  );
}

export default Feature;
