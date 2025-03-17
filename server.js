const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/cadastrarCliente', (req, res) => {
    const {email, nome, senha} = req.body;
    
})