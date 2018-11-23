const express = require('express')
const postits = require('./postits.js')
const Joi = require('joi')
const router = express();

router.use(express.json());

router.get('/', (req, res) => res.send(postits));

router.get('/:id', (req, res) => {
    const postit = findPostit(req.params.id)
    if (!postit) {
       return res.status(404).send('Não encontrado!');
    }
    res.send(postit)
});

router.post('/', (req, res) => {
    const id = Math.max(...postits.map(postit => postit.id)) + 1;
    const newPostit = {
        id,
        titulo: req.body.titulo,
        texto: req.body.texto
    }

    validaPostit(req.body);

    postits.push(newPostit);
    res.send(newPostit);
});

router.put('/:id', (req, res) => {
    const postit = findPostit(req.params.id);
    validaPostit(req.body);
    if (!postit) {
        return res.status(404).send('Não encontrado!');
    }


    postit.titulo = req.body.titulo;
    postit.texto = req.body.texto;

    res.send(postit);
});

router.delete('/:id', (req, res) => {
    const postit = findPostit(req.params.id);
    if (!postit) {
        return res.status(404).send('Não encontrado!');
    }
    postits.splice(postits.indexOf(postit), 1);
    res.send(postit);
});

function findPostit(id) {
    return postits.find(postit => postit.id === parseInt(id));
}

function validaPostit(body) {
    const schema = {
        titulo: Joi.string().min(2).required(),
        texto: Joi.string().min(2).required()
    }

    const validation = Joi.validate(body, schema);

    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }
}

router.listen(3000, () => console.log('Escutando na porta 3000'));