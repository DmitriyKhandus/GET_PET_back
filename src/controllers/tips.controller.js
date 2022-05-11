const {
  Tip, Species,
} = require('../../db/models');

const getAllTips = async (req, res) => {
  const { species } = req.query;
  if (species) {
    try {
      const { id } = await Species.findOne({ where: { species } });
      if (id) {
        const result = await Tip.findAll({ where: { speciesId: id }, attributes: ['title', 'tipText', 'webSite', 'image', 'speciesId'] });
        return res.status(200).json(result);
      }
    } catch (error) {
      console.log();
      return res.sendStatus(500);
    }
  } else {
    try {
      const result = await Tip.findAll({ attributes: ['title', 'tipText', 'webSite', 'image', 'speciesId'] });
      return res.status(200).json(result);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.status(400).json([]);
};

module.exports = { getAllTips };
