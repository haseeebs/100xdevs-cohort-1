const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    fs.readFile('todo.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

let id = 1;
app.post('/', (req, res) => {
    
    fs.readFile('todo.json', 'utf-8' , (err , data) => {
        if(err) throw err;

        const todoData = JSON.parse(data);
        
        const todoObj = {
            id: id,
            title: req.body.title,
            description: req.body.description
        };

        todoData.push(todoObj);

        fs.writeFile('todo.json', JSON.stringify(todoData), (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`Your data has been successfully stored to the todo.json file...`);
        })
        id++;
        res.status(200).json(todoObj);
    });
})

app.listen(3000, () => {
    console.log(`It's listning on port ${3000}`);
});