import "../styles/footer.css"

function Footer() {
    return(
        
        <div className="footer-div">
            <div className="f_legal-window">
                <h3>Legal</h3>
                <a className="f_legal-link" href="src/components/legallinks.html">Privacy Policy</a>
                <a className="f_legal-link" href="src/components/legallinks.html">Terms & Conditions</a>
                <a className="f_legal-link" href="src/components/legallinks.html">Cookie Settings</a>
            </div>

            <div className="f_language-window">
                <h3>Language</h3>
                <select>
                    <option>English</option>
                    <option>German</option>
                    <option>Romanian</option>
                </select>
            </div>
            <div className="f_copyright-window">
            <p className="f_copyright-text">Copyright © Kebab House Deutschland GmbH 2024</p>
        </div>
        </div>

        
       
    );
}

export default Footer