const getMathRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomNum = (max: number): number => {
  let randomNum;
  const array = new Uint32Array(1);
  const Crypto = window.crypto || window.msCrypto;
  if (Crypto !== undefined) {
    Crypto.getRandomValues(array);
    randomNum = array[0] % max;
  } else {
    randomNum = getMathRandomNumber(1, max);
    console.warn('Crypto method not available');
  }
  return randomNum + 1;
};

export { getMathRandomNumber, getRandomNum };
