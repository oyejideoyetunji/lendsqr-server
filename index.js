// const path = require('path');
const express = require('express');
const app = express();


const port = process.env.PORT || 8000;


app.use(express.static("build"))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });

app.listen(port, () => {
    console.log('Server is up!');
});