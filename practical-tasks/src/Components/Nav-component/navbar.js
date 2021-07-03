import React from "react";

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent border-b-2 border-blue-400 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className=" md:hidden sm:hidden lg:block"
              href="#"
            >
              <img src="/images/logo_white.png" className=" h-8" alt="" />
            </a>

            <a
              className="sm:hidden lg:hidden md:block "
              href="#"
            >
              <img src="/images/logo_white@2x.png" className="h-8" alt="" />
            </a>

            <a
              className=" md:hidden lg:hidden sm:block"
              href="#"
            >
             <img src="/images/logo_02.png" className="h-8" alt="" />
            </a>


            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                >
                  <span className="ml-2  ">Home</span>
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-55"
                  href="#"
                >
                  <span className="ml-2  ">Portfolio</span>
                </a>
              </li>
              <li className="nav-item">
              <button className="bg-white hover:bg-blue-100 text-blue-500 text-xs uppercase font-bold py-2 px-4 rounded">Hire Me</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default  Navbar;