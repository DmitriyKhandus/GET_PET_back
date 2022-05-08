const { Op } = require('sequelize');
const {
  Advertisement, Species, Image, User, Location, Favorite,
} = require('../../db/models');
const { CustomError } = require('../error/errors');

const getAll = async (req, res) => {
  const {
    species, limit, location, offset, ageMin, ageMax,
  } = req.query;
  try {
    const result = await Advertisement.findAll({
      include: [{ model: Location, where: location ? { location } : {} },
        { model: Species, where: species ? { species } : {} },
        { model: User },
        { model: Image, attributes: ['image'] }],
      where: ageMin ? { age: { [Op.between]: [ageMin, ageMax] } } : {}, // не проверено
      offset: offset || 0,
      limit: limit || 20,
    });
    let raw = result.map((x) => x.get({ plain: true }));
    raw = result.map((el) => {
      const images = el.Images.map((elem) => elem.image);
      return {
        id: el.id,
        title: el.title,
        animalDescription: el.animalDescription,
        age: el.age,
        images,
        species: el.Species.species,
        breed: el.breed,
        price: el.price, // userId??
        phoneNumber: el.phoneNumber,
        location: el.Location.location,
        created: el.createdAt,
      };
    });
    return res.json(raw);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const addPost = async (req, res) => {
  const {
    title, animalDescription, species, breed, price, age, location,
  } = req.body;
  const { id: speciesId } = await Species.findOne({ where: { species } });
  const { id: locationId } = await Location.findOne({ where: { location } });
  if (speciesId && locationId) {
    const result = await Advertisement.create({
      userId: req.session.user.id,
      title,
      animalDescription,
      age,
      speciesId,
      breed,
      price,
      locationId,
    }, {});
    const images = req.files.map((el) => ({ advertisementId: result.id, image: el.path.slice(6) }));
    for (let i = 0; i < images.length; i += 1) {
      await Image.create(images[i], {});
    }
    res.sendStatus(200);
  } else res.sendStatus(400);
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;
  const usrId = req.session.user.id;
  try {
    const { userId } = await Advertisement.findOne({ where: { id: Number(postId) } });
    if (usrId !== Number(userId)) {
      return res.sendStatus(403);
    }
    await Advertisement.destroy({ where: { id: Number(postId) } });
    await Image.destroy({ where: { id: Number(postId) } });
    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
};

const editPost = async (req, res, next) => {
  const { id: postId } = req.params;
  const usrId = req.session.user.id;
  try {
    const { userId } = await Advertisement.findOne({ where: { id: Number(postId) } });
    if (usrId !== Number(userId)) {
      return next(CustomError.forbiddenError('Нет прав доступа к объявлению'));
    }
    let updatedFields = Object.entries(req.body).filter((el) => el[1]);
    if (updatedFields.length) {
      updatedFields = Object.fromEntries(updatedFields);
      const [, updatedUser] = await Advertisement.update(updatedFields, {
        where: { id: postId },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    }
  } catch (error) {
    return res.sendStatus(500);
  }
  return res.sendStatus(501);
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

const deleteFromFavourites = async (req, res) => {
  try {
    await Favorite.destroy(
      { where: { userId: req.session.user.id, advertisementId: Number(req.params.id) } },
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
    let result = await User.findAll({
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
          attributes: ['city'],
          model: Location,
        }],
      },

    });
    console.log(result);
    result = result[0].Advertisements.map((el) => {
      const images = el.Images.map((elem) => elem.image);
      return {
        id: el.id,
        title: el.title,
        animalDescription: el.animalDescription,
        age: el.age,
        images,
        species: el.Species.species,
        breed: el.breed,
        price: el.price,
        phoneNumber: el.phoneNumber,
        city: el.Location.city,
        address: el.Location.address,
      };
    });

    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

const getOnePost = async (req, res) => {
  const { id: postId } = req.params;
  try {
    const result = await Advertisement.findAll({
      include: [{ model: Location },
        { model: Species },
        { model: User },
        { model: Image, attributes: ['image'] }],
      where: { id: postId },
      // group: ['advertisementId'],

    });
    let raw = result.map((x) => x.get({ plain: true }));
    [raw] = result.map((el) => {
      const images = el.Images.map((elem) => elem.image);
      return ({
        id: el.id,
        title: el.title,
        description: el.animalDescription,
        age: el.age,
        images,
        species: el.Species.species,
        breed: el.breed,
        price: el.price,
        phoneNumber: el.phoneNumber,
        city: el.city,
        address: el.Location.address,
        created: el.createdAt,
      });
    });
    // return res.json(raw);
    console.log(raw);
    return res.json(raw);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  // getAllPost,
  getAll,
  addPost,
  deletePost,
  getAllFavourites,
  addToFavourites,
  deleteFromFavourites,
  editPost,
  getOnePost,
};
