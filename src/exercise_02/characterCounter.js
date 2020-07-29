export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  if (string === undefined || string === null) {
    return 0;
  }
  if (prediction === undefined || prediction === null) {
    return string.length;
  }

  const len = string.length;
  let num = 0;
  for (let i = 0; i < len; i++) {
    if (prediction( string[i]) === true) {
      num++;
    }
  }

  return num;

  throw new Error('Please delete this line and implement the function');
}
