import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import Logo from "../../assets/new logo.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signUp } from "../../services/operations/authApi";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Registration data:s", formData);

    dispatch(
      signUp(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password,
        navigate
      )
    );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="register">
        <img src={Logo} alt="" className="mobileLogo" />
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
              <div className="flex justify-between">
                <button>Register</button>
                <Link to="/login">
                  <button className="button2">Login</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
