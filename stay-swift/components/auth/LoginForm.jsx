const LoginForm = () => {
  return (
    <form className="login-form">
      <div>
        <label htmlhtmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlhtmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary w-full mt-4">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
