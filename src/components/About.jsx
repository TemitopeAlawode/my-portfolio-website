const About = () => {
  return (
    <div className=" bg-customBlue space-y-8 text-4xl mb-20 md:space-y-0">
      <div className="container text-white mx-auto">
        <h1 className="pt-3 text-center font-bold">ABOUT</h1>
        <div className="text-lg leading-7 space-y-4 p-10">
          <p>
            Hi there! I’m
            <span className="font-semibold"> Temitope Alawode </span>, a
            passionate and driven computer science student currently navigating
            my path through the exciting world of
            <span className="font-semibold italic">
              {" "}
              technology and problem-solving.{" "}
            </span>
          </p>
          <p>
            With a growing interest in{" "}
            <span className="font-semibold">
              {" "}
              back-end development, data analysis,{" "}
            </span>{" "}
            and the challenges of building efficient, responsive web
            applications, I am steadily building my skills to become a versatile{" "}
            <span className="font-semibold"> full-stack developer.</span>
          </p>
          <p>
            I’ve embarked on an enriching journey, learning languages and tools
            like React, PHP, JavaScript, and more. While it hasn’t always been
            easy—balancing new challenges and figuring out where my true
            passions lie—I am committed to continuously learning and improving.
          </p>
          <p>
            When I’m not coding, you might find me reflecting on personal
            growth, watching movies, sleeping, or enjoying meaningful
            conversations with those around me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
