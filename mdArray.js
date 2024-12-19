const readline = require('readline');

// Initialize the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for inputs
rl.question("Enter names separated by commas (e.g., Suan, Luna, Gabriel, Else): ", (namesInput) => {
    rl.question("Enter ages separated by commas (e.g., 24, 65, 21, 5): ", (agesInput) => {
        // Split inputs into arrays
        const names = namesInput.split(",").map(name => name.trim());
        const ages = agesInput.split(",").map(age => parseInt(age.trim(), 10));

        //Transform into a multidimensional array
        const multiDimArray = names.map((name, index) => [name, ages[index]]);

        // Output the modified array
        console.log("Restructured Multi-Dimensional Array:");
        multiDimArray.forEach(subArray => {
            console.log(`[Name: ${subArray[0]}, Age: ${subArray[1]}]`);
        });

        // Close readline
        rl.close();
    });
});
