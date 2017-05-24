const getStrength = (count) => {
  if (count < 4) {
    return {
      width: 33,
      color: '#F44336'
    };
  } else if (count < 6) {
    return {
      width: 66,
      color: '#2196F3'
    };
  } else {
    return {
      width: 95,
      color: '#00E676'
    };
  }
};

export default getStrength;