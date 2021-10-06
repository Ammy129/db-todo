import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Greeting = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".greeting-section", {
      opacity: 1,
      delay: 0.1,
      duration: 0.2,
      ease: "power3.in",
    }).from(".greeting-animate", {
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      x: "-50",
    });
  }, []);
  return (
    <Wrapper className="greeting-section">
      <h1 className="greeting-animate">
        Hi {user}! Nice to see you're doing a great work
      </h1>
      <h2 className="greeting-animate">& continue doing that.</h2>
      <div className="btn-wrapper greeting-animate">
        <Link className="btn" to="/">
          Make your To-Do
          <img src="./images/white-arrow.svg" alt="arrow-white-svg-icon" />
        </Link>
      </div>

      <img src="./images/legs.svg" className="legs" alt="legs" />
      <img src="./images/body.svg" className="body" alt="body" />
      <img
        src="./images/greeting-image1.svg"
        className="greeting-image1"
        alt="body"
      />
      <img
        src="./images/greeting-image2.svg"
        className="greeting-image2"
        alt="body"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  place-content: center;
  height: 100vh;
  text-align: center;
  opacity: 0;
  overflow-y: hidden;

  .greeting-image1 {
    width: 500px;
    position: fixed;
    bottom: -12rem;
    right: 0px;
  }
  .greeting-image2 {
    width: 270px;
    position: fixed;
    bottom: 2.2rem;
    left: 50px;
  }

  .legs {
    position: absolute;
    top: -4rem;
    width: 310px;
    left: -45px;
  }
  .body {
    position: absolute;
    top: -11rem;
    width: 310px;
    right: -45px;
  }

  h1 {
    font-size: 2.3rem;
  }
  h2 {
    font-size: 2rem;
  }
  .btn-wrapper {
    margin: 5rem 0;
    img {
      width: 25px;
    }
  }
`;

export default Greeting;
