const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT

const mongoURI = process.env.MONGO_URI

app.listen(PORT, () => console.log('server running on: ' + serverURI));
mongoose.connect(mongoURI, (err) => {
  if(err) {
    console.log(err.message)
    return
  }
  console.log('Connected to DB')
});