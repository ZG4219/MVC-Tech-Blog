const bcrypt = require('bcrypt');
const { User } = require('../models');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    req.session.userId = user.id;
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  login,
};
