import axios from 'axios';
import React, { useState } from 'react';
import './login.css';
import logo from '../Images/logo.PNG';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      // console.log("handleSubmit called");
      //   event.preventDefault();
      //   try {
      //       const response = await axios.post('http://localhost:5000/api/v1/auth/login', values);
      //       console.log("Login successful:", response.data);
      //       navigate("/dashboard"); // Redirect to dashboard on successful login
      //   } catch (error) {
      //       if (error.response) {
      //           // Handle the different error responses from the server
      //           setErrorMessage(error.response.data.msg);
      //       }
      //   }
        navigate("/dashboard");
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <div className="cover">
            {/* Modal or error message */}
            {errorMessage && <div className="modal">{errorMessage}</div>}

            <div className="box1">
                <div className="loginbox">
                    <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto' }} />
                    <br />
                    <h2 className="heading">Login to your Account!</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Email:
                                <input className='inputbox' type="email" name="email" value={values.email} onChange={handleChange} required />
                            </label>
                        </div>
                        <div>
                            <label>
                                Password:
                                <input className='inputbox' type="password" name="password" value={values.password} onChange={handleChange} required />
                            </label>
                        </div>
                        <div>
                            <span style={{marginLeft: "10px"}}>Forgot password?</span>
                        </div>
                        <button className="login-button" type="submit">Login</button>
                        <div>
                            <Link className='link' to="/signup">Don't have an Account?</Link>
                        </div>
                    </form>
                </div>

                <div className="display">
          </div>
            </div>
        </div>
    );
}

export default Login;
