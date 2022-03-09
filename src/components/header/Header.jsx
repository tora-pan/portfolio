import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  // add an event listener to the window to get the window size
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close the nav menu if open and window screen grows
  useEffect(() => {
    if (size.width > 896 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>TP<span className={classes.header__content__logo__text}>Travis Pandos</span></h2>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <button>Resume</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={handleToggle} />
          ) : (
            <AiOutlineClose onClick={handleToggle} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
