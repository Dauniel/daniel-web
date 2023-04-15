import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "../images/logo.svg";
import About_Logo from "../images/about-logo.svg";
import Resume_Logo from "../images/resume-logo.svg"

import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";

import Type from "../components/Type"


function Home() {
  return (
    <Wrapper>
      {Array.from({ length: 50 }).map((_, index) => (
            <br key={index} />
        ))}     
      <Spline
        className="spline"
        scene="https://draft.spline.design/q6bUeaE9zPmthR8J/scene.splinecode"
      />
      <Social>
        <div />
          <a
            href="https://github.com/Dauniel"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-chang-457886248/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
      </Social>
      <Content>
        <Menu>
          <li>
            <a href="/about">
                <img src = {About_Logo} alt = "about"/>
            </a>
          </li>
          <li>
            <a href="/resume">
                <img src = {Resume_Logo} alt = "resume"/>
            </a>
          </li>
        </Menu>
        {/* name */}
        <h1 style={{ fontSize: "2.5em" }}><Type strings = {["Daniel Chang"]} /></h1>
        <h1 style={{ fontSize: "1.25em" }}>
          Fields of Interest: <i style={{ color: "lightpink", fontStyle: "italic" }}> Biology </i> and <i style={{ color: "lightpink", fontStyle: "italic" }}>Computer Science</i>
          <br />
          <br />
          Currently using
          <i style={{ color: "lightpink", fontStyle: "italic" }}> C++ </i>
          and
          <i style={{ color: "lightpink", fontStyle: "italic" }}> Python </i>
          <br></br>
          Learning
          <i style={{ color: "lightpink", fontStyle: "italic" }}> JavaScript </i>
          using
          <i style={{ color: "lightpink", fontStyle: "italic" }}> React</i>
          ,
          <i style={{ color: "lightpink", fontStyle: "italic" }}> HTML/CSS</i>
          , and
          <i style={{ color: "lightpink", fontStyle: "italic" }}> Swift</i>
          <br />
          <br />
          What I've been using a lot recently:
          <br />
          <i style = {{color: "lightpink", fontStyle: "italic"}}> C++</i>: data structures/algorithms to develop high-capacity databases and object-oriented progamming for video game development
          <br />
          <i style = {{color: "lightpink", fontStyle: "italic"}}> Python</i>: utilized computational modeling and calculus to enable in-depth analysis and optimization of real-life biological processes
          <br />
          <i style = {{color: "lightpink", fontStyle: "italic"}}>HTML/CSS, Javascript using React</i>: better understand front-end development like creating this website
          <br />
          <br />
          What I've been learning:
          <br />
          <i style = {{color: "lightpink", fontStyles: "italic"}}>Swift </i> 
          for ios app development
          <br /> 
          <i style = {{color: "lightpink", fontStyles: "italic"}}> Cloud Computing </i>
          for cross-platform web and mobile applications.
          <br />
        </h1>
      </Content>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  background-color: #A3A8D4;

  .spline {
    position: absolute;
    margin: 0;
    top: 10px;
    right: 0px;
    left: 300px;
    width: 1200px;
    height: 1000px;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 700px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;
  pointer-events: auto;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;

      :hover {
        border: 1px solid rgba(0, 0, 0, 1);
      }
    }
  }

  button {
    margin: 0;
    width: auto;
    background: rgba(31, 66, 250, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`;
