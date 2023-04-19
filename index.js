// Remove the spaces found in a string ////////////////////////////////
function removeSpace(str) {
  str = str.replace(/\s/g, "");
  return str;
}

var str = "Hello      world    how  are you ";
console.log(removeSpace(str));

//  Return a Boolean if a number is divisible by 10 ////////////////////////
function divide(num) {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divide(20));

// Return the number of vowels in a string ///////////////////////////
function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;

  return count;
}

const sentence = prompt("Enter a sentence: ");

const result = countVowel(sentence);

console.log(result);
