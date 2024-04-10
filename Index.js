const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'), (err) => {
        if (err) throw err;
    })
});

app.get('/todos', (req, res) => {
    fs.readFile('todo.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const todoData = JSON.parse(data);
        res.json(todoData);
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

app.delete('/todo/:id', (req, res) => {
    const deleteId = parseInt(req.params.id);
    fs.readFile('todo.json', 'utf-8', (err, data) => {
        if (err) throw err;

        const todoData = JSON.parse(data)

        const filterTodos = todoData.filter(todo => todo.id !== deleteId);

        if (filterTodos.length !== todoData.length) {
            fs.writeFile('todo.json', JSON.stringify(filterTodos), (err) => {
                if (err) throw err

                console.log(`Todo with ID ${deleteId} has been deleted.`);
                res.sendStatus(200);
            })
        } else {
            // No todo was deleted
            res.status(404).send("Todo not found");
        }
    });
})

app.listen(3000, () => {
    console.log(`It's listning on port ${3000}`);
});