import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors'; // biblioteca que permite que o react e o mongo se conectem

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => {
    console.error("Erro ao conectar no MongoDB", erro)
})
conexao.once('open', () => {
    console.log("Conectado ao MongoDB")
})

app.listen(3000, () => {
    console.log('Servidor conectado')
})
