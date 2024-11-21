// src/components/Modal.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Modal.css'; // Make sure you have your CSS

const Modal = ({ isOpen, onClose, children }) => {
    const navigate = useNavigate(); // Initialize navigate function

    const handleNavigate = () => {
        onClose(); // Close the modal first
        navigate('/video-crowd-display'); // Navigate to Video Crowd Display
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                {children}
                <button onClick={handleNavigate}>Go to Video Crowd Display</button> {/* Button to navigate */}
            </div>
        </div>
    );
};

export default Modal;
