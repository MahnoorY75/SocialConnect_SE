import React, { useState } from 'react';
import './signup.css';
import logo from '../Images/logo2.PNG';
import { Link } from 'react-router-dom';
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true); // Show modal on successful registration
    console.log("Signup Details:", values);
    axios.post('http://localhost:5000/api/v1/auth/signup', values)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="cover2">
        <div className="box2">
          <div className="loginbox2">
            <div className="logininfo">
              <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto' , marginTop:'10px'}} />
              <br />
              <h2 className="myheading">Create your Account!</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    First Name:
                    <input
                      className='inputbox2'
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Last Name:
                    <input
                      className='inputbox2'
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Email:
                    <input
                      className='inputbox2'
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Password:
                    <input
                      className='inputbox2'
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <button className="register-button" type="submit">Register</button>
                </div>
                <div>
                  <Link className='link2' to="/login">Already have an Account?</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="display2">
            {showModal && (
            <div className="modalbox2">

<div className="modal2">
                <div className="modal-content2">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <p>Yeah!! You are Registered. Login to your Account now.</p>
                  <Link to="/login" className="login-button">Login</Link>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
