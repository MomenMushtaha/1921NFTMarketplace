// Define the initial sequence array with the first two Fibonacci numbers
let sequence = [0, 1];

/**
 * Function to generate a list of Fibonacci sequence up to a given number
 * @param {number} num - The number of Fibonacci numbers to generate
 */
function listSequence(num) {
  // Loop from the second index of the sequence array up to the given number
  for (let i = 2; i < num; i++) {
    // Push the sum of the current and previous number in the sequence to the sequence array
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  // Log the sequence array to the console
  console.log(sequence);
}

// Call the listSequence function with 15 as the argument to generate the first 15 Fibonacci numbers
listSequence(15);