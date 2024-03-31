import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/new logo.png";
import "./login.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../services/operations/authApi";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="login ">
      <h1 className="mobileText">Social Monkey</h1>

      <div className="card">
        <div className="left">
          <h1>Social Monkey.</h1>
          <p>
            Social Monkey helps you connect and share with the people in your
            life..
          </p>
          <span>Don't you have an account?</span>
          <Link to="/signup">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <img src={Logo} alt="" />
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="flex justify-between">
              <button>Login</button>
              <Link to="/signup">
                <button className="button2">Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
