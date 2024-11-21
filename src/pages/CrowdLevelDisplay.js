import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CrowdLevelDisplay.css'; // Import the CSS file

const CrowdLevelDisplay = () => {
    const [crowdCount, setCrowdCount] = useState(0);
    const [crowdLevel, setCrowdLevel] = useState("Low Crowd");

    const fetchCrowdLevel = async () => {
        try {
            const response = await axios.get('http://localhost:5003/crowd_level');
            setCrowdCount(response.data.count);
            setCrowdLevel(response.data.level);
        } catch (error) {
            console.error("Error fetching crowd level:", error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetchCrowdLevel();
        }, 5000); // Fetch crowd data every 5 seconds

        fetchCrowdLevel(); // Initial fetch
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="crowd-level-container">
            <h1>Stay Ahead with CommunityBook!</h1>
            <h2>Track Your Gym's Real-Time Crowd</h2>
            <p className="people-count">Current Gym Attendance: <strong>{crowdCount}</strong></p>
            <p className={`crowd-level ${crowdLevel.replace(" ", "-").toLowerCase()}`}>Crowd Level: <strong>{crowdLevel}</strong></p>

            <button className="cta-btn" onClick={() => alert("Stay updated! We'll notify you when the gym is less crowded.")}>
                Notify Me When It's Less Crowded
            </button>
        </div>
    );
};

export default CrowdLevelDisplay;
