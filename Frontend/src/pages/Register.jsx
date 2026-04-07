import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await API.post("/register", {
      name,
      email,
      password,
      role: "USER",
    });

    alert("Registered!");
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 p-6 shadow-xl">
        <h2 className="text-2xl mb-4">Register</h2>

        <input placeholder="Name" className="input mb-2"
          onChange={(e) => setName(e.target.value)} />

        <input placeholder="Email" className="input mb-2"
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Password" className="input mb-2"
          onChange={(e) => setPassword(e.target.value)} />

        <button className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>

        <p className="mt-3 text-center">
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;