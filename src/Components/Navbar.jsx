const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between center max-w-[48px]">
      <div className="Navbar_navList__mg4Oa">
        <a
          data-navbar-item="true"
          className="Navbar_navLink__Havgb"
          aria-current=""
          href="/"
        >
          Home
        </a>
        <a
          data-navbar-item="true"
          className="Navbar_navLink__Havgb"
          aria-current=""
          href="/events/"
        >
         Donars
        </a>
        
        <a
          data-navbar-item="true"
          className="Navbar_navLink__Havgb"
          aria-current=""
          href="/teams/"
        >
          Teams
        </a>
        <a
          data-navbar-item="true"
          className="Navbar_navLink__Havgb"
          aria-current=""
          href="/gallery/"
        >
         About
        </a>
        <a
          data-navbar-item="true"
          className="Navbar_navLink__Havgb"
          aria-current=""
          href="/contact/"
        >
          Contact
        </a>
        </div>
          </nav>
  );
};

export default Navbar;
