const readline = require('readline');

// Initialize an empty stack (array)
let groceryStack = [];

// Create a function to peek the stack, which returns the top item or notifies if the stack is empty.
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
    } else {
        console.log("Top item in the stack:", groceryStack[groceryStack.length - 1]);
    }
}

// Create a function to add an item to the stack.
function push(item) {
    groceryStack.push(item);
    console.log(`Added "${item}" to the stack.`);
    peek(); 
    console.log("Current stack:", groceryStack);
}

// Create a function to remove an item from the stack.
function pop() {
    if (groceryStack.length === 0) {
        console.log("No items to pop, the stack is empty.");
    } else {
        const removedItem = groceryStack.pop(); 
        console.log(`Removed "${removedItem}" from the stack.`);
        peek(); 
        console.log("Current stack:", groceryStack);
    }
}

// Configure the readline interface to accept user input.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array of predefined items
const predefinedItems = ["racket", "grip", "shoes", "socks"];

// Manage user input and interact with the stack.
let itemsCount = 0;

function addPredefinedItems() {
    if (itemsCount < predefinedItems.length) {
        const item = predefinedItems[itemsCount];
        push(item);
        itemsCount++;
        addPredefinedItems();
    } else {
        rl.close(); 
    }
}

addPredefinedItems();
