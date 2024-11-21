import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the updated CSS file
import ChatBot from './ChatBot'; // Import the ChatBot component
import Slider from 'react-slick'; // Import react-slick for the carousel

// Dummy data for facilities
const dummyFacilities = [
  {
    id: 1,
    name: 'Badminton Court',
    description: 'Play and compete in our top-quality badminton courts.',
    image: '/images/HOMEPAGE/Badminton-art.png',
  },
  {
    id: 2,
    name: 'Gym',
    description: 'A place to stay fit and healthy with our state-of-the-art gym equipment.',
    image: '/images/HOMEPAGE/Gym_Yoga_wallpapers-compressed-page-008_1024x.webp',
  },
  {
    id: 3,
    name: 'Sports Complexes',
    description: 'Enjoy a variety of sports activities in our comprehensive sports complexes.',
    image: '/images/HOMEPAGE/solaris-fitness-world-aundh-pune-fitness-centres-fgteymrr50.webp',
  },
  {
    id: 4,
    name: 'Turf',
    description: 'Play various sports on our well-maintained turf fields.',
    image: '/images/HOMEPAGE/mobs2.jpg',
  },
  {
    id: 5,
    name: 'Swimming Pools',
    description: 'Relax and swim in our clean and refreshing swimming pools.',
    image: '/images/HOMEPAGE/frp-swimming-pools.jpeg',
  },
];

const FacilityItem = ({ facility }) => {
  // Define the route based on the facility's name
  let route;
  if (facility.name.toLowerCase() === 'badminton court') {
    route = '/about-badminton'; // Specific route for badminton
  } else if (facility.name.toLowerCase() === 'gym') {
    route = '/gymhome_welcome'; // Specific route for gym
  } else {
    route = `/${facility.name.toLowerCase().replace(/\s+/g, '-')}`; // General route for other facilities
  }

  // Function to split the facility name into letters
  const renderFacilityName = () => {
    return facility.name.split('').map((letter, index) => (
      <span key={index} className="jump-letter" style={{ animationDelay: `${index * 0.1}s` }}>
        {letter}
      </span>
    ));
  };

  return (
    <div className="facility-item">
      <Link to={route} className="facility-link">
        <img src={facility.image} alt={facility.name} className="facility-image" />
        <h3 className="facility-name">{renderFacilityName()}</h3> {/* Letters will jump here */}
      </Link>
      <p className="facility-description">{facility.description}</p>
    </div>
  );
};

const HomePage = () => {
  // Array of image paths for the carousel
  const advertiseImages = [
    '/images/HOMEPAGE/ADVERTISE/flat-design-sport-club-landing-page_23-2150336872.avif',
    '/images/HOMEPAGE/ADVERTISE/flat-social-media-promo-template-sports-club_23-2150409190.avif',
    '/images/HOMEPAGE/ADVERTISE/sports-day-banner-template-design_23-2149416458.avif',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    adaptiveHeight: true,
    fade: true,
  };

  return (
    <div>
      <ChatBot /> {/* Add the ChatBot component here */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to the Community Book</h1>
          <p className="hero-subtitle">Explore our top-notch facilities and join our vibrant community events!</p>
          <Link to="/about" className="hero-link">
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>
      </section>

      <section className="updates-box">
        <h2 className="updates-title">Latest Updates from CommunityBook</h2>
        <div className="news-ticker">
          <span role="img" aria-label="Surprise Event">🎉</span> Surprise Event This Weekend: Join Us for Free Yoga Classes! |
          <span role="img" aria-label="Special Offer">🏆</span> Special Offer: 20% Off All Memberships Until the End of the Month! |
          <span role="img" aria-label="Fitness Challenge">💡</span> Join Our Fitness Challenge: Win Exciting Prizes! |
          <span role="img" aria-label="Sports Fest">📅</span> Don't Miss Our Annual Sports Fest Next Saturday!
        </div>
        <div className="actions-container">
          <div className="check-traffic">
            <h3 className="check-traffic-title">Check Gym Traffic Now</h3>
            <Link to="/crowd-level-predictor" className="hero-link">
              <button className="predict-btn">Predict Traffic</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <h2 className="facilities-title">Our Facilities</h2>
        <div className="facilities-container">
          {dummyFacilities.map((facility) => (
            <FacilityItem key={facility.id} facility={facility} />
          ))}
        </div>
      </section>

      <section className="advertisement-section">
        <h2 className="advertisement-title">Advertise With Us</h2>
        <p className="advertisement-text">
          Looking to reach a vibrant community? Advertise your business with us and gain exposure to our diverse audience.
        </p>
        <Slider {...settings}>
          {advertiseImages.map((image, index) => (
            <div key={index} className="carousel-image">
              <img src={image} alt={`Advertisement ${index + 1}`} className="advertise-image rotating" />
            </div>
          ))}
        </Slider>
        <a href="/Advertisement" className="hero-link">
          <button className="advertise-btn">Advertise Now</button>
        </a>
      </section>

      <section className="privacy-policy-section">
        <h2 className="privacy-policy-title">Privacy Policy</h2>
        <p className="privacy-policy-description">
          Learn more about how we handle your data and protect your privacy. Click the link below to read our full Privacy Policy.
        </p>
        <button className="privacy-policy-button" onClick={() => window.location.href = '/privacy-policy'}>
          Go to Privacy Policy
        </button>
        <div className="feedback-section">
          <Link to="/UserFeedback" className="hero-link">
            <button className="feedback-btn">Give Feedback</button>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <Link to="/contact" className="hero-link">
          <button className="contact-us-btn">Contact Us</button>
        </Link>
        <div className="footer-info">
          <p className="footer-text">Email: contact@communitybook.com</p>
          <p className="footer-text">Phone: 9931198029</p>
        </div>
        <div className="social-media">
          <h2 className="footer-title">Connect with Us</h2>
          <a href="https://facebook.com" className="social-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            Facebook
          </a>
          <a href="https://twitter.com" className="social-link">
            <img
              src="./images/LOGO/twitter-logo-twitter-icon-twitter-symbol-free-free-vector.jpg"
              alt="Twitter"
            />
            Twitter
          </a>
          <a href="https://instagram.com" className="social-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
