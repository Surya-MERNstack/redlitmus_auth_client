// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi"; // Import eye icons from a React Icons library
import "../pages/css/Login.css";
import { toast } from "react-toastify";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailFocused(false);
    }
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordFocused(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "" || password == "") {
      return toast.error("fill the required Fields");
    }
    if (email === "") {
      return toast.error("name should be min 5 words");
    }
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      return toast.error(
        "Password should be at least 8 characters one special character among @$!%*?&"
      );
    } else toast.success("login Successfully!!!");
    console.log("clicked");
  };

  console.log(email);
  console.log(password);

  return (
    <div className="p-3 my-5 fluid" >
      <div className="row mx-4 " style={{marginTop : "5rem"}}>
        <div className="col-xs-12 col-md-6 mt-auto">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </div>

        <div className="col-xs-12 col-md-6" style={{marginTop : "4rem"}}>
          <div className="fw-semibold">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                fontFamily: "NoirPro, Arial",
                color: "purple",
              }}
            >
              Sign In
            </h2>
          </div>

          <div className="row mt-3" style={{ fontSize: "1.3rem" }}>
            <form action="" onSubmit={handleSubmit}>
              <div className="col-xs-12">
                <div className={`mb-4 mt-4 ${emailFocused ? "focused" : ""}`}>
                  <label
                    htmlFor="formControlLgEmail"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    Email
                  </label>
                  <input
                    className="form-control form-control-lg"
                    style={{ padding: "0.5rem", width: "70%" }}
                    id="formControlLgEmail"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                  />
                </div>
              </div>
              <div className="col-xs-12">
                <div className={`mb-4 ${passwordFocused ? "focused" : ""}`}>
                  <label
                    htmlFor="formControlLgPassword"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    Password
                  </label>
                  <input
                    className="form-control form-control-lg"
                    id="formControlLgPassword"
                    style={{ padding: "0.5rem", width: "70%" }}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                  />
                  <div className="mt-2">
                    <p>
                      <Link
                        to="/"
                        style={{
                          color: "black",
                          fontFamily: "arial",
                          fontSize: "1rem",
                        }}
                      >
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                  <button
                    className="bg-white fw-4 eye -left-2 "
                    type="button"
                    style={{ border: "none", outline: "none" }}
                    onClick={handlePasswordVisibility}
                  >
                    {showPassword ? <BiHide /> : <BiShow />}
                  </button>
                </div>
              </div>
              <div className="col-xs-12 d-flex justify-content-left mt-2">
                <button
                  className="w-50 p-2 fw-semibold  rounded btn-hover-effect"
                  type="submit"
                >
                  SIGN IN
                </button>
              </div>
            </form>
            <div className="col-xs-12">
              <div
                className="col-xs-12 d-flex justify-content-left mt-4"
                style={{ fontSize: "1.1rem" }}
              >
                <p className="fw-semibold">
                  Dont have an account <Link to="/">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
