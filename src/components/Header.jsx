const Header = () => {
  return (
<div className="h-15 w-150 rounded-full fixed left-1/2 top-10 -translate-1/2 z-50 bg-black border-white flex items-center justify-center text-white tracking-wider font-normal text-[20px]">
      <ul className="flex flex-row gap-16">
        <li>
          <a href="#hero" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
