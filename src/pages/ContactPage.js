import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    resume: '' // 改为字符串，用于存储链接
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 移除handleFileChange函数，因为我们不再处理文件上传

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // 初始化EmailJS
      emailjs.init('hIzzVO3wsAR4GMEqKvaz0'); // 您的Public Key

      // 准备邮件模板参数
      const templateParams = {
        to_email: 'flinnsun@magicap.net',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        resume_link: formData.resume || 'No resume link provided'
      };

      console.log('Sending email with params:', templateParams);
      console.log('Service ID:', 'service_p34yads');
      console.log('Template ID:', 'template_e3rb7j9');

      // 使用EmailJS发送邮件
      const response = await emailjs.send(
        'service_p34yads', // Service ID
        'template_e3rb7j9', // Template ID
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // 重置表单
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        resume: ''
      });
      
    } catch (error) {
      console.error('Detailed error sending email:', error);
      console.error('Error message:', error.message);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* 页面标题 */}
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
        </div>

        {/* 主要内容区域 */}
        <div className="contact-content">
          {/* 左侧联系信息 */}
          <div className="contact-info">
            <div className="contact-info-section">
              <h2 className="contact-info-title">Get in Touch</h2>
              <p className="contact-info-description">
                Whether you have a question about our services, career opportunities, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            {/* 邮箱信息 */}
            <div className="contact-detail">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#000000"/>
                </svg>
              </div>
              <div className="contact-detail-info">
                <h3 className="contact-detail-title">Mail</h3>
                <p className="contact-detail-text">techfocus20255@gmail.com</p>
              </div>
            </div>

            {/* 电话信息 */}
            <div className="contact-detail">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#000000"/>
                </svg>
              </div>
              <div className="contact-detail-info">
                <h3 className="contact-detail-title">Tel</h3>
                <p className="contact-detail-text">304-906-8124</p>
              </div>
            </div>

            {/* 办公地点 */}
            <div className="office-locations">
              <h3 className="office-locations-title">Office Locations</h3>
              
              <div className="office-location">
                <h4 className="office-name">Boulder Office</h4>
                <p className="office-address">
                  TechFocus, LLC.<br/>
                  1601 29th St. Suite 1292<br/>
                  Boulder, CO 80301
                </p>
              </div>

              <div className="office-location">
                <h4 className="office-name">Arvada Office</h4>
                <p className="office-address">
                  TechFocus, LLC.<br/>
                  7501 Salvia St.<br/>
                  Arvada, CO 80007
                </p>
              </div>
            </div>
          </div>

          {/* 右侧联系表单 */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="required-asterisk">*</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="required-asterisk">*</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="required-asterisk">*</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Message</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="required-asterisk">*</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group message-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you ?"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  />
                  <span className="required-asterisk">*</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="resume" className="form-label">Resume Link</label>
                  <input
                    type="text"
                    id="resume"
                    name="resume"
                    placeholder="Paste your resume's shareable link here (Google Drive, Dropbox, etc.)"
                    value={formData.resume}
                    onChange={handleInputChange}
                  />
                  <div className="resume-help-text">
                    Upload your resume to Google Drive, Dropbox, or OneDrive and paste the shareable link here
                  </div>
                </div>
              </div>

              <div className="form-row">
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit →'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="submit-message success">
                  Message sent successfully to flinnsun@magicap.net! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="submit-message error">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}
            </form>

            <div className="form-footer">
              <span className="made-with">★ Made with Tally</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 