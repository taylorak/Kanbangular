'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');
const passport = require('passport');
const session = require('express-session');
const setUpPassport = require('./passport/passport');
const tasks = require('./routes/tasks');
const login = require('./routes/login');
const register = require('./routes/register');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'skgja;djg;asjg;adjg;sjdgk',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/register', register);
app.use('/login', login);
app.use('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.use('/api/tasks', tasks);

app.get('*', (req, res) => {
  res.sendFile('/public/index.html', {
    root: __dirname
  });
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Listening on 3000!");
  });
});