const express = require('express');
const app = express();

// TODO: Implemente as rotas:
GET /       → 200, corpo contém "Home"
GET /sobre  → 200, corpo contém "Sobre"
GET /contato→ 200, corpo contém "Contato"
// Rotas não mapeadas → 404 automático do Express

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
