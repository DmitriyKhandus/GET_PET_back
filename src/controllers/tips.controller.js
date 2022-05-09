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

  try {
    const result = await Tip.findAll({ where: speciesId ? { speciesId } : {}, attributes: ['id', 'title', 'image', 'webSite', 'tipText'] });
    return res.status(200).json(result);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = { getAllTips };
