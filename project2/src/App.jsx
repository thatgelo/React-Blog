import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <div className="macbook-air">
      <div className="div">
        <div className="text-wrapper">Project 2 Food Blog</div>
        <div className="group">
          <div className="navbar">
            <div className="text-wrapper-2">About</div>
            <div className="text-wrapper-3">Articles</div>
            <div className="text-wrapper-4">Blog</div>
            <div className="text-wrapper-5">Contact</div>
          </div>
        </div>
        <img
          className="download-free-image"
          alt="Download free image"
          src="download-free-image-of-ocean-life-fish-antique-clipart-illustration-collection-by-jingpixar-about-aquarium-fish-illustration-vintage-sea-sea-and-vintage-animal-2676462-1.png"
        />
        <img className="balanced-diet" alt="Balanced diet" src="balanced-diet-1.png" />
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="text-wrapper-6">Featured Articles</div>
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
        </div>
        <img className="FOOD" alt="Food" src="FOOD-1.png" /> 
        <img className="ryo-takemasa" alt="Ryo takemasa" src="ryo-takemasa-1.png" />
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