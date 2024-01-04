// eslint-disable-next-line no-unused-vars

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import "../pages/css/Register.css";
import register from "../assets/flow.png";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const navigate = useNavigate();

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
    setPasswordFocused(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == "" || email == "" || password == "") {
      return toast.error("fill the required Fields");
    }
    if (username.length < 5) {
      return toast.error("name should be min 5 words");
    }
    if (email === "") toast.error("enter the email");
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&]).{5,}$/;

    if (!strongPasswordRegex.test(password)) {
      return toast.error(
        "Password should contain at least 1 uppercase letter, 5 characters, and one special character among @$!%*?&"
      );
    } else toast.success("Sign up Successfully");
    navigate("/login");
  };

  console.log(username);

  return (
    <div className="p-3 my-5 fluid mt-2 ">
      <div className="row ">
        <div className="col-xs-12 col-md-6 -mt-2 anima-img  d-flex justify-content-center h-full">
          <img
            src={register}
            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Phone image"
            width="60%"
          />
          <img />
        </div>

        <div className="col-xs-12 col-md-6" >
          <div className="row mx-2 anima-form mt-5">
            <div className="fw-semibold">
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  fontFamily: "NoirPro, Arial",
                  color: "purple",
                }}
              >
                Sign Up
              </h2>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="col-xs-12">
                <div
                  className={`mb-4 mt-4 ${usernameFocused ? "focused" : ""}`}
                >
                  <label
                    htmlFor="formControlLgEmail"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    Username
                  </label>
                  <input
                    className="form-control form-control-lg"
                    id="formControlLgUsername"
                    type="username"
                    value={username}
                    onChange={handleUsernameChange}
                    onFocus={handleUsernameFocus}
                    // onBlur={handleUsernameBlur}

                    name="username"
                    style={{ width: "70%",paddingTop: "1.2rem",textAlign : "left" }}
                  />
                </div>
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
                    id="formControlLgEmail"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    // onBlur={handleEmailBlur}

                    name="email"
                    style={{ width: "70%",paddingTop: "1.2rem",textAlign : "left" }}
                  />
                </div>
                {/* <div className={`mb-4 ${passwordFocused ? "focused" : ""}`}>
                  <label
                    htmlFor="formControlLgPassword"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    Password
                  </label>
                  <input
                    className="form-control form-control-lg relative"
                    id="formControlLgPassword"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    onChange={handlePasswordChange}
                    onFocus={handlePasswordFocus}
                    // onBlur={handlePasswordBlur}

                    style={{ width: "70%" }}
                  />
                  <button
                    className="bg-white fw-4"
                    type="button"
                    style={{ border: "none", outline: "none" }}
                    onClick={handlePasswordVisibility}
                  >
                    {showPassword ? <BiHide /> : <BiShow />}
                  </button>
                </div> */}
                <div className={`mb-4 ${passwordFocused ? "focused" : ""}`}>
                  <label
                    htmlFor="formControlLgPassword"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem", zIndex : "1"}}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="form-control form-control-lg"
                      id="formControlLgPassword"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      name="password"
                      onChange={handlePasswordChange}
                      onFocus={handlePasswordFocus}
                      style={{ width: "70%",paddingTop: "1.2rem",textAlign : "left" }}
                    />
                    <button
                      className="bg-white fw-4 eye-icon"
                      type="button"
                      style={{ border: "none", outline: "none" }}
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? <BiHide /> : <BiShow />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 d-flex justify-content-left mt-4">
                <button
                  className="w-50 p-1 fw-semibold  rounded btn-hover-effect"
                  type="submit"
                >
                  SIGN UP
                </button>
              </div>
            </form>
            <div className="col-xs-12 d-flex justify-content-left mt-4">
              <p className="fw-semibold">
                Already I have an account <Link to="/login">Sign Up</Link>
              </p>
            </div>
            <div className="col-xs-12 d-flex justify-content-center mt-1">
              <hr className=" border-white d-flex col"></hr>
            </div>

            <div className="col-xs- mt-1 d-flex mx-4">
              <button
                className="btn mb-5"
                type="button"
                style={{
                  backgroundColor: "rgb(115, 82, 199,0)",
                  textAlign: "center",
                  border: "none",
                  borderRadius: "100%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </svg>
              </button>
              <span
                style={{
                  fontSize: "1rem",
                  marginTop: "0.4rem",
                  fontWeight: "bold",
                  fontFamily: "Arial",
                }}
              >
                or
              </span>
              <button
                className="btn mb-5"
                type="button"
                style={{
                  backgroundColor: "rgb(115, 82, 199,0)",
                  textAlign: "center",
                  border: "none",
                  borderRadius: "100%",
                  gap: "2rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1"
                    x1="10.341"
                    x2="40.798"
                    y1="8.312"
                    y2="38.769"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2aa4f4"></stop>
                    <stop offset="1" stopColor="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)"
                    d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
