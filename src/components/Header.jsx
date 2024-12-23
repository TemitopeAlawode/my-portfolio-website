const Header = () => {
  return (
    <header id="header" className="sticky top-0 z-10 bg-[#172554] py-4">
        <div  className="relative container flex justify-between items-center mx-auto text-white">
      <div className="text-5xl font-bold">
        <a href="#">TA</a> 
          </div>
      <div className="text-2xl space-x-6">
        <a href="#" className=" hover:text-blue-500">
          Home
        </a>
        <a href="#about" className=" hover:text-blue-500">
          About
        </a>  
           <a href="#skills" className=" hover:text-blue-500">
          Skills
        </a>   
          <a href="#projects" className=" hover:text-blue-500">
          Projects
        </a>    
         <a href="#education" className=" hover:text-blue-500">
          Education
        </a>   
          <a href="#contact" className=" hover:text-blue-500">
          Contact
        </a>
        </div>
        
      </div>
      
    </header>
  );
};

export default Header;
