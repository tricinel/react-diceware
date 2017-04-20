import wordList from './word-list'

const rollDice = () => {
  let diceRolls = []
  for (let i = 1; i <= 5; i++) {
    const getRandomNum = (max) => {
      let randomNum
      if (window.crypto && window.crypto.getRandomValues) {
        let array = new Uint32Array(1)
        window.crypto.getRandomValues(array)
        randomNum = array[0] % max
      } else if (window.msCrypto && window.msCrypto.getRandomValues) {
        let array = new Uint32Array(1)
        window.msCrypto.getRandomValues(array)
        randomNum = array[0] % max
      } else {
        // instead of error, introduce fallback using Math.random
        throw new Error('Crypto method not available')
      }
      return randomNum + 1
    }
    diceRolls.push(getRandomNum(6))
  }
  return diceRolls.join('')
}

const getPassword = (count) => {
  let words = []
  for (let i = 0; i < count; i++) {
    words.push(
      wordList[rollDice()]
    )
  }
  return words.join(' ')
}

export default getPassword
