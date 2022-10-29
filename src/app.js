const express = require('express');
const { myRouter } = require('./routes/routes');

// ...

const app = express();

app.use(express.json());

app.use(myRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
