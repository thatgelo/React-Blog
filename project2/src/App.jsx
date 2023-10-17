import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="macbook-air">
      <div className="div">
        <div className="text-wrapper">Project 2 Food Blog</div>
        <div className="group">
          <div className="navbar">
            <Button text="About"></Button>
            <Button text="Articles"></Button>
            <Button text="Blog"></Button>
            <Button text="Contact"></Button>
          </div>
        </div>
        <a href="https://ibb.co/2MLHLkp"><img src="https://i.ibb.co/fNKLKxT/Download-free-image-of-Ocean-life-fish-antique-clipart-illustration-collection-by-jingpixar-about-aq.jpg" alt="Download-free-image-of-Ocean-life-fish-antique-clipart-illustration-collection-by-jingpixar-about-aq"  className="download-free-image" border="0"/></a>
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/znDDP2v/balanced-diet.png" className="balanced-diet" alt="balanced-diet" border="0"/></a>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="text-wrapper-6">Featured Articles</div>
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
        </div>
        <a href="https://ibb.co/0q9Wc1P"><img src="https://i.ibb.co/Q9Hqfhs/FOOD.jpg" className="FOOD" alt="FOOD" border="0"/></a>
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/mNxD10n/Ryo-Takemasa.jpg" className="ryo-takemasa" alt="Ryo-Takemasa" border="0"/></a>
        <div className="rectangle-3" />
        <p className="lorem-ipsum-is">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries.
        </p>
        <p className="p">
          The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
    </>
  )
}

export default App


import React from "react";
import "./App.css";

export const MacbookAir = () => {
};