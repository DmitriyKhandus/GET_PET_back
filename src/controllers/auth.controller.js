const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const signUp = async (req, res) => {
  const { name, password, email } = req.body;

  if (name && password && email) {
    try {
      const secretPass = await bcrypt.hash(password, Number(process.env.ROUNDS_HASH));
      const newUser = await User.create({
        name,
        password: secretPass,
        email,
      });

      req.session.user = {
        id: newUser.id,
        name: newUser.name,

      };

      return res.json({ id: newUser.id, name: newUser.name });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  const { password, email } = req.body;
  if (password && email) {
    try {
      const currentUser = await User.findOne({ where: { email } }); // а какой email?
      const isValidPassword = await bcrypt.compare(password, currentUser.password);
      if (currentUser && isValidPassword) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };

        return res.json({ id: currentUser.id, name: currentUser.name });
      }
      return res.sendStatus(400);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({ id: user.id, name: user.name });
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
