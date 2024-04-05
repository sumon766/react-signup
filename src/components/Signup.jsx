import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/userActions";

const Signup = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        'user_type': '',
        'first_name': '',
        'last_name': '',
        'username': '',
        'email': '',
        'password': ''
    });

    const resetForm = () => {
        setFormData({
            'user_type': '',
            'first_name': '',
            'last_name': '',
            'username': '',
            'email': '',
            'password': ''
        });
    }

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(signUp(formData));
            setSuccessMessage('Signup successful, please check your mail');
            setErrorMessage('');
            resetForm();
        } catch (error) {
            setErrorMessage(error.message);
            setSuccessMessage('');
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center mt-2">
                <div className="col-sm-4">
                    <h2>Register now</h2>
                </div>
                <div className="col-sm-4 mt-5">
                    <form className="form-inline" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="userType">User Type</label>
                            <select name="user_type" className="form-select" aria-label="Default select example" onChange={handleChange} value={formData.user_type}>
                                <option>Please select</option>
                                <option value="researcher">Researcher</option>
                                <option value="investor">Investor</option>
                                <option value="institution_stuff">Institution Stuff</option>
                                <option value="service_provider">Service Provider</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input className="form-control" type="text" id="firstName" name="first_name" value={formData.first_name} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input className="form-control" type="text" id="lastName" name="last_name" value={formData.last_name} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="userName">Username</label>
                            <input className="form-control" type="text" id="userName" name="username" value={formData.username} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-lg">Signup</button>
                    </form>
                    <br/>
                    { errorMessage && <p>{ errorMessage }</p> }
                    { successMessage && <p>{ successMessage }</p> }
                </div>
            </div>
        </div>
    );
}

export default Signup;
