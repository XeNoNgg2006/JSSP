import React from 'react';
import "./styles/Menu.css"
import Header from "./jscomps/Header.js"
import Footer from "./jscomps/Footer.js"
import "./styles/components.css"
import images from "./img/images.jsx"
import PizzaOptions from './jscomps/pizza_options.js';


function Menu() {

    return(
        <div className="menu-page">
        <Header/>
        <main className="p_main mp_main">
            <div className="mp_menu-window">
                
                <div className='mp_menu-pizzas'>
                    <h1 className="mp_h1-category">Pizzas</h1>
                        <div className="mp_menu-category">
                            <div className="mp_item">
                                <img className="mp_item-img" src={images.raclette} alt="pizza-raclette" />
                                <h3>Pizza Raclette</h3>
                                <p className="mp_item-description">Fresh, handmade pastry, creamy cream sauce as the base sauce and melt-int...</p>
                                <PizzaOptions/>
                            </div>
                            <div className="mp_item">
                                <img className="mp_item-img" src={images.rosti} alt="pizza-beef-rosti" />
                                <h3>Beef Rosti</h3>
                                <p className="mp_item-description">Fresh, handmade pastry, creamy cream sauce as the base sauce and melt-int...</p>
                                <PizzaOptions/>
                            </div>
                            <div className="mp_item">
                                <img className="mp_item-img" src={images.nyc_salami} alt="pizza-nyc-style-salami" />
                                <h3>New York Style Salami</h3>
                                <p className="mp_item-description">Fresh, handmade dough and tomato sauce, topped with fine, spicy New York...</p>
                                <PizzaOptions/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="mp_checkout-window">
                <div className="mp_checkout-address">

                </div>
                <div className="mp_checkout-cart">

                </div>
            </div>
        </main>
        <Footer/>
        </div>
    );
}

export default Menu