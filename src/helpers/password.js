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

export { generatePassword };