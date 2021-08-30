import React, { useEffect, useState } from "react";
import wordings from "./wordings";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={wordings.logo} alt="Netflix logo" />
      <img className="nav__avatar" src={wordings.avatar} alt="avatar" />
    </div>
  );
};

export default Navbar;
