const userModel = require('../models/userModel');

function getUsers(req, res) {
    const users = userModel.getUsers();
    res.render('users', { users }); // Render the users page with all movies
}

function getUser(req, res) {
    const user = userModel.getUser(req.params.id);
    if (user) {
        res.render('user', { user }); // Render details of a specific movie
    } else {
        res.status(404).send('User not found'); //Handle errors
    }
}

function createUser(req, res) {
    const newUser = userModel.createUser(req.body); // Add a new movie
    if (newUser) {
        res.redirect('/users'); // Redirect back to the movies page
    } else {
        res.status(404).send('User not found'); 
    }
}

function updateUser(req, res) {
    const updatedUser = userModel.updateUser(req.body); // Edit movie details
    if (updatedUser) {
        res.redirect('/users/' + updatedUser.id); // Redirect to the updated movie's details
    } else {
        res.status(404).send('User not found');
    }
}

function deleteUser(req, res) {
    const success = userModel.deleteUser(req.params.id); // Delete movie
    if (success) {
        res.redirect('/users');
    } else {
        res.status(404).send('User not found');
    }
}

function editUser(req, res) {
    const user = userModel.getUser(req.params.id);
    if (user) {
        res.render('editUser', { user }); // Show edit page for movie
    } else {
        res.status(404).send('User not found');
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    editUser,
};