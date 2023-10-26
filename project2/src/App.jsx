import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, BrowserRouter, Router, RouterProvider, Link } from 'react-router-dom'
import Button from "./Button"
import About from "./about"
import ArticleOne from './articleone'
import ArticleTwo from './articletwo'


function App() {

  return (
    <>
      <div className="macbook-air">
      <div className="div">
        <div className="text-wrapper">Project 2 Food Blog</div>
        <div className="group">
          <div className="navbar">
            <BrowserRouter>
              <Link to='/about'>
                <button className='button'>About</button>
              </Link>
              <Link to='/'>
                <button className='button'>Home</button>
              </Link>
            </BrowserRouter>
          </div>
        </div>
        <img src="https://i.ibb.co/fNKLKxT/Download-free-image-of-Ocean-life-fish-antique-clipart-illustration-collection-by-jingpixar-about-aq.jpg" alt="Download-free-image-of-Ocean-life-fish-antique-clipart-illustration-collection-by-jingpixar-about-aq"  className="download-free-image" border="0"/>
        <img src="https://i.ibb.co/znDDP2v/balanced-diet.png" className="balanced-diet" alt="balanced-diet" border="0"/>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="text-wrapper-6">Featured Articles</div>
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
        </div>
        <img src="https://i.ibb.co/Q9Hqfhs/FOOD.jpg" className="FOOD" alt="FOOD" border="0"/>
        <img src="https://i.ibb.co/mNxD10n/Ryo-Takemasa.jpg" className="ryo-takemasa" alt="Ryo-Takemasa" border="0"/>
        <div className="rectangle-3" />
        <p className="lorem-ipsum-is">
          <BrowserRouter>
            <Link to='/articleone'>
              <h3>Mukbangs: What's the Hype?</h3>
            </Link>
          </BrowserRouter>
          Mukbangs are a rising internet trend where people film themselves eating, whether it be a tiny snack or a huge 5 course meal.
          Many people, myself included, have watched a couple of mukbangs at least once in our lives. What makes them so interesting? On the surface level,
          it's just a person eating food on the screen - we don't get anything out of it. However, as we delve deeper, the truth starts to unravel itself.
        </p>
        <p className="p">
        <BrowserRouter>
            <Link to='/articletwo'>
              <h3>Bingsu</h3>
            </Link>
          </BrowserRouter>
          Bingsu, a beloved Korean dessert, has taken the global culinary scene by storm with its irresistible blend of flavors and textures. 
          This delightful treat is a perfect escape from the scorching summer heat or a welcome indulgence in any season.


        </p>
      </div>
    </div>
    <RouterProvider router={router}/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
  },
  {
    path:"/about",
    element: <About/>,
  },
  {
    path:"/articleone",
    element: <ArticleOne/>
  },
  {
    path:"/articletwo",
    element: <ArticleTwo/>
  }
]);

export default App



