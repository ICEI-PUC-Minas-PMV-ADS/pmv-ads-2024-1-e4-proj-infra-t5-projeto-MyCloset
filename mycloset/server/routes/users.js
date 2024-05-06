const express = require('express');
const router = express.Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');

// Import the picture router
const pictureRouter = require('./picture.route');

// Mount the picture router on '/pictures'
router.use('/pictures', pictureRouter);

// User routes
router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(409).send({ message: 'Email já utilizado' });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro interno no server' });
  }
});

router.get('/', async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Token de autenticação não fornecido' });
  }
  try {
    // Removendo o prefixo 'Bearer ' do token
    const tokenSemPrefixo = token.split(' ')[1];

    // Verificando e decodificando o token
    const decodedToken = jwt.verify(tokenSemPrefixo, 'seu_secreto_do_jwt');

    // Obtendo o userId do token decodificado
    const userId = decodedToken.userId;

    // Buscando usuário no banco de dados pelo userId
    const usuario = await User.findOne({ userId });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Retornando as informações do usuário
    return res.json({
      userId: usuario.userId,
      username: usuario.username,
      email: usuario.email,
    });
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return res.status(401).json({ message: 'Token de autenticação inválido' });
  }
});

module.exports = router;
