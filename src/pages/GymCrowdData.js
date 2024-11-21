// Step 1: Define gym details for each area
const gyms = [
    // Kothrud
    { name: "Gold's Gym", location: 'Kothrud', capacity: 60, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Talwalkars Gym', location: 'Kothrud', capacity: 50, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Snap Fitness', location: 'Kothrud', capacity: 70, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Fitness First', location: 'Kothrud', capacity: 55, openingTime: '06:00', closingTime: '22:00' },
    { name: 'The Gym', location: 'Kothrud', capacity: 40, openingTime: '06:00', closingTime: '22:00' },
  
    // Pimple Saudagar
    { name: 'Anytime Fitness', location: 'Pimple Saudagar', capacity: 65, openingTime: '00:00', closingTime: '00:00' },
    { name: 'Talwalkars Gym', location: 'Pimple Saudagar', capacity: 60, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Snap Fitness', location: 'Pimple Saudagar', capacity: 50, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Krazy Fitness', location: 'Pimple Saudagar', capacity: 45, openingTime: '06:00', closingTime: '22:00' },
    { name: "Gold's Gym", location: 'Pimple Saudagar', capacity: 60, openingTime: '06:00', closingTime: '22:00' },
  
    // Viman Nagar
    { name: "Gold's Gym", location: 'Viman Nagar', capacity: 70, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Talwalkars Gym', location: 'Viman Nagar', capacity: 55, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Anytime Fitness', location: 'Viman Nagar', capacity: 65, openingTime: '00:00', closingTime: '00:00' },
    { name: 'Inshape Fitness', location: 'Viman Nagar', capacity: 45, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Fitness Factory', location: 'Viman Nagar', capacity: 50, openingTime: '06:00', closingTime: '22:00' },
  
    // Aundh
    { name: 'Talwalkars Gym', location: 'Aundh', capacity: 60, openingTime: '06:00', closingTime: '22:00' },
    { name: "Gold's Gym", location: 'Aundh', capacity: 70, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Anytime Fitness', location: 'Aundh', capacity: 65, openingTime: '00:00', closingTime: '00:00' },
    { name: 'Snap Fitness', location: 'Aundh', capacity: 50, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Bodycraft Fitness', location: 'Aundh', capacity: 55, openingTime: '06:00', closingTime: '22:00' },
  
    // Wakad
    { name: 'Talwalkars Gym', location: 'Wakad', capacity: 60, openingTime: '06:00', closingTime: '22:00' },
    { name: "Gold's Gym", location: 'Wakad', capacity: 70, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Anytime Fitness', location: 'Wakad', capacity: 65, openingTime: '00:00', closingTime: '00:00' },
    { name: 'Krazy Fitness', location: 'Wakad', capacity: 50, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Snap Fitness', location: 'Wakad', capacity: 55, openingTime: '06:00', closingTime: '22:00' },
  
    // Baner
    { name: "Gold's Gym", location: 'Baner', capacity: 60, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Talwalkars Gym', location: 'Baner', capacity: 55, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Anytime Fitness', location: 'Baner', capacity: 65, openingTime: '00:00', closingTime: '00:00' },
    { name: 'Core Fitness', location: 'Baner', capacity: 50, openingTime: '06:00', closingTime: '22:00' },
    { name: 'The Body Lab', location: 'Baner', capacity: 55, openingTime: '06:00', closingTime: '22:00' },
  
    // Hadapsar
    { name: 'Talwalkars Gym', location: 'Hadapsar', capacity: 60, openingTime: '06:00', closingTime: '22:00' },
    { name: "Gold's Gym", location: 'Hadapsar', capacity: 70, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Fitness First', location: 'Hadapsar', capacity: 50, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Anytime Fitness', location: 'Hadapsar', capacity: 65, openingTime: '00:00', closingTime: '00:00' },
    { name: 'Snap Fitness', location: 'Hadapsar', capacity: 55, openingTime: '06:00', closingTime: '22:00' },
  
    // Kharadi
    { name: "Gold's Gym", location: 'Kharadi', capacity: 60, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Talwalkars Gym', location: 'Kharadi', capacity: 55, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Anytime Fitness', location: 'Kharadi', capacity: 65, openingTime: '00:00', closingTime: '00:00' },
    { name: 'Snap Fitness', location: 'Kharadi', capacity: 50, openingTime: '06:00', closingTime: '22:00' },
    { name: 'Krazy Fitness', location: 'Kharadi', capacity: 40, openingTime: '06:00', closingTime: '22:00' },
  ];
  
  // Step 2: Function to generate dataset for one gym
  function generateCrowdData(gym, date) {
    const crowdData = [];
    const startTime = new Date(`${date}T${gym.openingTime}:00`);
    const endTime = new Date(`${date}T${gym.closingTime}:00`);
  
    let currentOccupancy = 0;
  
    // Simulate every 5 seconds
    for (let time = startTime; time <= endTime; time.setSeconds(time.getSeconds() + 5)) {
      // Randomly decide number of entries and exits
      const entries = Math.floor(Math.random() * 5); // 0-4 entries
      const exits = Math.floor(Math.random() * 3);   // 0-2 exits
  
      // Update current occupancy
      currentOccupancy += entries;
      currentOccupancy -= exits;
  
      // Ensure current occupancy does not exceed capacity or drop below 0
      currentOccupancy = Math.max(0, Math.min(currentOccupancy, gym.capacity));
  
      // Determine crowd level
      let crowdLevel;
      if (currentOccupancy < 25) {
        crowdLevel = 'less';
      } else if (currentOccupancy < 45) {
        crowdLevel = 'moderate';
      } else {
        crowdLevel = 'heavy';
      }
  
      // Store the time, occupancy, and crowd level
      crowdData.push({
        timestamp: time.toISOString(),
        currentOccupancy,
        crowdLevel,
      });
    }
  
    return crowdData;
  }
  
  // Step 3: Generate dataset for each gym
  const date = '2024-10-03'; // Example date
  const allGymData = gyms.map(gym => ({
    gym: gym.name,
    location: gym.location,
    data: generateCrowdData(gym, date),
  }));
  
  // Step 4: Output the generated data
  console.log(JSON.stringify(allGymData, null, 2));
  