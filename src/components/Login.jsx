import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState("seller"); // or 'buyer' as default
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy login logic (replace with real auth)
        if (credentials.email && credentials.password) {
            if (userType === "seller") {
                navigate("/seller");
            } else {
                navigate("/buyer");
            }
        } else {
            alert("Please fill in both fields.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>

                <div className="user-type-toggle">
                    <button
                        className={userType === "buyer" ? "active" : ""}
                        onClick={() => setUserType("buyer")}
                    >
                        Buyer
                    </button>
                    <button
                        className={userType === "seller" ? "active" : ""}
                        onClick={() => setUserType("seller")}
                    >
                        Seller
                    </button>
                </div>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
