// fake-backend.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rota para cadastrar um novo usuário
server.post('/signup', (req, res) => {
  const { username, email, password, profilePic } = req.body;

  // Lógica para verificar se o usuário já existe no banco de dados
  const existingUser = router.db.get('users').find({ username }).value();
  if (existingUser) {
    return res.status(409).json({ message: 'Nome de usuário já cadastrado. Tente outro nome de usuário.' });
  }

  // Lógica para verificar se o email já existe no banco de dados
  const existingEmail = router.db.get('users').find({ email }).value();
  if (existingEmail) {
    return res.status(409).json({ message: 'Email já cadastrado. Tente outro email.' });
  }

  // Cadastrar o novo usuário
  const newUser = { username, email, password, profilePic };
  router.db.get('users').push(newUser).write();
  res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Rota para autenticar um usuário
server.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Lógica para verificar a autenticação do usuário
  const user = router.db.get('users').find({ username, password }).value();
  if (user) {
    res.status(200).json({ message: 'Usuário autenticado com sucesso!' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas. Tente novamente.' });
  }
});

server.listen(PORT, () => {
  console.log(`Fake backend rodando na porta ${PORT}`);
});