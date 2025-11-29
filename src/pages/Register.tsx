import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>

      <Link to="/login">Login</Link>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Register;
