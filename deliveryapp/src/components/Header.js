import "./styles/header.css"


function Header() {
return (
    <div class="header-div">
    
        <img src="/logo.png" alt="logo" class="logo"/>
        <h1 className="text">Kebab House</h1>
        <div className="end-group">
            <button class="btn signup">Sign Up!</button>
            <button className="btn login">Login</button>
        </div>
    </div>
);
}

export default Header