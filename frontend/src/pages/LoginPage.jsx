import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    loggedIn,
    setLoggedIn,
    setName: setUserName,
    setEmail: setUserEmail,
    isAdmin,
    setIsAdmin,
    setId,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loggedIn) return <Navigate to="/" />;
  return (
    <div className="login-page page">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(
              "http://127.0.0.1:5000/api/auth/login",
              { email, password },
              { withCredentials: true }
            )
            .then((res) => {
              console.log(res);
              if (res.data.loggedIn === true) {
                setLoggedIn(true);
                setUserName(res.data.user.name);
                setUserEmail(res.data.user.email);
                setId(res.data.user.id);
                setIsAdmin(res.data.user.is_admin);
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

        <div className="field">
          <button>Login</button>
          <p style={{ marginTop: "10px" }}>
            If you do have an account, then <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
