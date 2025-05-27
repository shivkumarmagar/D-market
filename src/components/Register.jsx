import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [userType, setUserType] = useState("buyer");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        alert(`Registered as ${userType}:\nName: ${name}\nEmail: ${email}`);
        // Implement registration logic here (API call, validation, etc.)
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Create Account</h2>
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
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
