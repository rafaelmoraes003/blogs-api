const express = require('express');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);

app.use((err, _req, res, _next) => {
    console.log(err.message, '//////////////////');
    const message = 'Server error.';
    return res.status(500).json({ message });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
