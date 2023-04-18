import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import pdf_resume from "../components/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import Particle from "../components/particle";



import Logo from "../images/logo.svg";
import About_Logo from "../images/about-logo.svg";
import download_Logo from "../images/download-logo.svg"
import Projects_Logo from "../images/projects-logo.svg";


import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";

import Type from "../components/Type"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
    return (
        
    <Wrapper>
        {Array.from({ length: 50 }).map((_, index) => (
            <br key={index} />
        ))}        
      <Social>
        <div />
          <a
            href="https://github.com/Dauniel"
            target="_blank"
            rel="noreferrer"
            className="icon-colour-black home-social-icons"
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
            <a href="/about">
                <img src = {About_Logo} alt = "about"/>
            </a>
          </li>
          <li>
            <a href="/projects">
                <img src = {Projects_Logo} alt = "projects"/>
            </a>
          </li>
        <li>
            <a href= {pdf_resume} download style={{ color: 'black' }}>
                <strong>Download Resume</strong>
                <img src={download_Logo} alt="resume" />
            </a>
        </li>
        </Menu>
        <div>
        <br>
        </br>
            <Row className="resume">
                <Document file={pdf_resume} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer = {false}/>
                </Document>
            </Row>
        </div>
    </Content>
    </Wrapper>
    );}

export default Resume;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  background-color: #ABC4FF;

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
      #9eb3f9 0%,
      #7b93f6 33.57%,
      #5373f3 65.86%,
      #2942f0 100%
    );
  }
  
`;
