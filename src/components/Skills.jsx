import { 
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt 
  } from "react-icons/fa";
  import { 
    SiTailwindcss, SiJavascript, SiPhp, SiMysql, SiExpress, SiTypescript, SiRedux, SiRedis 
  } from "react-icons/si";

const Skills = () => {
  return (
    <div className=" bg-customBlue space-y-8 text-4xl mb-20 md:space-y-0">
    <div className="container text-white mx-auto">
      <h1 className="p-3 text-center font-bold">MY SKILLS</h1>
      

      {/* Skills Icons */}
      <div className="flex flex-wrap justify-center gap-x-44 gap-y-12 mt-5 pb-11">
        {/* HTML */}
        <div className="flex flex-col items-center">
            <FaHtml5 className="text-orange-600 text-6xl"/>
            <p className="pt-2 text-lg">HTML5</p>
        </div>
         {/* CSS */}
         <div className="flex flex-col items-center">
            <FaCss3Alt className="text-blue-600 text-6xl"/>
            <p className="pt-2 text-lg">CSS3</p>
        </div>
         {/* JavaScript */}
         <div className="flex flex-col items-center">
            <SiJavascript className="text-yellow-600 text-6xl"/>
            <p className="pt-2 text-lg">JavaScript</p>
        </div>
         {/* React */}
         <div className="flex flex-col items-center">
            <FaReact className="text-blue-600 text-6xl"/>
            <p className="pt-2 text-lg">React</p>
        </div>
         {/* Tailwind */}
         <div className="flex flex-col items-center">
            <SiTailwindcss className="text-blue-600 text-6xl"/>
            <p className="pt-2 text-lg">Tailwind CSS</p>
        </div>
         {/* Node */}
         <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-600 text-6xl"/>
            <p className="pt-2 text-lg">Node.js</p>
        </div>
         {/* ExpressJS */}
         <div className="flex flex-col items-center">
            <SiExpress className="text-gray-600 text-6xl"/>
            <p className="pt-2 text-lg">ExpressJS</p>
        </div>
         {/* PHP */}
         <div className="flex flex-col items-center">
            <SiPhp className="text-purple-600 text-6xl"/>
            <p className="pt-2 text-lg">PHP</p>
        </div>
         {/* MySQL */}
         <div className="flex flex-col items-center">
            <SiMysql className="text-blue-600 text-6xl"/>
            <p className="pt-2 text-lg">MySQL</p>
        </div>
         {/* Git */}
         <div className="flex flex-col items-center">
            <FaGitAlt className="text-orange-600 text-6xl"/>
            <p className="pt-2 text-lg">Git</p>
        </div>
        {/* TypeScript */}
        <div className="flex flex-col items-center">
            <SiTypescript className="text-6xl" color="#3178C6"/>
            <p className="pt-2 text-lg">TypeScript</p>
        </div>
        {/* Redux */}
        <div className="flex flex-col items-center">
            <SiRedux className="text-6xl" color="#764ABC"/>
            <p className="pt-2 text-lg">Redux</p>
        </div>
        {/* Redis */}
        <div className="flex flex-col items-center">
            <SiRedis className="text-6xl" color="#DC382D"/>
            <p className="pt-2 text-lg">Redis</p>
        </div>
        
        
      </div>
      </div>
   </div>
  )
}

export default Skills