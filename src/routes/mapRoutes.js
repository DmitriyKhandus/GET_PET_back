const router = require('express').Router();

// переделать на индекс??
router.route('/map')// яндекс карты
  .get(async (req, res) => {
    const url = 'https://opentripmap-places-v1.p.rapidapi.com/ru/places/radius?radius=5000&lon=37.61556&lat=55.75222';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'd6b7275558msh2576073f0dabaa9p1707d9jsn8f1548485c21',
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        json.features = json.features.map((feat) => ({ ...feat, properties: { balloonContentHeader: feat.properties.name || 'some interesting place' } }));

        res.json({ json });
      })
      .catch((err) => {
        console.error(`error:${err}`);
        res.sendStatus(418);
      });
  });
