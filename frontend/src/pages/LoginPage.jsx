import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loggedIn) return <Navigate to="/" />;
  return (
    <div className="login-page">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:5000/api/auth/login", { email, password })
            .then((res) => {
              console.log(res);
              if (res.data.loggedIn === true) {
                navigate("/");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Login</button>

        <div className="field">
          <p>
            If you do have an account, then <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
