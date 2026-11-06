const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public folder (front-end)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Parse JSON body (for future contact form)
app.use(express.json());

// POST /contact placeholder endpoint
app.post('/contact', (req, res) => {
  console.log('Recebido contato:', req.body);
  // Aqui futuramente você pode enviar e-mail, WhatsApp API, salvar no banco, etc.
  res.status(200).json({ message: 'Mensagem recebida! Entraremos em contato em breve.' });
});

// 404 fallback for API routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
