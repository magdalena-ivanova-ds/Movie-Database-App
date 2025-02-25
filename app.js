const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const indexRouter = require('./routes/index'); // Routes for the homepage
const usersRouter = require('./routes/users'); // Routes for actions related wiwth the users(movies)

const app = express();
const port = 3000;

// Setting up the view engine to use EJS and the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public')); // Serve static files like CSS, images
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({ createParentPath: true }));

app.use('/', indexRouter); // Homepage
app.use('/users', usersRouter); // User actions (CRUD)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});