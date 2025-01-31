function myFunction(a, b) {
  //Explicitly convert inputs to numbers
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  //Handle potential NaN values
  if (isNaN(numA) || isNaN(numB)){
    return 0; //Or throw an error, depending on desired behavior 
  }
  return numA + numB;
}

console.log(myFunction(5, "5")); // Output: 10
console.log(myFunction(5, "abc")); // Output: 0 