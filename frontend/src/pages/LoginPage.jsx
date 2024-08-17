const LoginPage = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <div className="field">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="field">
          <label>Password</label>
          <input type="password" />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
