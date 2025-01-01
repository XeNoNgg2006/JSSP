import React from "react";

function PizzaOptions() {
    return(
        <div className="mp_pizza-options">
        <select className='mp_item-size_select'>
            <option className="mp_item-option">Medium (28cm)</option>
            <option className="mp_item-option">Classic (25cm)</option>
            <option className="mp_item-option">Large (32cm)</option>
        </select>
        <select className="mp_item-crust_select">
            <option className="mp_item-option">Classic Crust</option>
            <option className="mp_item-option">Special Crust Cheese</option>
        </select>
        <select className="mp_item-ammount_select">
            <option className="mp_item-option">1</option>
            <option className="mp_item-option">2</option>
            <option className="mp_item-option">3</option>
        </select>
        <button className="mp_cart-add">Add</button>
        </div>
    )
}

export default PizzaOptions;