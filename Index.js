const express = require('express');
const app = express();
const PORT = 2127;

app.get('/' , (req , res) => {
    res.send('Hii hello there...')
})

app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`);
})