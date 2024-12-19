const readline = require('readline');

// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for names
rl.question("Enter names separated by commas (e.g., John, Jane, Alice): ", (namesInput) => {
    // Prompt for numbers
    rl.question("Enter numbers separated by commas (e.g., 20, 123, 45): ", (numbersInput) => {
        // Input into arrays
        const names = namesInput.split(",").map(name => name.trim());
        const numbers = numbersInput.split(",").map(num => parseFloat(num.trim()));

        // Both arrays into a single array
        const mergedArray = [...names, ...numbers];
        console.log("Merged Array:", mergedArray);

        // Numbers numerically in reverse
        const sortedNumbers = [...numbers].sort((a, b) => b - a);
        console.log("Numbers sorted in reverse order:", sortedNumbers);

        // Names alphabetically
        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        console.log("Names sorted alphabetically:", sortedNames);

        // Close readline
        rl.close();
    });
});
