const { Op } = require('sequelize');
const {
  Advertisement, Species, Breed, User, Location, Favorite,
} = require('../../db/models');

const getAllPost = async (req, res) => {
  // if (userName && password && email) {
  try {
    const result = await Advertisement.findAll({
      include: [{ model: Location },
        { model: Species },
        { model: Breed },
        { model: User }],
      raw: true,
    });
    const raw = result.map((el) => ({
      id: el.id,
      description: el.animal_description,
      name: el.animal_name,
      created: el.createdAt,
      image: el.image,
      location: el['Location.location'],
      species: el['Species.species'],
      breed: el['Breed.breed'],
    }));
    console.log(raw);
    return res.json(result);
  } catch (error) {
    return res.sendStatus(500);
  }
  // }
};

const getAll = async (req, res) => {
  const {
    speciesId, limit, location, offset, ageMin, ageMax,
  } = req.query;
  try {
    const result = await Advertisement.findAll({
      include: [{ model: Location, where: location ? { location } : {} },
        { model: Species, where: speciesId ? { id: Number(speciesId) } : {} },
        { model: Breed },
        { model: User }],
      where: ageMin ? { age: { [Op.between]: [ageMin, ageMax] } } : {}, // не проверено
      offset: offset || 0,
      limit: limit || 20,
    });
    let raw = result.map((x) => x.get({ plain: true }));
    console.log(raw);
    raw = result.map((el) => ({
      id: el.id,
      description: el.animal_description,
      name: el.animal_name,
      created: el.createdAt,
      image: el.image,
      location: el.Location.location,
      species: el.Species.species,
      breed: el.Breed.breed,
    }));
    console.log('efkflkefeklremk', raw);
    return res.json(raw);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const addPost = async (req, res) => {
  const {
    animal_name, animal_description, species, breed, price, age, userId, location,
  } = req.body;
  // const { id: speciesId } = await Species.findOne({ where: { species } });
  // const { id: breedId } = await Breed.findOne({ where: { breed } });
  // const { id: locationId } = await Location.findOne({ where: { location } });
  const image = `/img/${req.file.originalname}`;
  console.log(req.body, req.file);
  // if (speciesId && breedId && locationId) {
  //   await Advertisement.create({
  //     animal_name,
  //     animal_description,
  //     image,
  //     price,
  //     age,
  //     userId,
  //     breedId,
  //     speciesId,
  //     locationId,
  //   }, {});
  // }
  res.sendStatus(200);
};

const deletePost = async (req, res) => {

};

module.exports = {
  getAllPost, getAll, addPost, deletePost,
};
