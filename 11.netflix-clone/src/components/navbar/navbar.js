import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";

const Navbar = (props) => {
  const [isScrolled, setScoll] = useState(false);

  let headerclasses = [classes.header, classes.black];

  const handleScroll = (e) => {
    if (window.scrollY > 200) {
      setScoll(true);
    } else {
      setScoll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={isScrolled ? headerclasses.join(" ") : headerclasses[0]}>
      <nav>
        <img src="./logo.png" alt="netflix" />
      </nav>
      <nav></nav>
    </header>
  );
};

export default Navbar;
