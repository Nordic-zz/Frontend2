const express = require('express');
const path = require('path');
const todos = require('./data/todos.json');

const app = express();
const PORT = process.env.PORT || 9999;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/todos', (request, response) => {
  response.send(todos);
});

app.listen(PORT, () => console.log('Server running at http://localhost:' + PORT));

