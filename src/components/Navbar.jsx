import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // optional: display logo if needed

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                D-Market
            </div>
            <ul className="nav-links">
                <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                <li className="nav-item dropdown">
                    <NavLink to="#service" className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Service
                    </NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/login" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Login</NavLink></li>
                        <li><NavLink to="/register" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>Register</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
