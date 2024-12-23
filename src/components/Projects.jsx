import eCommerce from "../assets/images/e-commerce.jpg";
import resultChecker from "../assets/images/result-checker..png";
import musicWebsite from "../assets/images/music.jpg";
import weather from "../assets/images/weather.png";

const projects = [
  {
    image: eCommerce,
    title: "SIMPLE E-COMMERCE WEBSITE",
    description:
      "This is a simple e-commerce website built using HTML, CSS, JavaScript, and PHP. The website is designed to showcase products, provide a detailed product information like category, name and price, and allow users to add items to their shopping cart.",
    technologies: "HTML5, CSS3, JavaScript, PHP, MySQL",
    code: "https://github.com/TemitopeAlawode/Simple-e-commerce-website",
  },
  {
    image: resultChecker,
    title: "RESULTCHECKER WEBSITE",
    description:
      "The Result Checker Website allows students to check their academic results for a specific semester in a session by purchasing a unique pin. The website interacts with a database to verify the pin and retrieve the student's results if available.",
    technologies: "HTML5, CSS3, JavaScript, PHP, MySQL",
    code: "https://github.com/TemitopeAlawode/ResultChecker",
  },
  {
    image: musicWebsite,
    title: "MUSIC WEBSITE",
    description:
      "This is a simple music website with multiple pages where users can browse playlists, explore, view songs, and play music.",
    technologies: "HTML5, CSS3, JavaScript, PHP",
    code: "https://github.com/TemitopeAlawode/Music-Website",
  },
  {
    image: weather,
    title: "WEATHER WEBSITE",
    description:
      "This is a simple weather forecast website built with React where the weather conditions in various cities can be searched.",
    technologies: "CSS3, React",
    code: "https://github.com/TemitopeAlawode/react-weather-app",
  },
];

const Projects = () => {
  return (
    <div
      className=" bg-customBlue space-y-8 text-4xl mb-20 md:space-y-0"
    >
      <div className="container text-white mx-auto">
        <h1 className="p-3 text-center font-bold">MY PROJECTS</h1>

        {/* Projects Container */}
        <div className="flex flex-wrap justify-center gap-32 mt-5 pb-11">
          {projects.map((project, index) => (
            /* Project card */
            <div
              className="flex flex-col bg-[#172554] items-center w-[26rem] rounded-lg"
              key={index}
            >
              {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-lg object-cover w-full"
                />
                {/* Project Info */}
              <div className="p-4">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p className="text-sm pt-3">{project.description}</p>
                <p className="text-2xl italic pt-3 pb-3">{project.technologies}</p>
                <a
                    href={project.code}
                    className="text-sm px-4 py-2 bg-blue-500 hover:bg-blue-800 font-bold rounded-full"
                  >
                    View Code on GitHub
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
