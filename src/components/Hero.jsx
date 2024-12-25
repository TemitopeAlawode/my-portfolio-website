import myPicture from "../assets/images/temitope.jpg";
const Hero = () => {
  return (
    <section id="hero" className="m-16">
      <div className="container flex flex-col items-center mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={myPicture}
            alt="My profile picture"
            className="rounded-full w-11/12"
          />
        </div>
        {/* Description */}
        <div className="text-2xl md:text-4xl font-bold p-7 space-y-12 text-center text-white md:text-left">
          <h1 className="w-auto">
            Hey, I&apos;m
            <br />
            <span className="italic text-blue-500">Temitope Alawode! </span>
          </h1>
          <h1>A Full-Stack Web Developer...</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
