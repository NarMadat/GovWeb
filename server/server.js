const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3005;


app.use(bodyParser.json());


let userData = {
  email: '',
  type: '',
  title: '',
  demo: ''
};


app.get('/api/user', (req, res) => {
  res.json(userData);
});


app.post('/api/user/email', (req, res) => {
  const { email } = req.body;
  if (email) {
    userData.email = email;
    res.status(200).send('Email updated');
  } else {
    res.status(400).send('Email is required');
  }
});


app.post('/api/user/type', (req, res) => {
  const { type } = req.body;
  if (type) {
    userData.type = type;
    res.status(200).send('Type updated');
  } else {
    res.status(400).send('Type is required');
  }
});


app.post('/api/user/title', (req, res) => {
  const { title } = req.body;
  if (title) {
    userData.title = title;
    res.status(200).send('Title updated');
  } else {
    res.status(400).send('Title is required');
  }
});


app.post('/api/user/demo', (req, res) => {
  const { demo } = req.body;
  if (demo) {
    userData.demo = demo;
    res.status(200).send('Demo updated');
  } else {
    res.status(400).send('Demo is required');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});