export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let arr = [];
  for (let i = start; i !== end;) {
    arr.push(i);
    if (start < end) {
      i++;
    } else {
      i--;
    }
  }
  return arr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let len = numbers.length;
  let sum=0;
  for (let i = 0; i < len; i++){
    sum += numbers[i];
  }
  return sum;

  throw new Error('Please delete this line and implement the function');
}
