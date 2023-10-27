// db.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key'; // Replace with your secret key

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for user login
server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find((u) => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.status(401).json({ error: 'Invalid email or password' });
  } else {
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: '1h',
    });
    res.json({ token });
  }
});

// Custom route for user registration
server.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    res.status(400).json({ error: 'Email already in use' });
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      email,
      password: hashedPassword,
    };
    router.db.get('users').push(newUser).write();
    res.json({ message: 'User registered successfully' });
  }
});

server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
