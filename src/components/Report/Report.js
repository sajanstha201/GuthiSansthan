import React, { useState } from 'react';

export default function Report() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        department: '',
        reason: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'Full name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.subject) newErrors.subject = 'Branch is required';
        if (!formData.department) newErrors.department = 'Department is required';
        if (!formData.reason) newErrors.reason = 'Reason for complaint is required';
        if (!formData.message) newErrors.message = 'Complaint details are required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsSubmitting(false);
            setIsSubmitted(true);
        }
    };

    return (
        <div className='mt-5'>
            <div className='mb-5 text-center'>
                <h1 className='text-4xl font-semibold text-gray-800'>Complaint Form</h1>
            </div>
            <form className='max-w-2xl p-8 mx-auto mt-1 mb-3 bg-white rounded-lg shadow-lg' onSubmit={handleSubmit}>
                <div className='space-y-6'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstName" className='flex items-start justify-start mb-2 font-medium text-gray-800'>Full Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter your full name"
                            className={`p-3 border-2 rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <span className='mt-1 text-sm text-red-500'>{errors.firstName}</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="email" className='flex items-start justify-start mb-2 font-medium text-gray-800'>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                            className={`p-3 border-2 rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className='mt-1 text-sm text-red-500'>{errors.email}</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="phone" className='flex items-start justify-start mb-2 font-medium text-gray-800'>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            className={`p-3 border-2 rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span className='mt-1 text-sm text-red-500'>{errors.phone}</span>}
                    </div>

                    <div className='flex row'>
                        <div className='flex flex-col w-full col-6'>
                            <label htmlFor="subject" className='flex items-start justify-start mb-2 font-medium text-gray-800'>Branch</label>
                            <select
                                name="subject"
                                id="subject"
                                className={`p-3 border-2 rounded-md ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                                value={formData.subject}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Branch</option>
                                <option value="Branch1">Branch 1</option>
                                <option value="Branch2">Branch 2</option>
                                <option value="Branch3">Branch 3</option>
                            </select>
                            {errors.subject && <span className='mt-1 text-sm text-red-500'>{errors.subject}</span>}
                        </div>

                        <div className='flex flex-col w-full col-6'>
                            <label htmlFor="department" className='flex items-start justify-start mb-2 font-medium text-gray-800'>Department</label>
                            <select
                                name="department"
                                id="department"
                                className={`p-3 border-2 rounded-md ${errors.department ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                                value={formData.department}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Department</option>
                                <option value="Department1">Department 1</option>
                                <option value="Department2">Department 2</option>
                                <option value="Department3">Department 3</option>
                            </select>
                            {errors.department && <span className='mt-1 text-sm text-red-500'>{errors.department}</span>}
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="reason" className='flex items-start justify-start mb-2 font-medium text-gray-800'>Reason For Complaint</label>
                        <input
                            type="text"
                            name="reason"
                            id="reason"
                            placeholder="Write reason for a complaint"
                            className={`p-3 border-2 rounded-md ${errors.reason ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                            value={formData.reason}
                            onChange={handleChange}
                        />
                        {errors.reason && <span className='mt-1 text-sm text-red-500'>{errors.reason}</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="message" className='flex items-start justify-start mb-2 font-medium text-gray-800'>Complaint Details</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Enter your message here"
                            className={`p-3 border-2 rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                        {errors.message && <span className='mt-1 text-sm text-red-500'>{errors.message}</span>}
                    </div>

                    <div className='text-center'>
                        <button
                            type="submit"
                            className={`bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                        {isSubmitted && !isSubmitting && <p className='mt-3 text-lg font-medium text-green-500'>Message sent successfully!</p>}
                    </div>
                </div>
            </form>
        </div>
    );
}
