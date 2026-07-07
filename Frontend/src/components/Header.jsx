import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center h-22 border-b border-black/15 shadow-xl px-10 py-2">
        <h1 className="text-[#1A56DB] text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase">
          lexus
        </h1>
        <nav className="hidden sm:flex">
          <ul className="flex items-center justify-center gap-10">
            <li className="uppercase font-semibold text-gray-600">
              <NavLink
                className={({ isActive }) =>
                  `uppercase font-bold transition-colors duration-200 tracking-wide text-xl ${
                    isActive
                      ? "text-[#1A56DB] underline underline-offset-4"
                      : "text-slate-600 hover:text-indigo-600"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="uppercase font-semibold text-gray-600">
                <NavLink
                className={({ isActive }) =>
                  `uppercase font-bold transition-colors duration-200 tracking-wide text-xl ${
                    isActive
                      ? "text-[#1A56DB] underline underline-offset-4"
                      : "text-slate-600 hover:text-indigo-600"
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="uppercase font-semibold text-gray-600">
              <NavLink
                className={({ isActive }) =>
                  `uppercase font-bold transition-colors duration-200 tracking-wide text-xl ${
                    isActive
                      ? "text-[#1A56DB] underline underline-offset-4"
                      : "text-slate-600 hover:text-indigo-600"
                  }`
                }
                to="/new-arrival"
              >
                new-arrival
              </NavLink>
            </li>
            <li className="uppercase font-semibold text-gray-600">
              <NavLink
                className={({ isActive }) =>
                  `uppercase font-bold transition-colors duration-200 tracking-wide text-xl ${
                    isActive
                      ? "text-[#1A56DB] underline underline-offset-4"
                      : "text-slate-600 hover:text-indigo-600"
                  }`
                }
                to="/collections"
              >
                collections
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="sm:hidden">
          <GiHamburgerMenu className="text-2xl" />
        </section>
        <div className="hidden sm:flex items-center justify-center gap-4">
          <button className="w-28 px-4 py-3 uppercase font-semibold rounded-md border-[#1A56DB] border-2 text-[#1A56DB]">
            login
          </button>
          <button className="w-28 px-4 py-3 uppercase font-semibold border-0 rounded-md bg-[#1A56DB] text-white">
            signup
          </button>
        </div>
        {/* <div>CART AND ACCOUNT SECTION</div> */}
      </header>
    </>
  );
};

export default Header;