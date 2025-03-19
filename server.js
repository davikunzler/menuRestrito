const express = require('express');
const cors = require('cors');
const connection = require('./db_config')

const app = express();
app.use(express.json());
app.use(cors());



app.post('/cadastrarCliente', (req, res) => {
    const {email, nome, senha} = req.body;
    
    if(!email || !nome || !senha){
        return res.status(400).send({message: 'Todos campos são obrigatórios!'});
    }

    connection.query('INSERT INTO clientes (email, nome, senha) VALUES (?,?,?)'),
    [email, nome, senha],
    (err, resut) => {
        if (err){
            console.error('Eroo ao cadastrar novo perfil no DB', err);
        }
        res.status(201).send({message: 'Carro cadastrado com sucesso!'})
    }    
})