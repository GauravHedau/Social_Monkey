import { Link } from "react-router-dom";
import "./register.scss";
import Logo from "../../assets/new logo.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      toast.success("User Account Created")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <>
      <div className="register">
      <div className="card">
        <div className="left">
          <img src={Logo} alt="" />
          <h1>Social Monkey.</h1>
          <p>
            Connect your business, yourself or your cause to the worldwide
            community of people on Social Monkey.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
          <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              required
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
