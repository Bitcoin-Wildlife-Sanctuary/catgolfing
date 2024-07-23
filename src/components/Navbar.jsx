import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import hamburger from "../assets/hamburger.svg";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);
  return (
    <>
      <nav className="justify-center font-streamer py-[40px] px-[130px] hidden tab:flex">
        {/* <Logo /> */}
        <NavigationLinks />
      </nav>
      <nav className="font-streamer pt-[39px] px-[18px] tab:hidden flex gap-x-2 items-center">
        <button onClick={toggleMenu}>
          <img src={hamburger} alt="" />
        </button>
        <h2 className="text-[#FFD644]">
          {isHomePage ? "Home" : "Leaderboard"}
        </h2>
      </nav>
      {menuOpen &&
        createPortal(<MobileMenu toggleMenu={toggleMenu} />, document.body)}
    </>
  );
}

export default Navbar;
