import React from 'react';

const TotalWeightInput = (props) => {
  const {
    handleInputChange,
    initialValue
  } = props;

  const handleBlur = () => {
    console.log('blurrrr')
  }
  
  return (
    <input
      onChange={handleInputChange}
      onBlur={handleBlur}
      name="totalWeight"
      type="number"
      value={initialValue}
    />
  );

};

export default TotalWeightInput;
