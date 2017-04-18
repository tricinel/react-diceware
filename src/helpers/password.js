import words from "../dictionary.js";

// Figure out a better way to generate truly random numbers
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generatePassword = (count) => {
  let pass = '';
  // Is there a better way to do this?
  for (let i=0; i<count; i++) {
    pass += ' ' + words[getRandomNumber(0, words.length)];
  }

  return pass;
};

const generateColor = () => {
  let colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800", "#FF5722", "#795548", "#607D8B"];

  return colors[getRandomNumber(0, colors.length)];
};

export { generatePassword, generateColor };