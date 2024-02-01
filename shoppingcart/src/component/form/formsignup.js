import React from "react";
import UseForm from "../hook/useform";
import validate from "../validation/validate";
//import formlogin from "./formlogin";
import "./form.css";
import { Link } from "react-router-dom";
const Formsignup = () => {
  //   const handleChange = (e) => {
  //     console.log(e.target.value, e.target.value);
  //   };
  const { handleChange, values, handleSubmit, errors } = UseForm(validate);
  console.log(
    "HandkeChage:",
    handleChange,
    "Values:",
    values,
    "HandleSumbit",
    handleSubmit,
    "error",
    errors
  );
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Get Started With Us Today! Create Your Account</h1>
        <div className="form-input">
          <label className="form-label" htmlFor="username">
            Username :
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-input"
            placeholder="Ener your Name"
            onChange={handleChange}
            value={values.username}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-input">
          <label className="form-label" htmlFor="email">
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-input">
          <label className="form-label" id="password" htmlFor="upassword">
            Password:
          </label>
          <input
            id="upassword"
            type="password"
            name="password"
            className="form-input"
            placeholder="Ener your password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-input">
          <label className="form-label" htmlFor="conpassword">
            ConfirmPassword:
          </label>
          <input
            type="password"
            id="conpassword"
            name="cpassword"
            className="form-input"
            placeholder="Ener your ConfirmPassword"
            onChange={handleChange}
            value={values.cpassword}
          />
          {errors.cpassword && <p>{errors.cpassword}</p>}
        </div>
        <button className="form-input-btn" type="submit" onClick={handleSubmit}>
          SignUp
        </button>
        <span className="form-input-signup">
          Already Have a account? Login<Link to="/login">here</Link>
        </span>
      </form>
    </div>
  );
};

export default Formsignup;
