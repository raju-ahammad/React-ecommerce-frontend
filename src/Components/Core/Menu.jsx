import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return {color: "#3AA64D"}
    }else {
        return {color: "ffffff"}
    }
}

const Menu = ({history, path}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow" style={{ background:"#32383E"}}>
            <div className="container-fluid ml-4">
                <Link className="navbar-brand" to="/">AmarDukan</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" style={ currentTab(history, "/") } aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " style={ currentTab(history, "cart") } aria-current="page" to="cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " style={ currentTab(history, "/signin") } aria-current="page" to="signin">SignIn</Link>
                    </li>
                </ul>
                
                <span className="navbar-text mr-4 text-secondary">
                <Link to="signin"><svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg></Link>
                </span>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Menu)
