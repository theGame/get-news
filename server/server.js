const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoURIConnection = 'url';
const host = 'http://localhost';
const port = 5000;

const app = express();
app.use(cors());
app.options('*', cors());

mongoose.connect(mongoURIConnection, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('connected', () => {
    app.listen(port, 'localhost', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port);
    });
});
db.on('error', (err) => {
    console.info('Mongoose default connection error: %s', err);
    process.exit(1);
});
db.on('disconnected', () => console.info('Mongoose default connection disconnected'));
db.on('SIGINT', () => {
    db.close();
    process.exit();
});

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.listen(port, () => `Server running on port ${port}`);