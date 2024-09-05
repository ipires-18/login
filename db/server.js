const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const SECRET_KEY = 'ZXVzb3Vhc2VndXJhbmNh'; 

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Invalid token' });
      req.user = decoded;
      next();
    });
  } else {
    next();
  }
});

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find(u => u.email === email && u.password === password);

  console.log({user})

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    router.db.get('tokens').push({ token }).write();
    res.status(200).json({ message: 'Entrada com sucesso', token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

server.post('/logout', (req, res) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (token) {
    router.db.get('tokens').remove({ token }).write();
    res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(400).json({ message: 'No token provided' });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
