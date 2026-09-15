// 1. Initialize a poll variable to a new Map object
const poll = new Map();

// 2. Function addOption that accepts a parameter option
const addOption = (option) => {
    // If option is empty or just whitespace
    if (!option || option.trim() === "") {
        return "Option cannot be empty.";
    }
    
    // If option already exists
    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }
    
    // Add option with an empty Set as its value to track voters
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
};

// 3. Function vote that accepts two parameters: option and voterId
const vote = (option, voterId) => {
    // If option doesn't exist
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }
    
    // Get the Set of voters for this option
    const voters = poll.get(option);
    
    // Check if voterId has already voted for this option
    if (voters.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`;
    }
    
    // Add voterId to the Set of voters for this option
    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
};

// 4. Function displayResults to display the poll results
const displayResults = () => {
    let results = "Poll Results:\n";
    for (const [option, voters] of poll) {
        results += `${option}: ${voters.size} votes\n`;
    }
    return results.trim(); // Remove trailing newline
};

// 5. Add at least three options to the poll
addOption("Turkey");
addOption("Morocco");
addOption("Spain");
// Optional: Add more options if needed
addOption("Algeria");
addOption("Malaysia");

// 6. Add at least three votes
vote("Turkey", "voter1");
vote("Turkey", "voter2");
vote("Morocco", "voter3");
// Optional: Add more votes
vote("Algeria", "traveler1");
vote("Malaysia", "traveler2");
vote("Spain", "voter4");

// Test the functions (optional - for verification)
console.log(addOption("Egypt")); // Option "Egypt" added to the poll.
console.log(addOption("")); // Option cannot be empty.
console.log(addOption("Turkey")); // Option "Turkey" already exists.
console.log(vote("Malaysia", "traveler1")); // Voter traveler1 voted for "Malaysia".
console.log(vote("Algeria", "traveler1")); // Voter traveler1 has already voted for "Algeria".
console.log(vote("Nigeria", "traveler2")); // Option "Nigeria" does not exist.
console.log(displayResults());