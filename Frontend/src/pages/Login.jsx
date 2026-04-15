import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", {
        email,
        password,
      });

      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));

        if (res.data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        
        <h2 className="text-2xl font-bold text-center mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered mb-3 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered mb-3 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-full"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* 🔗 Register Link */}
        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;