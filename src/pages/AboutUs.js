import React from 'react';
import Slider from 'react-slick'; // Importing Slider from react-slick
import './AboutUs.css'; // Importing the CSS file for styling

const AboutUs = () => {
  // Array of image URLs for the carousel
  const images = [
    '/images/aboutus/IMG_3063.JPG',
    '/images/aboutus/frp-swimming-pools.jpeg',
    '/images/aboutus/IMG_5805.JPG',
    '/images/aboutus/IMG_5897.JPG',
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
  };

  return (
    <div className="about-us">
      <h1 className="about-us-title">Welcome to Community Book!</h1>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Founded in <strong>2024</strong>, Community Book is a passionate team dedicated to simplifying your fitness journey. 
          We connect individuals with local gyms, studios, and fitness centers, helping you discover the right services to meet your fitness goals. 
          Our journey began with a simple mission: to make fitness accessible and enjoyable for everyone, regardless of their background or experience level.
        </p>
        <img src="/images/aboutus/6f057961-c839-41d5-a98d-d2e8987fdda8.JPG" alt="Our team members engaging in fitness activities" className="about-image" />
        <p>
          Our diverse team consists of fitness enthusiasts, health professionals, and technology experts who share a common goal: to inspire and empower individuals to lead healthier lives. 
          We understand the challenges of starting a fitness journey, and we're committed to providing the resources and support needed to overcome these hurdles. 
          Community Book is more than just a platform; we are a community that cares.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to build a vibrant community where fitness lovers can easily access resources to lead healthier, happier lives. 
          We aim to bridge the gap between fitness seekers and service providers, ensuring everyone finds the support they need. 
          By fostering connections within the community, we hope to create a culture of health and wellness that encourages personal growth and collective well-being.
        </p>
        <p>
          We envision a future where everyone feels motivated to pursue their fitness goals, surrounded by a supportive network. 
          Our commitment to inclusivity ensures that individuals from all walks of life can find their place within our community, whether they're just starting out or are seasoned athletes.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <p>
          At Community Book, we believe in providing comprehensive resources that cater to the diverse needs of our users. 
          Here’s what you can expect when you join us:
        </p>
        <ul className="offerings-list">
          <li>
            <span className="offering-icon" role="img" aria-label="Weightlifting">🏋️</span>
            <strong>Comprehensive Listings:</strong> Explore a variety of gyms and wellness centers in your area, all in one convenient place. 
            From large fitness centers to intimate studios, we’ve got you covered.
          </li>
          <li>
            <span className="offering-icon" role="img" aria-label="Hourglass">⏳</span>
            <strong>Real-Time Availability:</strong> Check real-time availability of services to make informed decisions and find the perfect time for your workouts.
          </li>
          <li>
            <span className="offering-icon" role="img" aria-label="Calendar">📅</span>
            <strong>Personalized Booking Experience:</strong> Easily book classes and personal training sessions tailored to your fitness needs and schedule.
          </li>
          <li>
            <span className="offering-icon" role="img" aria-label="Handshake">🤝</span>
            <strong>Community Engagement:</strong> Connect with fellow fitness enthusiasts, share your journey, and inspire each other to stay motivated.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          Choosing Community Book means choosing a supportive partner in your fitness journey. Here’s why we stand out:
        </p>
        <ul className="offerings-list">
          <li>
            <span className="offering-icon" role="img" aria-label="Desktop Computer">🖥️</span>
            <strong>User-Friendly Interface:</strong> Navigate effortlessly through listings and booking options, making your fitness journey as smooth as possible.
          </li>
          <li>
            <span className="offering-icon" role="img" aria-label="Handshake">🤝</span>
            <strong>Trusted Partnerships:</strong> Collaborations with local gyms and trainers ensure that you receive quality services and professional guidance.
          </li>
          <li>
            <span className="offering-icon" role="img" aria-label="Star">🌟</span>
            <strong>Supportive Community:</strong> Join a community that celebrates health, wellness, and fitness, providing you with encouragement and camaraderie.
          </li>
          <li>
            <span className="offering-icon" role="img" aria-label="Feedback">📣</span>
            <strong>Feedback-Driven Development:</strong> We value your input! Our platform is constantly evolving based on user feedback to better serve your needs.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Join Us Today!</h2>
        <p>
          Whether you’re a fitness newbie or a seasoned athlete, Community Book is here to support you every step of the way. 
          Discover the right gym, book your services, and dive into a healthier lifestyle today! 
          With our platform, you can seamlessly integrate fitness into your daily routine and track your progress.
        </p>
        <p>
          If you have any questions or feedback, feel free to <a href="#contact">contact us</a> or reach out on our social media platforms. 
          We’re excited to have you on board and can’t wait to see you thrive within our community!
        </p>
        <p className="memorable-journey">
          <strong>Join today and make your journey memorable!</strong> Follow us on Instagram and Facebook for updates, tips, and community stories!
        </p>
        <p>
          <strong>Instagram:</strong> <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">@Community_Book</a> <br />
          <strong>Facebook:</strong> <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">@CommunityBook</a>
        </p>

        {/* Image Carousel */}
        <div className="image-carousel">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Carousel ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
