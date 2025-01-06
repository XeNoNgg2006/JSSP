import './App.css'


import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useEffect} from "react"


function App() {

  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
    

  return (
    <div className="app">
        <div className="navbar"></div>
        <div className="page">
            <div className="header">
              <h1>Buy iPhone 15</h1>
              <p>From $699 or $29.12/mo for 24 mo.*</p>
            </div>
          <div className="main">
          <div className="slider-container swiper">
        <div className="slider swiper-wrapper">
            <div className="swiper-slide">
                <img className="slider-img" src="./iphone15_1.webp" alt="iphone1" />
            </div>
            <div className="swiper-slide">
                <img className="slider-img" src="./iphone15_2.webp" alt="iphone2" />
            </div>
            <div className="swiper-slide">
                <img className="slider-img" src="./iphone15_3.webp" alt="iphone3" />
            </div>
            <div className="swiper-slide">
                <img className="slider-img" src="./iphone15_4.webp" alt="iphone4" />
            </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                
              </div>
            
            <div className="choice">
                <fieldset>
                  <legend>
                    <span className="legend-model">Model.</span>
                    <span className="legend-text"> Which is best for you?</span>
                    </legend>
                    <div className="iphone-choices-container">
                      <div className="first-container">
                          <input className="choice-input" type="radio" id="15" name="iphone-choice" checked/>
                          <label className="choice-label" htmlFor="15">
                                <span className="label-row">
                                  <span className="label-iphone">
                                    <span className="label-name">iPhone 15</span>
                                    <span className="label-description">6.1-inch display</span>
                                  </span>
                                  <span className="label-payments">From $699 <br/>or $29.12/mo <br/> for 24 mo.*</span>
                                </span>
                          </label>
                      </div>
                      <div className="second-container">
                          <input className="choice-input" type="radio" id="15plus" name="iphone-choice" />
                          <label className="choice-label" htmlFor="15plus">
                                <span className="label-row">
                                  <span className="label-iphone">
                                    <span className="label-name">iPhone 15 Plus</span>
                                    <span className="label-description">6.7-inch display</span>
                                  </span>
                                  <span className="label-payments">From $799 <br/>or $33.29/mo <br/> for 24 mo.*</span>
                                </span>
                          </label>
                      </div>
                    </div>
                  
                </fieldset>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default App;
