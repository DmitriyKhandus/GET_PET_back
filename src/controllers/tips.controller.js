const {
  Tip, Species,
} = require('../../db/models');

const getAllTips = async (req, res) => {
  const { species } = req.query;
  let speciesId;
  try {
    const { id } = await Species.findOne({ where: species ? { species } : {} });
    speciesId = id;
  } catch (error) {
    return res.sendStatus(500);
  }
  if (speciesId) {
    try {
      const result = await Tip.findAll({ where: { speciesId }, attributes: ['id', 'title', 'webSite', 'tipText'] });
      res.status(200).json(result);
    } catch (error) {
      return res.sendStatus(500);
    }
  } else res.sendStatus(400);
};

module.exports = { getAllTips };
