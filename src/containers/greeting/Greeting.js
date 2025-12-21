import React from "react";
import "./Greeting.scss";

export default function Greeting() {
  const headshotUrl = process.env.PUBLIC_URL + "/ashley.png"; // put in /public

  return (
    <section className="greeting-main" id="home">
      <div className="greeting-text-div">
        <h1 className="greeting-text">Hey, I&apos;m Ashley</h1>

        <p className="greeting-subtitle">UX / UI Designer</p>
      </div>

      <div className="greeting-image-div">
        <div className="heroHeadshot" aria-label="Headshot">
          <span className="heroShape heroShape1" />
          <span className="heroShape heroShape2" />
          <span className="heroShape heroShape3" />
          <span className="heroDot heroDot1" />
          <span className="heroDot heroDot2" />
          <span className="heroPlus heroPlus1">+</span>
          <span className="heroPlus heroPlus2">+</span>

          <img
            className="heroHeadshotImg"
            src={headshotUrl}
            alt="Ashley headshot"
          />
        </div>
      </div>
    </section>
  );

}
