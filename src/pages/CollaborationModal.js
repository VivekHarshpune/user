// CollaborationModal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CollaborationModal.css'; // Create a CSS file for styling

const CollaborationModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    // Navigate to the exclusive health care product page
    navigate('/exclusive-health-care-products');
    onClose(); // Close the modal after navigating
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Our Collaborations</h2>
        <p>We are proud to collaborate with the following brands:</p>
        <ul>
          <li>HealKart - Your trusted source for health products</li>
          <li>Muscle Blaze - Premium nutritional supplements for fitness enthusiasts</li>
          {/* Add more collaborations as needed */}
        </ul>
        <button onClick={handleShopNow}>Shop Now</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CollaborationModal;
