import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn } = useContext(AuthContext);

  if (loggedIn) return <Navigate to="/" />;
  return (
    <div className="login-page">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:5000/signup", { name, email, password })
            .then((res) => {
              console.log(res);
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
      </form>
    </div>
  );
};

export default SignupPage;
