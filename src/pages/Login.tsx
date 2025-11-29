import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>

      <Link to="/register">Register</Link>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Login;
