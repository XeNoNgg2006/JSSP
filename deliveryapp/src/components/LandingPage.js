import "./styles/LandingPage.css"
import Header from "./Header.js"
import Footer from "./Footer.js"


function LandingPage() {
    return(
        <div className="landing-page" id="landing-page">
            <Header class="header" role="banner"/>
            <main className="main">
                <div className="delivery-window">

                    <h1>Start your Order</h1>
                    <div className="delivery-method-div">
                        <button className="delivery-method delivery"></button>
                        <button ClassName="delivery-method pickup"></button>
                    </div>
                </div>

            </main>

            <Footer/>
        </div>

    );
}

export default LandingPage