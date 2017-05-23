// @flow

import wordList from '../../src/helpers/word-list';
import getPassword from '../../src/helpers/password-generator';


test('getPassword should return a word from the list', () => {
  const password = getPassword(1);
  let found = false;
  // TODO: do this without a for/loop
  for (let key in wordList) {
    if (wordList[key] === password) {
      found = true;
      break;
    }
  }

  expect(found).toBeTruthy();
});
