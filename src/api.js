const express = require('express');
const loginRoute = require('./routes/login');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', loginRoute);

app.use((err, _req, res, _next) => {
    const { message } = err;
    console.log('//////////////////////////', message, '////////////////////');
    return res.status(500).json({ message: 'Server error.' });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
