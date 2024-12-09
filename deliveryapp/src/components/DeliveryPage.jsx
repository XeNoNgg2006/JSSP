import "./styles/DeliveryPage.css"
import Header from "./jscomps/Header.js"
import Footer from "./jscomps/Footer.js"
import "./styles/components.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';   
import {useState} from "react";



function DeliveryPage() {
    const navigate = useNavigate();

    const goBackToLandingPage = () => {
        navigate("/");
};

    const [inputValue, setInputValues] = useState({
        postalCode: "",
        street: "",
        streetNumber: "",
    });

    const handleInputChange = (event) => {
        const {name,value} = event.target
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };    
    
        const [addresses, setAddresses] = useState([]); // For storing the addresses
        const [isFormVisible, setIsFormVisible] = useState(true);
      
        // Handle form submit
        const handleSubmit = (event) => {
          event.preventDefault();
          const { postalCode, street, streetNumber } = inputValue;

           if (addresses.length < 2) {
            setAddresses([
                ...addresses,
                { id: addresses.length, label: postalCode +" "+ street + " " +streetNumber },
              ]);
              setIsFormVisible(false);
            }
          
        };

        const setFormInvisible = () => {
            setIsFormVisible(true);   
        }


         

        let fullGridTemplateRow =  `${'50px '.repeat(addresses.length)} 250px`;
        let hiddenGridTemplateRow = `${'50px '.repeat(addresses.length)} 50px`;
        console.log("rows "+fullGridTemplateRow);

    
  
    const chooseAddress = (address) => {
        navigate("/Menu");
        console.log("gello");
    };

    return(
        <div>
        <Header/>
        <main className="p_main">
        <button className="back-button" onClick={goBackToLandingPage} cursor>&lt; Back</button>
            <div className="dp_address-window">
            
                <h1 className="dp_adress-window__header">Delivery Address</h1>
                {isFormVisible ? (
                <form style ={{'--grid-rows': fullGridTemplateRow }} className="dp_form-window" id="form-window"  onSubmit={handleSubmit}>
                {addresses.map((address) => 
                    <button key={address.id} onClick={() => chooseAddress(address)}>{address.label}</button> )}       
                    <div className="dp_address_inputs" id="address-inputs">
                    <input placeholder="Postal Code*" className="dp_adress postal-code" name="postalCode" value={inputValue.postalCode} onChange={handleInputChange} required/>
                    <input placeholder="Street*" className="dp_adress street" name="street" value={inputValue.street} onChange={handleInputChange} required/>
                    <input placeholder="Street Number*" className="dp_adress street-number" name="streetNumber" value={inputValue.streetNumber} onChange={handleInputChange} required/>
                    
                    <button type="submit" className="dp_submit-address" >Add New Address</button>
                    </div>
                </form>
                 ) : 
                 
                 <div class="dp_hidden-form-window" style={{'--hiddengrid-rows':hiddenGridTemplateRow}}>
                 {addresses.map((address) => 
                    <button key={address.id} onClick={() => chooseAddress(address)}>{address.label}</button> )} 
                 <button type="button" className="dp_another-address" onClick={setFormInvisible} >Create A New Address</button>
                 </div>
                 
                 }
                 
            </div>
 
        </main>
        <Footer/>
        </div>
        
        );
}

export default DeliveryPage