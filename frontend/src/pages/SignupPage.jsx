const SignupPage = () => {
  return (
    <div className="signup-page">
      <form className="signup-form">
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

        <button>Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
