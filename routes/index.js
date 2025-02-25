const express = require('express');
const router = express.Router();

// Route for homepage that displays team member info
router.get('/', (req, res) => {
    res.render('index'); // Render the homepage without group data
});

module.exports = router;

