const { Op } = require('sequelize');
const { Message } = require('../../db/models');

const getAllMessages = async (req, res) => {
  const senderId = req.session.user.id;
  const { receiverId } = req.query;
  try {
    const result = await Message.findAll({
      where: {
        [Op.or]: [{ senderId, receiverId },
          { senderId: receiverId, receiverId: senderId }],
      },
    });
    res.send(result);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { getAllMessages };
