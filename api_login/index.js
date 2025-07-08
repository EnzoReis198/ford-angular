const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const USUARIO_FIXO = {
  email: 'admin',
  senha: bcrypt.hashSync('123456', 8), // senha criptografada
  nome: 'Usuário Ford'
};

const SEGREDO = 'chave-secreta-jwt';

app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  console.log('Recebido login:', { email, senha });

  if (!email || !senha) {
    return res.status(400).json({ success: false, message: 'Email e senha são obrigatórios' });
  }

  if (email !== USUARIO_FIXO.email) {
    return res.status(401).json({ success: false, message: 'Usuário não encontrado' });
  }

  const senhaCorreta = bcrypt.compareSync(senha, USUARIO_FIXO.senha);
  if (!senhaCorreta) {
    return res.status(401).json({ success: false, message: 'Senha incorreta' });
  }

  const token = jwt.sign({ email }, SEGREDO, { expiresIn: '1h' });

  return res.json({
    success: true,
    message: 'Login efetuado com sucesso!',
    usuario: {
      nome: USUARIO_FIXO.nome,
      email: USUARIO_FIXO.email
    },
    token
  });
});

app.listen(3000, () => {
  console.log('Servidor API rodando em http://localhost:3000');
});
