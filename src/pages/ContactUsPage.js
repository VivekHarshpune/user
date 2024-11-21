import React, { useEffect } from 'react'; // Import useEffect
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { PhoneOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'; 
import './ContactUsPage.css'; 

const ContactUsPage = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate(); 

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Use environment variable for API URL
      const apiUrl = process.env.REACT_APP_API_URL;

      // Send contact form data to backend
      await axios.post(`${apiUrl}/contact`, values);

      message.success('Thank you for reaching out! We will get back to you shortly.');

      // Navigate to Thank You page
      navigate('/thank-you'); 
    } catch (error) {
      console.error('Error sending contact form:', error);
      message.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Welcome to CommunityBook Support!</h1>
      <p className="contact-subtitle">
        We're here to help you. Whether you have a question, feedback, or need assistance, feel free to reach out to us. 
        Our support team is always ready to listen!
      </p>

      <div className="contact-intro">
        <p className="contact-description">
          Please fill out the form below, and we’ll get in touch with you as soon as possible. 
          You can also reach us via email or phone if you need urgent assistance.
        </p>
      </div>

      <Form
        layout="vertical"
        onFinish={onFinish}
        className="contact-form"
      >
        <Form.Item
          label="Your Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input
            placeholder="Enter your full name"
            prefix={<UserOutlined className="site-form-item-icon" />}
            className="contact-input"
          />
        </Form.Item>

        <Form.Item
          label="Your Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}
        >
          <Input
            placeholder="Enter your email address"
            prefix={<MailOutlined className="site-form-item-icon" />}
            className="contact-input"
          />
        </Form.Item>

        <Form.Item
          label="Your Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message!' }]}
        >
          <Input.TextArea
            placeholder="Type your message or inquiry here"
            rows={5}
            className="contact-textarea"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          className="contact-button"
        >
          Send Message
        </Button>
      </Form>

      <div className="contact-alternative">
        <h3>Need Immediate Assistance?</h3>
        <p>
          You can also contact us directly via phone or email:
        </p>
        <p>
          <PhoneOutlined /> 9931198029 <br />
          <MailOutlined /> communitybook.contact@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
