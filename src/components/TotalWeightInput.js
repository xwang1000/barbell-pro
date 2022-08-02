import React from 'react';

const TotalWeightInput = (props) => {
  const {
    initialValue,
    setNewTotalWeight
  } = props;

  const handleBlur = (e) => {
    const newTotalWeight = e.target.value;
    setNewTotalWeight(newTotalWeight);
  }
  
  return (
    <input
      onBlur={handleBlur}
      name="totalWeight"
      type="number"
      value={initialValue}
    />
  );

};

export default TotalWeightInput;
