import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import { generateLineBreaks } from "../components/myFunctions";


import Logo from "../images/logo.svg";
import About_Logo from "../images/about-logo.svg";
import Resume_Logo from "../images/resume-logo.svg"

import IconLaptop from "../images/icon-laptop.svg";
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";

import Type from "../components/Type"

function Projects() {
    return (
    <Wrapper>
        {Array.from({ length: 50 }).map((_, index) => (
            <br key={index} />
        ))}        
        {/* <Spline
          className="spline"
          scene="https://draft.spline.design/Y8lc2n3JY59606uA/scene.splinecode"
        /> */}
      <Social>
        <div />
          <a
            href="https://github.com/Dauniel"
            target="_blank"
            rel="noreferrer"
            className="icon-colour-black  home-social-icons"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-chang-457886248/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour-black  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
      </Social>
      <Content>
      <Menu>
          <li>
            <a href="/">
                <img src = {Logo} alt = "home"/>
            </a>
          </li>
          <li>
            <a href="/">
                <img src = {About_Logo} alt = "about"/>
            </a>
          </li>
          <li>
            <a href="/resume">
                <img src = {Resume_Logo} alt = "resume"/>
            </a>
          </li>
        </Menu>
        <h1 style={{ fontSize: "2em", color: "black"}}><Type strings = {["Projects"]} /></h1>
        <h1 style={{ fontSize: "1.25em", color: "black" }}>
          <li>
          <span style={{ borderBottom: "1px solid black" }}>
            Biological Simulation of Infectious Disease Transmission(SIR MODEL)
          </span>
            <ul>
              <li style = {{fontSize : "0.75em"}}> 
              Python project using CoCalc software to simulate infectious disease spread using the SIR model. 
              Implemented the SIR model using scipy.integrate.odeint and calculated equilibrium points and the Jacobian matrix for stability analysis. 
              Project showcases proficiency in Python, differential equations, numerical methods, and data analysis for real-world problems in epidemiology.
              </li>
            </ul>
          </li>
          <li>
            <span style={{ borderBottom: "1px solid black" }}>
            DNA Transcription and Translation Program using Codon Mapping
            </span>
            <ul>
              <li style = {{fontSize : "0.75em"}}> 
              C++ program that transcribes a DNA strand into mRNA and maps each codon to its respective amino acid using a predefined map. 
              The program also verifies the validity of the input strand and allows the user to select the direction of transcription. 
              The program outputs the resulting mRNA sequence and corresponding amino acid sequence.
              </li>
            </ul>
          </li>
          <li>
          <span style={{ borderBottom: "1px solid black" }}>
            High-Capacity User/Movie Database
          </span>
          <ul>
              <li style = {{fontSize : "0.75em"}}> 
              C++ program that efficiently manages and retrieves data with hundreds of thousands of movies and users using advanced data structures and algorithms. 
              It uses a self-balancing binary search tree to maintain a sorted collection of movies and users with their respective data (email, actors, genres, rating, year, etc. ) 
              and employs a hash table to map information from users to movies and vice versa. Implements lambda functions, enabling streamlined and efficient data manipulation and 
              filtering to create a point recommendation system.
              </li>
            </ul>
          </li>
          <li>
            <span style = {{borderBottom: "1px solid black"}}
              
            ></span>
          </li>
        </h1>

      </Content>
    </Wrapper>
    );}

export default Projects;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  background-color: #dde3f4;

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
    max-width: 1050px;
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
        border: 1px solid rgba(0, 0, 0, 0.75);
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
      #2b2b2b 0%,
      #404040 20%,
      #1a1a1a 50%,
      #000000 80%,
      #000000 100%
    );
  }  
`;
