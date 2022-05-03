const { Op } = require('sequelize');
const {
  Advertisement, Species, Image, User, Location, Favorite,
} = require('../../db/models');

const getAllPost = async (req, res) => {
  // if (userName && password && email) {
  try {
    const result = await Advertisement.findAll({
      include: [{ model: Location },
        { model: Species },
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
        { model: User }],
      where: ageMin ? { age: { [Op.between]: [ageMin, ageMax] } } : {}, // не проверено
      offset: offset || 0,
      limit: limit || 20,
    });
    let raw = result.map((x) => x.get({ plain: true }));
    raw = result.map((el) => ({
      id: el.id,
      description: el.animal_description,
      name: el.animal_name,
      created: el.createdAt,
      image: el.image,
      location: el.Location.location,
      species: el.Species.species,
      breed: el.breed,
    }));
    return res.json(raw);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const addPost = async (req, res) => {
  const {
    animal_name, animal_description, species, breed, price, age, userId, location,
  } = req.body;
  const { id: speciesId } = await Species.findOne({ where: { species } });
  const { id: locationId } = await Location.findOne({ where: { location } });
  // const image = `/img/${req.file.originalname}`;
  if (speciesId && locationId) {
    const result = await Advertisement.create({
      animal_name,
      animal_description,
      price,
      age,
      userId, // исправить когда будет фронт
      breed,
      speciesId,
      locationId,
    }, {});
    const images = req.files.map((el) => ({ advertisementId: result.id, image: el.path.slice(6) }));
    for (let i = 0; i < images.length; i++) {
      await Image.create(images[i], {});
    }
    res.sendStatus(200);
  } else res.sendStatus(400);
};

const deletePost = async (req, res) => {
  const { postId, usrId } = req.query;
  try {
    const { userId } = await Advertisement.findOne({ where: { id: Number(postId) } });
    if (Number(usrId) !== userId) {
      return res.sendStatus(403);
    }
    await Advertisement.destroy({ where: { id: Number(postId) } });
    await Image.destroy({ where: { id: Number(postId) } });
    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
};

const addToFavourites = async (req, res) => {
  try {
    await Favorite.create(
      { userId: req.session.user.id, advertisementId: Number(req.params.id) },
      {},
    );
  } catch (err) {
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
};

const getAllFavourites = async (req, res) => {
  try {
    const {
      speciesId, limit, location, offset,
    } = req.query;

    let result = await User.findOne({
      attributes: ['id'],
      where: {
        id: req.session.user.id,
      },
      include: {
        model: Advertisement,
        group: ['advertisementId'],
        include: [{
          attributes: ['image'],
          model: Image,
        }, {
          attributes: ['species'],
          model: Species,
        }, {
          attributes: ['location'],
          model: Location,
        }],
      },

    });
    result = result.Advertisements.map((el) => ({
      id: el.id,
      animal_description: el.animal_description,
      animal_name: el.animal_name,
      breed: el.breed,
      price: el.price,
      age: el.age,
      images: el.Images,
      street: el.street,
      species: el.Species.species,
      location: el.Location.location,
    }));

    return res.json(result);
  } catch (err) {
    return res.sendStatus(500);
  }
};

module.exports = {
  getAllPost, getAll, addPost, deletePost, getAllFavourites, addToFavourites,
};
