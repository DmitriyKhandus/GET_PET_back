const { Op } = require('sequelize');
const {
  Advertisement, Species, Image, User, Favorite,
} = require('../../db/models');
const { CustomError } = require('../error/errors');
const { getAdCoordinates } = require('../helpers/mapHelperBack');

const getAllAds = async (req, res) => {
  const {
    species, limit, offset, ageMin, ageMax,
  } = req.query;
  try {
    const result = await Advertisement.findAll({
      include: [
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
        price: el.price,
        phoneNumber: el.phoneNumber,
        city: el.city,
        address: el.address,
        created: el.createdAt,
      };
    });
    return res.json(raw);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const addAd = async (req, res) => {
  const {
    title, animalDescription, species, breed, price, age, city, address,
  } = req.body;

  const coordinatesInObject = await getAdCoordinates({ city, address });
  const { id: speciesId } = await Species.findOne({ where: { species } });

  if (speciesId) {
    const newAd = await Advertisement.create({
      userId: req.session.user.id,
      title,
      animalDescription,
      age,
      speciesId,
      breed,
      price,
      city,
      address,
      latitude: coordinatesInObject.coordinates[0],
      longitude: coordinatesInObject.coordinates[1],
    }, {});

    const images = req.files.map((el) => ({ advertisementId: newAd.id, image: el.path.slice(6) }));
    for (let i = 0; i < images.length; i += 1) { await Image.create(images[i], {}); }

    res.json(newAd);
    res.sendStatus(200);
  } else res.sendStatus(400);
};

const deleteAd = async (req, res) => {
  const { id: adId } = req.params;
  const usrId = req.session.user.id;
  try {
    const { userId } = await Advertisement.findOne({ where: { id: Number(adId) } });
    if (usrId !== Number(userId)) {
      return res.sendStatus(403);
    }
    await Advertisement.destroy({ where: { id: Number(adId) } });
    await Image.destroy({ where: { id: Number(adId) } });
    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
};

const editAd = async (req, res, next) => {
  const { id: adId } = req.params;
  const usrId = req.session.user.id;
  try {
    const { userId } = await Advertisement.findOne({ where: { id: Number(adId) } });
    if (usrId !== Number(userId)) {
      return next(CustomError.forbiddenError('Нет прав доступа к объявлению'));
    }
    let updatedFields = Object.entries(req.body).filter((el) => el[1]);
    if (updatedFields.length) {
      updatedFields = Object.fromEntries(updatedFields);
      const [, updatedUser] = await Advertisement.update(updatedFields, {
        where: { id: adId },
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
    // const { speciesId, limit, offset, } = req.query;
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
        }],
      },

    });
    // console.log('getAllFavourites joined result', result);
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
        city: el.city,
        address: el.address,
        latitude: el.latitude,
        longitude: el.longitude,
      };
    });

    return res.json(result);
  } catch (error) {
    // console.log('getAllFavourites error', error);
    return res.sendStatus(500);
  }
};

const getAd = async (req, res) => {
  const { id: adId } = req.params;
  try {
    const result = await Advertisement.findAll({
      include: [
        { model: Species },
        { model: User },
        { model: Image, attributes: ['image'] }],
      where: { id: adId },
      // group: ['advertisementId'],

    });
    let raw = result.map((x) => x.get({ plain: true }));
    [raw] = result.map((el) => {
      const images = el.Images.map((elem) => elem.image);
      return ({
        id: el.id,
        title: el.title,
        animalDescription: el.animalDescription,
        age: el.age,
        images,
        species: el.Species.species,
        breed: el.breed,
        price: el.price,
        phoneNumber: el.phoneNumber,
        city: el.city,
        address: el.address,
        latitude: el.latitude,
        longitude: el.longitude,
        created: el.createdAt,
      });
    });
    // console.log('getAd raw', raw);
    return res.json(raw);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  getAllAds,
  addAd,
  deleteAd,
  getAllFavourites,
  addToFavourites,
  deleteFromFavourites,
  editAd,
  getAd,
};
