// Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null; 
        this.size = 0; 
    }

    // Create a function to add nodes to the linked list.
    append(value) {
        const newNode = new Node(value); 
        if (this.head === null) {
            this.head = newNode; 
        } else {
            let current = this.head; 
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode; 
        }
        this.size++; 
        this.print(); // Print the list after adding a new node
    }

    // Create a function to display the list.
    print() {
        let current = this.head;
        let listValues = [];
        while (current !== null) {
            listValues.push(current.value); 
            current = current.next; 
        }
        console.log(listValues.join(" -> ")); 
    }
}

// Create a new linked list
const list = new LinkedList();

// Add items to the list.
list.append("Data Structures - Array");
list.append("Variable Type - Integer");
list.append("Sorting Algorithm - Bubble Sort");
