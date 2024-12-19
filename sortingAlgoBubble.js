const readline = require('readline');

//Empty array
let numbers = [];

// Configure readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to insert numbers into the array.
function addNumber() {
    if (numbers.length < 10) {
        rl.question("Enter a number (or leave blank to stop): ", (num) => {
            if (num !== "") {
                num = parseInt(num); // Convert the input to an integer
                if (!isNaN(num)) {
                    numbers.push(num); // Add number to the array
                    addNumber(); // Request the next number from the user.
                } else {
                    console.log("Please enter a valid number.");
                    addNumber(); // Ask for input again if the provided value is not a valid number.
                }
            } else {
                bubbleSort(numbers); // If input is blank, start sorting
            }
        });
    } else {
        bubbleSort(numbers); // Start sorting if array size reaches 10
    }
}

// Function to implement Bubble Sort algorithm
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    // Log initial array
    console.log("Initial array:", arr);

    // Bubble sort process
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); 

            //  If the current element is larger than the next, swap their positions.
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                console.log(`Swapped: ${arr[j]} with ${arr[j + 1]}`);
            }
        }
        // If no elements are swapped during the inner loop, exit the loop early for optimization.
        if (!swapped) break;
    }

    // Log sorted array
    console.log("Sorted array:", arr);
    rl.close();  // Close the readline interface
}

// Start the process by asking for numbers
addNumber();
