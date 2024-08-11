import ResponsiveImage from "../../utils/ResponsiveImage";

function ImageAndTextContainer({ children, image, classes }) {
  return (
    <section className="relative md:flex">
      <ResponsiveImage {...image} classes={classes.img} />
      <article
        className={`${classes.article} w-full px-[30px] py-[50px] flex flex-col justify-center items-start md:w-auto md:max-w-[495px] md:px-[50px] xl:max-w-[610px] xl:px-[150px]`}
      >
        {children}
      </article>
    </section>
  );
}

export default ImageAndTextContainer;
