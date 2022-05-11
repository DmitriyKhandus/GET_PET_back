const { Op } = require('sequelize');
const { Message } = require('../../db/models');

const getAllMessages = async (req, res) => {
  const senderId = req.session.user.id;
  const { receiverId } = req.query;
  try {
    let result = await Message.findAll({
      where: {
        [Op.or]: [{ senderId, receiverId },
          { senderId: receiverId, receiverId: senderId }],
      },
      attributes: [['messageBody', 'message'], 'createdAt', 'senderId'],
      raw: true,
    });
    if (result.length !== 0) {
      result = result.map((el) => {
        if (el.senderId === req.session.user.id) {
          return { ...el, owner: true };
        }
        return { ...el, owner: false };
      });
    }

    res.send(result);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { getAllMessages };
