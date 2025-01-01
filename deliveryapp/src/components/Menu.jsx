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
        <nav className="menu-nav">
            <div className="mp_nav-types">
                  <ul className="mp_nav-ul"> 
                    <li className="mp_nav-li"><a role="navigation" href="#shawarma">Shwarma</a></li>
                    <li className="mp_nav-li"><a role="navigation" rel="noopener noreferrer" href="#pizzas">Pizzas</a></li> 
                    <li className="mp_nav-li"><a role="navigation" href="#balkan">Balkan</a></li>
                    <li className="mp_nav-li"><a role="navigation" href="#deserts"> Deserts & Drinks</a></li>
                  </ul>                                                          
            </div>
        </nav>
        <main className="p_main mp_main">
             

            <div className="mp_menu-window">
                
                <div className='mp_menu shawarma' id="shawarma">
                    <h1 className="mp_h1-category">Shwarma</h1>
                        <div className="mp_menu-category">
                            <div className="mp_item">
                                <img className="mp_item-img" src={images.shawarma} alt="shawarma"></img>
                                <h3>Shawarma</h3>
                                <p className="mp_item-description">Savor the authentic taste of freshly grilled shawarma! Wrapped in soft pita bread...</p>
                                    <div className="mp_pizza-options">

                                        <select className='mp_item-base_select'>
                                            <option className="mp_item-option">Bowl</option>
                                            <option className="mp_item-option">Wrap</option>
                                            <option className="mp_item-option">Plate</option>
                                        </select>
                                        <select className="mp_item-meat_select">
                                            <option className="mp_item-option">Chicken</option>
                                            <option className="mp_item-option">Cow</option>
                                        </select>
                                        <select className="mp_item-ammount_select">
                                            <option className="mp_item-option">1</option>
                                            <option className="mp_item-option">2</option>
                                            <option className="mp_item-option">3</option>
                                        </select>
                                        <button className="mp_cart-add">Add</button>
                                    </div>
                            </div>
                            <div className="mp_item">
                                <img className="mp_item-img" src={images.pommes} alt="pommes"></img>
                                <h3>Fries</h3>
                                <p className="mp_item-description">Perfectly seasoned, freshly fried, and irresistibly crispy on the outside, soft...</p>
                                <div className="mp_pizza-options">
                                    <select className="mp_item-ammount_select">
                                            <option className="mp_item-option">1</option>
                                            <option className="mp_item-option">2</option>
                                            <option className="mp_item-option">3</option>
                                    </select>
                                    <button className="mp_cart-add">Add</button>
                                </div>
                            </div>
                        </div>

                </div>

                <div className='mp_menu pizzas' id="pizzas">
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
                <div className="mp_menu balkan" id="balkan">
                    <h1 className="mp_h1-category">Balkan</h1>
                    <div className="mp_menu-category">
                        <div className="mp_item">
                            <img className="mp_item-img" src={images.mici} alt="mici"></img>
                            <h3>Mici - 6 Per Portion</h3>
                            <p>Tender, juicy, and packed with flavor, our mici are made with a traditional Romanian recipe...</p>
                            <div className="mp_pizza-options">
                                    <select className="mp_item-ammount_select">
                                            <option className="mp_item-option">1 </option>
                                            <option className="mp_item-option">2 </option>
                                            <option className="mp_item-option">3 </option>
                                    </select>
                                    <button className="mp_cart-add">Add</button>
                                </div>
                        </div>
                        
                    </div>
                </div>
                <div className="mp_menu deserts" id="deserts">
                    <h1 className="mp_h1-category">Deserts & Drinks</h1>
                    <div className="mp_menu-category">
                        <div className="mp_item">
                            <div className="mp_item">
                                
                            </div>
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