import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

import styled from "styled-components";

const Name = ({ setUser }) => {
  const [inputVal, setInputVal] = useState("");
  const location = useLocation();

  useEffect(() => {
    gsap.to(".Name-section", {
      opacity: 1,
      delay: 0.2,
      duration: 0.6,
      ease: "power3.in",
    });
  }, []);

  return (
    <Wrapper className="Name-section">
      <h1 className="name-heading">What do your friends calls you?</h1>
      <form
        className="name-form"
        onSubmit={e => {
          e.preventDefault();
          localStorage.setItem("user", JSON.stringify(inputVal));
          setUser(inputVal);
          location.pathname = "/greeting";
        }}
      >
        <div className="input-group">
          <input
            type="text"
            placeholder="e.g. Sam"
            onChange={e => setInputVal(e.target.value)}
          />
        </div>

        <button type="submit">
          <img src="./images/black-arrow.svg" alt="arrow-icon-svg" />
        </button>
      </form>

      <img src="./images/name-image1.svg" className="name-img" alt="img" />

      <img src="./images/legs.svg" className="legs" alt="legs" />
      <img src="./images/body.svg" className="body" alt="body" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-content: center;
  height: 80vh;
  overflow: hidden;
  text-align: center;
  opacity: 0;

  .legs {
    position: absolute;
    top: -4rem;
    width: 310px;
    left: -45px;
  }
  .body {
    position: fixed;
    top: -11rem;
    width: 310px;
    right: -45px;
  }

  .name-img {
    position: fixed;
    bottom: -5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
  }

  h1 {
    font-size: 2.8rem;
  }

  form {
    width: 90%;
    margin: 5rem auto 2rem;
    max-width: 500px;
    position: relative;
  }

  button {
    all: unset;
    position: absolute;
    right: 0;
    bottom: 1rem;
    cursor: pointer;
  }
`;

export default Name;
