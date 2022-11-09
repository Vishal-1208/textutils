import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='\'>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/TextForm">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Aboutus">{props.about}</Link>
                        </li>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </ul>

                    <div className={`form-check form-switch my-2 text-${props.mode === "light" ? "dark" : "light"}`}>

                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label `} htmlFor="flexSwitchCheckDefault"> Enable Dark Mode</label>

                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.defaultProps = {
    title: "textUtils",
    about: "about"
}