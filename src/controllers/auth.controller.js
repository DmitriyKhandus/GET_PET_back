const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const signUp = async (req, res) => {
  const { userName, password, email } = req.body;

  if (userName && password && email) {
    try {
      const secretPass = await bcrypt.hash(password, Number(process.env.ROUNDS_HASH));
      const newUser = await User.create({
        userName,
        password: secretPass,
        email,
      });

      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        
      };

      return res.json({ id: newUser.id, name: newUser.userName });
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
      const currentUser = await User.findOne({ where: { email } });
      const isValidPassword = await bcrypt.compare(password, currentUser.password);
      if (currentUser && isValidPassword) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };

        return res.json({ id: currentUser.id, name: currentUser.userName });
      }
      return res.sendStatus(401);
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
    return res.json({ id: user.id, userName: user.userName });
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
