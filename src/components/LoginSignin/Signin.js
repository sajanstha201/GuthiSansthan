import React, { useState } from 'react';
import bgImage from '../../media/LoginSignin/rectangle.png';
import nepalLandmark from '../../media/LoginSignin/nepalLandmark.png';
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signin = () => {
    const isMobile = useMediaQuery('(max-width:800px)');
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.post('http://guthi.pythonanywhere.com/api/users/', {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                username: formData.username,
                password: formData.password
            });
            console.log(response.data);
             navigate('/log-in')
            // Handle success (e.g., redirect to login page)
        } catch (error) {
            console.error('Error during form submission', error);
            // Handle error
        }
    };

    return (
        <>
            <div className="fixed h-screen w-screen -z-10 top-0" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className={`bg-cover bg-center`}>
                <div className={`${isMobile ? '' : 'h-[80vh]'} flex items-center justify-center gap-3 flex-col md:flex-row lg:flex-row mx-[20px]`}>
                    <div className={`${isMobile ? 'w-[200px]' : 'w-[500px]'}`}>
                        <img src={nepalLandmark} alt="Nepal Landmark" />
                    </div>
                    <div className='flex flex-col items-center justify-center p-3'>
                        <div className='text-white flex items-center justify-center'>
                            <h1>Create an Account</h1>
                        </div>
                        <form onSubmit={handleSubmit} className='flex flex-col text-white gap-3'>
                            <div className='flex gap-3'>
                                <div className='flex flex-col'>
                                    <label><h5>First Name</h5></label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[300px] text-black'
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                                </div>
                                <div className='flex flex-col'>
                                    <label><h5>Last Name</h5></label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[300px] text-black'
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <label><h5>Email</h5></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[500px] text-black'
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="text-red-500">{errors.email}</span>}
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <label><h5>Username</h5></label>
                                <input
                                    type="text"
                                    name="username"
                                    className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[500px] text-black'
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <span className="text-red-500">{errors.username}</span>}
                            </div>
                            <div className='flex gap-3'>
                                <div className='flex flex-col'>
                                    <label><h5>Password</h5></label>
                                    <input
                                        type="password"
                                        name="password"
                                        className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[300px] text-black'
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                                </div>
                                <div className='flex flex-col'>
                                    <label><h5>Confirm Password</h5></label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[300px] text-black'
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
                                </div>
                            </div>
                            <Link to='/log-in'>Already have an account?</Link>
                            <div className='flex justify-center lg:justify-end mt-5'>
                                <button type="submit" className='rounded-full px-6 py-1 font-bold text-white bg-blue-600'>
                                    <h5>{t('sign-in')}</h5>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
