const express = require('express');
const app = express();

// TODO: Implemente as rotas:
//GET /       → 200, corpo contém "Home"
app.get('/', (req, res) => res.send('Home'));
//GET /sobre  → 200, corpo contém "Sobre"
app.get('/sobre', (req, res) => res.send('Sobre'));
//GET /contato→ 200, corpo contém "Contato"
app.get('/contato', (req, res) => res.send('Contato'));
//GET /rota-inexistente → 404
app.use((req, res) => res.status(404).send('Rota não encontrada'));

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
