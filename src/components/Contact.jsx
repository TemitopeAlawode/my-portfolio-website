import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div
      className=" bg-customBlue space-y-8 mb-20 md:space-y-0"
    >
      <div className="container text-white mx-auto pb-8">
        <h1 className="p-3 font-bold text-center text-4xl">CONTACT ME</h1>
        <div className="bg-[#172554] p-6 rounded-lg shadow-lg justify-center">
          {/* Email */}
          <div className="flex flex-col items-center gap-4 mb-4 md:flex-row">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto: alawodetemitope9@gmail.com"
              className="text-lg hover:underline"
            >
              alawodetemitope9@gmail.com
            </a>
          </div>

          {/* Github */}
          <div className="flex flex-col items-center gap-4 mb-4 md:flex-row">
            <FaGithub className="text-xl" />
            <a
              href="https://github.com/TemitopeAlawode"
              className="text-lg hover:underline"
            >
              https://github.com/TemitopeAlawode
            </a>
          </div>

          {/* Linked In */}
          <div className="flex flex-col items-center gap-4 mb-4 md:flex-row">
            <FaLinkedin className="text-xl" />
            <a
              href="https://www.linkedin.com/in/temitope-alawode-b66068268/"
              className="text-lg hover:underline"
            >
              https://www.linkedin.com/in/temitope-alawode-b66068268/
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-4 mb-4 md:flex-row">
            <FaPhone className="text-xl" />
            <a href="tel: +2347040789324" className="text-lg hover:underline">
              +234-7040-789-324
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
