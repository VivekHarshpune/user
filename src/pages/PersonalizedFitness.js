import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CollaborationModal from './CollaborationModal'; // Import the modal component
import './PersonalizedFitness.css';

const PersonalizedFitness = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleServiceSelection = (service) => {
    // Navigate to a different page based on the selected service
    switch (service) {
      case 'Custom Workout Plans':
        navigate('/CustomWorkoutPlans');
        break;
      case 'Nutritional Guidance':
        navigate('/nutritional-guidance');
        break;
      case 'Fitness Assessments':
        navigate('/fitness-assessments');
        break;
      case 'Virtual Personal Training':
        navigate('/virtual-personal-training');
        break;
      case 'Fitness Challenges':
        navigate('/fitness-challenges');
        break;
      case 'Live Classes':
        navigate('/live-classes');
        break;
      case 'Community Support':
        navigate('/community-support');
        break;
      case 'Fitness Tracking Integration':
        navigate('/fitness-tracking-integration');
        break;
      case 'Mindfulness and Recovery Programs':
        navigate('/mindfulness-recovery');
        break;
      case 'Educational Resources':
        navigate('/educational-resources');
        break;
      case 'Customizable Workout Reminders':
        navigate('/custom-workout-reminders');
        break;
      case 'Progress Visualization Tools':
        navigate('/progress-visualization');
        break;
      case 'Goal Setting and Accountability':
        navigate('/goal-setting');
        break;
      default:
        break;
    }
  };

  return (
    <div className="personalized-fitness">
      <h1>Your Personalized Fitness Journey</h1>
      <p>Welcome! Here you can tailor your fitness experience to match your goals and preferences.</p>

      <h2>Select Your Fitness Services:</h2>
      <div className="service-options">
        {[
          'Custom Workout Plans',
          'Nutritional Guidance',
          'Fitness Assessments',
          'Virtual Personal Training',
          'Fitness Challenges',
          'Live Classes',
          'Community Support',
          'Fitness Tracking Integration',
          'Mindfulness and Recovery Programs',
          'Educational Resources',
          'Customizable Workout Reminders',
          'Progress Visualization Tools',
          'Goal Setting and Accountability',
        ].map((service) => (
          <button
            key={service}
            onClick={() => handleServiceSelection(service)}
            className="service-button"
          >
            {service}
          </button>
        ))}
      </div>

      <div className="collaboration-button">
        <button onClick={() => setModalOpen(true)}>Learn About Our Collaborations</button>
      </div>

      <div className="back-button">
        <button onClick={() => navigate('/gym')}>Back to Gym Finder</button>
      </div>

      {isModalOpen && <CollaborationModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default PersonalizedFitness;
