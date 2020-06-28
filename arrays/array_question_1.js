// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverse(str) {
  // don't forget to check input

  let reversedArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArr.push(str[i]);
  }
  return reversedArr.join('');
}

console.log(reverse('Hi My name is Andrei'));

//* reverse a string algorithm:
// turn the string into an array
// loop through the array
//    reverse the indexes
// turn the array into a string
// return the string

// 0 1 2 3 4 5
// 5 4 3 2 1 0
