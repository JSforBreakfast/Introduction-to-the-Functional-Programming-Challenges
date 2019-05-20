// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  
  return fixedValue + 1; // i++ would increment i by one and saves new value into i, but i+1 increments current value in i by one, but doesn't save new value into i
  
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
