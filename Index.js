const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const jwt = require('jsonwebtoken');

const secret = 'your_very_strong_and_secret_key';
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
        const payload = { email: 'haseebshaikh@gmail.com' }
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });

        const todoObj = {
            id: id,
            title: req?.body?.title,
            description: req?.body?.description,
            token
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
    const token = req.headers.authorization;
    
    try {
        const decode = jwt.verify(token, secret);
        console.log(decode);

        if (decode) {
            fs.readFile('todo.json', 'utf-8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return res.status(500).send('Internal Server Error');
                }

                const todoData = JSON.parse(data);
                const filteredTodos = todoData.filter(todo => todo.id !== deleteId);

                if (filteredTodos.length !== todoData.length) {
                    fs.writeFile('todo.json', JSON.stringify(filteredTodos), (err) => {
                        if (err) {
                            console.error('Error writing file:', err);
                            return res.status(500).send('Internal Server Error');
                        }

                        console.log(`Todo with ID ${deleteId} has been deleted.`);
                        return res.sendStatus(200);
                    });
                } else {
                    // No todo was deleted
                    return res.status(404).send("Todo not found");
                }
            });
        }
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).send('Unauthorized');
    }
});

app.listen(3000, () => {
    console.log(`It's listning on port ${3000}`);
});