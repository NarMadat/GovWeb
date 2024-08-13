const express = require('express');

const app = express();
const port = 3000;


app.use(express.json());


const users = [];


app.post('/', (req, res) => {
    const { email, type, name, choices } = req.body;


    if (!email || !type || !name || !choices) {
        return res.status(400).json({ message: 'Fill all' });
    }

    const newUser = { email, type, name, choices };
    users.push(newUser);

    res.status(201).json(newUser);
});


app.get('/', (req, res) => {
    res.status(200).json(users);
});


app.listen(port, () => {
    console.log(`Server wa runing`);
});