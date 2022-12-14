const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('crud app')
})

// routes
app.use('/users', usersRouter);
app.use('/login', loginRouter);


// db connection
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    });
});