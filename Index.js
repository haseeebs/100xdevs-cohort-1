const express = require('express');
const app = express();
const PORT = 2127;

app.use(express.json());

const middleware = (req, res, next) => {
    console.log('Middleware gets called ',req.body);
    next();
};

app.use(middleware);

app.get('/', (req, res) => {
    res.json({
        name: 'haseeb',
        age: 21
    });
});

app.post('/', (req, res) => {
    res.send('This is post request...');
});

app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`);
})