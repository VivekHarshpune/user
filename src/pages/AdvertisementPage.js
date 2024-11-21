import React, { useState } from 'react';
import './AdvertisementPage.css'; // Import the CSS for styling

const AdvertisementPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    area: '',
    businessType: '',
    advertisementType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      area: '',
      businessType: '',
      advertisementType: '',
      message: '',
    });
  };

  return (
    <div className="advertisement-page">
      <h1 className="advertisement-title">Advertise With Us</h1>
      <p className="advertisement-intro">
        Reach our vibrant community by advertising your business! Fill out the inquiry form below.
      </p>

      <form className="inquiry-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Inquiry Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="area">Area Address:</label>
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessType">Business Type:</label>
          <input
            type="text"
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="advertisementType">Type of Advertisement:</label>
          <input
            type="text"
            id="advertisementType"
            name="advertisementType"
            value={formData.advertisementType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Inquiry</button>
      </form>

      <section className="advertisement-section">
        <h2 className="advertisement-section-title">Current Advertisements</h2>
        <div className="advertisement-list">
          <div className="advertisement-item">
            <img src="/images/advertise/go-for-better-advertise-with-us-840x740-1.jpg" alt="Ad 1" className="advertisement-image" />
            <h3 className="advertisement-item-title">Ad Title 1</h3>
            <p className="advertisement-description">Description of advertisement 1.</p>
          </div>
          <div className="advertisement-item">
            <img src="/images/advertise/image copy.png" alt="Ad 2" className="advertisement-image" />
            <h3 className="advertisement-item-title">Ad Title 2</h3>
            <p className="advertisement-description">Description of advertisement 2.</p>
          </div>
          <div className="advertisement-item">
            <img src="/images/advertise/image.png" alt="Ad 3" className="advertisement-image" />
            <h3 className="advertisement-item-title">Ad Title 3</h3>
            <p className="advertisement-description">Description of advertisement 3.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvertisementPage;
