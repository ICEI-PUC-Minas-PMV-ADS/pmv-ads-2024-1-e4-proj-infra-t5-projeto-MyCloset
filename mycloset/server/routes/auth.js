const router = require('express').Router();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');

router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: 'Email ou senha inválidos' });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: 'Email ou senha inválidos' });

    const token = user.jwt;
    res.status(200).send({ data: token, message: 'Logado com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro interno do server' });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Senha'),
  });
  return schema.validate(data);
};

module.exports = router;
