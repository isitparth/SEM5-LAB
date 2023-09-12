import React, { useState, useRef } from 'react';
import './RegForm.css'

function RegistrationForm() {
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      gender: 'male',
      agreeToTerms: false,
      subscription: 'basic',
   });

   const inputRef = useRef(null);

   const handleChange = (event) => {
      const { name, value, type, checked } = event.target;
      setFormData({
         ...formData,
         [name]: type === 'checkbox' ? checked : value,
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Hello ${formData.fullName}, Your Registration is Successful!`);
      handleReset();
   };

   const handleReset = () => {
      setFormData({
         fullName: '',
         email: '',
         password: '',
         gender: 'male',
         agreeToTerms: false,
         subscription: 'basic',
      });
   };


   const handleKeyUp = (event) => {
      if (!inputRef.current.contains(document.activeElement)) {
         if (event.key === 'Escape') {
            alert('Form closed with Esc key.');
            handleReset();
         }
      }
   };

   return (
      <div className="registration-container">
         <h2>Registration Form</h2>
         <form onSubmit={handleSubmit} onKeyUp={handleKeyUp} className="registration-form">
            <div className="form-group">
               <label htmlFor="fullName">Full Name:</label>
               <input
                  type="text"
                  name="fullName"
                  placeholder='Enter full name'
                  value={formData.fullName}
                  onChange={handleChange}
                  id="fullName"
                  ref={inputRef}
                  required
               />
            </div>
            <div className="form-group">
               <label >Email Address:</label>
               <input
                  type="email"
                  name="email"
                  placeholder='Enter email address'
                  value={formData.email}
                  onChange={handleChange}
                  ref={inputRef}
                  required
               />
            </div>
            <div className="form-group">
               <label>Password:</label>
               <input
                  type="password"
                  name="password"
                  placeholder='Enter password'
                  value={formData.password}
                  onChange={handleChange}
                  ref={inputRef}
                  required
               />
            </div>
            <div className="form-group">
               <label>Gender:</label>
               <select name="gender" value={formData.gender} onChange={handleChange} ref={inputRef}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
               </select>
            </div>
            <div className="form-group">
               <label>Subscription Plan:</label>
               <input
                  type="radio"
                  name="subscription"
                  value="basic"
                  onChange={handleChange}
                  checked={formData.subscription === 'basic'}
                  ref={inputRef}
               />{' '}
               Basic
               <input
                  type="radio"
                  name="subscription"
                  value="premium"
                  onChange={handleChange}
                  checked={formData.subscription === 'premium'}
                  ref={inputRef}
               />{' '}
               Premium
            </div>
            <div className='form-checkbox'>
               <label>
                  <input
                     type="checkbox"
                     name="agreeToTerms"
                     checked={formData.agreeToTerms}
                     onChange={handleChange}
                     ref={inputRef}
                  />{' '}
                  I agree to the terms and conditions
               </label>
            </div>
            <div className="form-buttons">
               <button type="submit" className="submit-button">Submit</button>
               <button type="reset" onClick={handleReset} className="reset-button">
                  Reset
               </button>
            </div>
         </form>
      </div>
   );
}

export default RegistrationForm;
