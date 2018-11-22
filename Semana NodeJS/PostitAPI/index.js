const express = require('express')
const users = require('./users.js')
const app = express();
const Joi = require('joi')

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/users', (req, res) => res.send(users));
app.get('/api/users/:id', (req, res) => {
    const foundUser = users.find(user => user.id === parseInt(req.params.id));
    if (!foundUser) {
        return res.status(404).send('Deu merda!');
    }
    res.send(foundUser);
});
app.post('/api/users', (req, res) => {
    const schema = {
        nome: Joi.string().min(3).required(),
        email: Joi.string().min(3).required()
    }

    const validation = Joi.validate(req.body, schema);

    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }

    const newUser = {
        id: users.length + 1,
        nome: req.body.nome,
        email: req.body.email
    }
    users.push(newUser);
    res.send(newUser);
});

app.put('/api/users/:id', (req, res) => {
    const foundUser = users.find(user => user.id === parseInt(req.params.id));

    const schema = {
        nome: Joi.string().min(3).required(),
        email: Joi.string().min(3).required()
    }

    const validation = Joi.validate(req.body, schema);

    if (!foundUser) {
        return res.status(404).send('Deu merda!');
    }

    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }


    // if (!req.body.nome || !req.body.email) {
    //     return res.status(400).send('Conteúdo inválido');
    // }

    foundUser.nome = req.body.nome;
    foundUser.email = req.body.email

    res.send(foundUser);

});

app.delete('/api/users/:id', (req, res) => {
    const foundUser = users.find(user => user.id === parseInt(req.params.id));
    if (!foundUser) {
        return res.status(404).send('Não encontrado!');
    }
    users.splice(users.indexOf(foundUser));
    res.send(foundUser);
});

app.listen(3000, () => console.log('Escutando na porta 3000'));
