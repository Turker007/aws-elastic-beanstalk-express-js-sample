const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is a success message from Tuerker!'));

app.listen(port);
console.log(`App is on port http://localhost:${port}`);
