import React, { useRef } from "react";
import classes from "./Home.module.scss";
import logo from "../../img/linkedin-profile.png";

const Home = () => {
  const changingText = useRef(null);
  //   let someVal = 0;
  //   const word = "This is a test";

  //   const onClick = () => {
  //     changingText.current.textContent = "hahahaha";
  //   };
  //   setInterval(() => {
  //     if (someVal < word.length && changingText !== null) {
  //       changingText.current.textContent += word[someVal];
  //       someVal++;
  //     } else if (someVal === word.length) {
  //       changingText.current.textContent = "";
  //       someVal = 0;
  //     }
  //   }, 2000);

  return (
    <div className={classes.content}>
      <div className={classes.content__leftPannel}>
        <h1>
          Meet <span className={classes.name}>Travis Pandos</span>
        </h1>
        <h2>
          the <span ref={changingText}>full stack developer...</span>
        </h2>
        <button
          //   onClick={onClick}
          className={classes.content__leftPannel__button}
        >
          LEARN MORE
        </button>
      </div>
      <div className={classes.content__rightPannel}>
        <img
          className={classes.content__rightPannel__image}
          src={logo}
          alt="linkedin profile"
        />
      </div>
    </div>
  );
};

export default Home;
