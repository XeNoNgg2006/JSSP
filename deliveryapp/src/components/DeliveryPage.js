import "./styles/DeliveryPage.css"
import Header from "./Header.js"
import Footer from "./Footer.js"

function DeliveryPage() {
    return(
        <div>
        <Header/>
        <main className="dp_main">
            <button className="back-button">&lt; Back</button>
            <div className="dp_address-window">
            
                <h1 className="dp_adress-window__header">Delivery Adress</h1>
                <form className="dp_form-window">
                    <input placeholder="Postal Code*" className="dp_adress postal-code"/>
                    <input placeholder="Street*" className="dp_adress street"/>
                    <input placeholder="Street Number*" className="dp_adress street-number"/>
                </form>
                <button type="button" className="dp_submit-adress">Add Adress</button>
            </div>

        </main>
        <Footer/>
        </div>
        
    );
}

export default DeliveryPage