import React, { useState, useEffect } from "react";
import { useSectionContext } from "./context/sectionContext";
import "./css/home.css";

function HomeMen() {
  return (
    <div className="home" id="home-men">
      <div className="home-heading">
        <span>collections</span>
        <h1>men's section</h1>
      </div>
      <div className="hero">
        <img src="/img/man_hero.png" alt="" />
      </div>
    </div>
  );
}

function HomeWomen() {
  return (
    <div className="home" id="home-women">
      <div className="home" id="home-women">
        <div className="home-heading">
          <span>collections</span>
          <h1>women's section</h1>
        </div>
        <div className="hero">
          <img src="/img/woman_hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}

function Home() {
  const { section } = useSectionContext();
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    animate ? setAnimate(false) : setAnimate(true);
  }, [section.gender]);

  return (
    <div id="home-wrapper" className={animate ? "animateWomen" : "animateMen"}>
      <HomeMen />
      <HomeWomen />
    </div>
  );
}

export default Home;
