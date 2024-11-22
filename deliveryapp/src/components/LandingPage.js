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
            <main className="lp__main">
            
                <div className="lp__order-window">

                    <h1 className="lp__order-window__header">&nbsp;&nbsp;Order Online</h1>
                    <div className="lp__ordering-methods__container">
                        <button className="lp__order-method delivery"/*<--className delivery? */ type="button" onClick={goToDeliveryPage}>
                            <div className ="lp__method-delivery__text">Delivery</div>
                            <img className="lp__method-delivery__img" src="./fast-delivery.png" alt="delivery-img"/>
                            <img src="./delivery-next.png" className="lp__delivery-continue__icon" alt="delivery-next"/>
                        </button>
                        <button className="lp__order-method pickup"/*<--className pickup? */ type="button" onClick={goToPickUpPage}>
                            <p className ="lp__method-pickup__text">Pickup</p>
                            <img className="lp__method-pickup__img" src="./pickup.png" alt="pickup-img"/>
                            <img src="./pickup-next.png" className="lp__pickup-continue_icon" alt="pickup-next"/>
                        </button>
                    </div>
                </div>

            </main>

            <Footer/>
        </div>

    );
}

export default LandingPage