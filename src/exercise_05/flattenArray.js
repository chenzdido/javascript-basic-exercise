export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }
  let len = array.length;
  let arr=[];
  for (let i = 0; i < len; i++) {
    if (array[i].length === undefined) {
      arr.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        arr.push(array[i][j]);
      }
    }
  }
  return arr;
}
