import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
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
            .post("http://localhost:5000/api/auth/signup", {
              name,
              email,
              password,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data.registered === true) {
                navigate("/login");
              } else {
                alert("There was an error while signing up");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <button>Signup</button>

        <div className="field">
          <p>
            If you already have an account, then <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
