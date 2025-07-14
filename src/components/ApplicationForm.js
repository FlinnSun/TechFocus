import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // 这里可以添加表单提交逻辑
  };

  return (
    <div className="application-form">
      <h2 className="form-title">Apply Now</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">
            Legal First Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            Legal Last Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmEmail">
            Confirm Email<span className="required">*</span>
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone<span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (xxx) xxx-xxxx"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group file-upload">
          <label htmlFor="resume">
            <span className="upload-icon">📎</span>
            ATTACH RESUME/CV <span className="required">*</span>
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            style={{ display: 'none' }}
          />
          <div className="file-upload-area" onClick={() => document.getElementById('resume').click()}>
            {formData.resume ? formData.resume.name : 'Click to upload file'}
          </div>
        </div>

        <button type="submit" className="submit-button">
          START APPLICATION
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm; 