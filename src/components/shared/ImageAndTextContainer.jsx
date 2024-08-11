import ResponsiveImage from "../../utils/ResponsiveImage";

function ImageAndTextContainer({ children, image, classes, hideBar }) {
  return (
    <section className="relative md:flex">
      <ResponsiveImage {...image} classes={classes.img} />
      <article
        className={`${classes.article} relative md:static w-full py-[50px] flex flex-col justify-center items-start md:w-auto md:max-w-[495px] xl:max-w-[610px]`}
      >
        <div className="md:relative w-full px-[30px] md:px-[50px] xl:px-[150px]">
          <div
            className={`${
              hideBar ? "hidden" : "block"
            } w-[128px] md:w-auto absolute top-0 md:bottom-0 md:left-0 fancy-bar box-decoration-clone`}
          ></div>
          {children}
        </div>
      </article>
    </section>
  );
}

export default ImageAndTextContainer;
