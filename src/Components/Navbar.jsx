const Navbar = () => {
  return (
    <aside className="mt-0">
    <nav className="sticky top-0 flex flex-col justify-between center max-w-[48px]">
      <ul className="Navbar_navList__mg4Oa">
        <li className="inline-block text-[25px] ml-[10px] px-[0px] py-[20px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
          <a
            data-navbar-item="true"
            className="p-[16px] font-[500] text-sm no-underline relative transition-all hover:text-[#37FF8B]  z-[80]"
            aria-current=""
            href="/" 
          >
            Home
          </a>
        </li>
       
        <li className="inline-block text-[25px] ml-[10px] px-[0px] py-[20px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] ">
          <a
            data-navbar-item="true"
            className="p-[16px] font-[500] text-sm no-underline relative transition-all hover:text-[#37FF8B]  z-[80]"
            aria-current=""
            href="/"
          >
            Donars
          </a>
        </li>
        <li className="inline-block text-[25px] ml-[10px] px-[0px] py-[20px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] ">
          <a
            data-navbar-item="true"
            className="p-[16px] font-[500] text-sm no-underline relative transition-all hover:text-[#37FF8B]  z-[80]"
            aria-current=""
            href="/login"
          >
           Login
          </a>
        </li> <li className="inline-block text-[25px] ml-[10px] px-[0px] py-[20px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] ">
          <a
            data-navbar-item="true"
            className="p-[16px] font-[500] text-sm no-underline relative transition-all hover:text-[#37FF8B]  z-[80]"
            aria-current=""
            href="/signup"
          >
            Signup
          </a>
        </li>
        <li className="inline-block text-[25px] ml-[10px] px-[0px] py-[20px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] ">
          <a
            data-navbar-item="true"
            className="p-[16px] font-[500] text-sm no-underline relative transition-all hover:text-[#37FF8B]  z-[80]"
            aria-current=""
            href="/"
          >
            About
          </a>
        </li>
        <li className="inline-block text-[25px] ml-[10px] px-[0px] py-[20px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform]">
          <a
            data-navbar-item="true"
            className="p-[16px] font-[500] text-sm no-underline relative transition-all hover:text-[#37FF8B]  z-[80]"
            aria-current=""
            href="/"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
    </aside>
  );
};

export default Navbar;
