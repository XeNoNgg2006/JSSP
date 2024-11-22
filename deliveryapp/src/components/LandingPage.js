import "./styles/LandingPage.css"
import Header from "./Header.js"
import Footer from "./Footer.js"


import React from 'react';
import { useNavigate } from 'react-router-dom';   




function LandingPage() {
    const navigate = useNavigate();

    const goToDeliveryPage = () => {
        navigate('./DeliveryPage');
        
      };

    const goToPickUpPage = () => {
        navigate('./PickUpPage');
        
    }

    return(
        <div className="landing-page" id="landing-page">
            <Header class="header" role="banner"/>
            <main className="main">
            
                <div className="delivery-window">

                    <h1 className="delivery-window-title">&nbsp;&nbsp;Order Online</h1>
                    <div className="delivery-methods-container">
                        <button className="delivery-method delivery" type="button" onClick={goToDeliveryPage}>
                            <div className ="delivery-text">Delivery</div>
                            <img className="delivery-img" src="./fast-delivery.png" alt="delivery-img"/>
                            <img src="./delivery-next.png" className="next-img delivery-next-img" alt="delivery-next"/>
                        </button>
                        <button className="delivery-method pickup" type="button" onClick={goToPickUpPage}>
                            <p className ="pickup-text">Pickup</p>
                            <img className="pickup-img" src="./pickup.png" alt="pickup-img"/>
                            <img src="./pickup-next.png" className="next-img pickup-next-img" alt="pickup-next"/>
                        </button>
                    </div>
                </div>

            </main>

            <Footer/>
        </div>

    );
}

export default LandingPage