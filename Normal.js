function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log(reverseString("Nirmal"));

function findLargest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(findLargest(10, 5));
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(7));
