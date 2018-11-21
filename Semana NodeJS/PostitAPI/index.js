const express = require('express')
const users = require('./users.js')
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/users', (req, res) => res.send(users));
app.get('/api/users/:id', (req, res) => {
    const foundUser = users.find(user => user.id === parseInt(req.params.id));
    if(!foundUser){
        return res.status(404).send('Deu merda!');
    }
    res.send(foundUser);
});
app.post('/api/users', (req,res) => {
    const newUser = {
        id: users.length + 1,
        nome: req.body.nome,
        email: req.body.email
    }
    users.push(newUser);
    res.send(newUser);
});

app.listen(3000, () => console.log('Escutando na porta 3000') );
