import React, { useEffect, useState } from 'react';
import { calculateClaimablePoints } from './claimablePointsUtility';

const OtherComponent = () => {
  const [claimablePoints, setClaimablePoints] = useState(0);

  useEffect(() => {
    // Call the function to get the claimable points value
    const fetchClaimablePoints = async () => {
      const points = await calculateClaimablePoints();
      setClaimablePoints(points);
    };

    fetchClaimablePoints();
  }, []);

  return (
    <div>
      <p>Claimable Points: {claimablePoints}</p>
      {/* Use the claimablePoints value in your component */}
    </div>
  );
};

export default OtherComponent;
