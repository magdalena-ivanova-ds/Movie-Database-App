const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes to handle user (movie) CRUD operations
router.get('/', userController.getUsers); // Display all users
router.get('/new', (req, res) => res.render('createUser')); // Form to create new user
router.get('/:id/edit', userController.editUser); // Edit user by ID
router.get('/:id', userController.getUser); // View user details by ID
router.post('/', userController.createUser); // Create a new user
router.post('/:id', userController.updateUser); // Update user by ID
router.post('/:id/delete', userController.deleteUser); // Delete user by ID

module.exports = router;