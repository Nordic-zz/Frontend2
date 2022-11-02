const express = require('express');
const app = express();

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => 
    console.log('http:localhost:' + PORT));


app.get('/', (req, res) => {
    
    res.sendFile('index.html')
})