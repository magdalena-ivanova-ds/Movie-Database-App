const users = [
    {
        id: 1,
        title: 'Dune',
        year: 2021,
        mainActors: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
        genre: 'Sci-Fi, Adventure',
        description: 'A young nobleman becomes embroiled in a war for control of the galaxy\'s most valuable asset, the spice melange.'
    },
    {
        id: 2,
        title: 'Interstellar',
        year: 2014,
        mainActors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
        genre: 'Sci-Fi, Drama',
        description: 'A team of explorers travels through a wormhole in space to ensure humanity\'s survival.'
    },
    {
        id: 3,
        title: 'The Matrix',
        year: 1999,
        mainActors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        genre: 'Action, Sci-Fi',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    },
    {
        id: 4,
        title: 'Inception',
        year: 2010,
        mainActors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        genre: 'Action, Sci-Fi, Thriller',
        description: 'A thief who enters the dreams of others to steal secrets from their subconscious is given the task of planting an idea into a target\'s mind.'
    }
];
let nextId=5; // ID for the next movie to be added

function getUsers() {
    return users;
}

function getUser(id) {
    return users.find(user => user.id === parseInt(id)) || null;
}

function createUser(data) {
    const newUser = {
        id: nextId,
        title: data.title,
        year: parseInt(data.year),
        mainActors: data.mainActors,
        genre: data.genre,
        description: data.description,
    };
    users.push(newUser); // Add to the list
    nextId++; // Increment the ID by 1
    return newUser;
}

// Update details of an existing movie
function updateUser(data) { 
    const index = users.findIndex(user => user.id === parseInt(data.id));
    if (index !== -1) {
        users[index].title = data.title;
        users[index].year = data.year;
        users[index].mainActors = data.mainActors;
        users[index].genre = data.genre;
        users[index].description = data.description;
        return users[index];
    }
    return null; // Return null if no match is found
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users.splice(index, 1); // Remove movie from the list

        // Reassign IDs
        for (let i = 0; i < users.length; i++) {
            users[i].id = i + 1; 
        }

        nextId = users.length + 1; // Update next ID
        return true;
    }
    return false; // If ID not found
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};