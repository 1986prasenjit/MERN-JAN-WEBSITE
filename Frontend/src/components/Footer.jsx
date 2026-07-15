import { NavLink, Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-black/15 bg-white px-6 py-10 shadow-[0_-10px_30px_rgba(15,23,42,0.06)] sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <section className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold uppercase text-[#1A56DB]">
            lexus
          </h2>
          <p className="max-w-sm text-sm font-semibold uppercase leading-6 text-slate-600">
            Premium everyday products designed for comfort, style, and reliable
            quality.
          </p>
          <div className="flex items-center gap-3">
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black/15 text-slate-600 transition-colors duration-200 hover:border-[#1A56DB] hover:bg-[#1A56DB] hover:text-white"
              to="https://www.facebook.com"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black/15 text-slate-600 transition-colors duration-200 hover:border-[#1A56DB] hover:bg-[#1A56DB] hover:text-white"
              to="https://www.instagram.com"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black/15 text-slate-600 transition-colors duration-200 hover:border-[#1A56DB] hover:bg-[#1A56DB] hover:text-white"
              to="https://twitter.com"
              aria-label="X"
            >
              <FaXTwitter />
            </Link>
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black/15 text-slate-600 transition-colors duration-200 hover:border-[#1A56DB] hover:bg-[#1A56DB] hover:text-white"
              to="https://www.linkedin.com"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold uppercase text-black">
            Explore
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wide text-slate-600">
            <li>
              <NavLink className="transition-colors duration-200 hover:text-[#1A56DB]" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="transition-colors duration-200 hover:text-[#1A56DB]" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="transition-colors duration-200 hover:text-[#1A56DB]" to="/new-arrival">
                New Arrival
              </NavLink>
            </li>
            <li>
              <NavLink className="transition-colors duration-200 hover:text-[#1A56DB]" to="/collections">
                Collections
              </NavLink>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-bold uppercase text-black">
            Support
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wide text-slate-600">
            <li>
              <NavLink className="transition-colors duration-200 hover:text-[#1A56DB]" to="/shipping">
                Shipping
              </NavLink>
            </li>
            <li>
              <NavLink className="transition-colors duration-200 hover:text-[#1A56DB]" to="/returns">
                Returns
              </NavLink>
            </li>
            <li>
              <NavLink className="transition-colors duration-200 hover:text-[#1A56DB]" to="/size-guide">
                Size Guide
              </NavLink>
            </li>
            <li>
              <NavLink className="transition-colors duration-200 hover:text-[#1A56DB]" to="/help-center">
                Help Center
              </NavLink>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold uppercase text-black">
            Stay Updated
          </h3>
          <p className="text-sm font-semibold uppercase leading-6 text-slate-600">
            Get product drops, offers, and store updates in your inbox.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <input
              className="min-h-12 flex-1 rounded-md border border-black/15 bg-[#f5f5f5] px-4 text-sm font-semibold uppercase outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[#1A56DB]"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
            />
            <button
              className="min-h-12 rounded-md bg-[#1A56DB] px-5 text-sm font-bold uppercase text-white transition-colors duration-200 hover:bg-blue-800"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-5 border-t border-black/15 pt-6 text-sm font-semibold uppercase text-slate-600 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid gap-3 sm:grid-cols-3 lg:gap-8">
          <p className="flex items-center gap-2">
            <FiMapPin className="text-[#1A56DB]" />
            New Delhi, India
          </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-[#1A56DB]" />
            +91 98765 43210
          </p>
          <p className="flex items-center gap-2">
            <FiMail className="text-[#1A56DB]" />
            support@lexus.com
          </p>
        </div>
        <p className="text-slate-500">
          © {new Date().getFullYear()} Lexus. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
