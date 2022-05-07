// const axios = require('axios')
// const fetch = require('node-fetch');

const strToArr = (input, params) => {
  const convertedInputForAPI = input.split(',').join('').split('.').join('')
    .split(' ');
  console.log('Finaly arr', convertedInputForAPI);
  let cityStreet = [];
  let homeNum;
  if (params === '%20') {
    convertedInputForAPI.forEach((el) => {
      if (!Number(el)) {
        cityStreet.push(`${params}${el}`);
      } else if (Number(el)) {
        homeNum = el;
      } else {
        console.log('error', el);
      }
    });
  } else {
    input.forEach((el) => {
      cityStreet.push(`${params}${el}`); //  +ул+тверская+4 +1+2+3
    });
  }
  cityStreet = cityStreet.join('');
  return { cityStreet, homeNum };
};

const getAdCoordinates = async (inputs) => { // inputs  объект по форме
  let street = strToArr(inputs.city, '+');// обьект city по name инпуту
  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= this STREET from helpers js ', street);
  console.log('this is  input', inputs);
  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?lang=ru&apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&format=json&geocode=${inputs.city}${street.street}&results=1`,
  ); // Москва,+Тверская+улица,+дом+7;
  let data = await response.json();
  // const data = await axios.get('https://geocode-maps.yandex.ru/1.x/?lang=ru&apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&format=json&geocode=${inputs.city}${street.street}&results=1`);

  // eslint-disable-next-line max-len
  const responseForFromIAPI = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;

  if (!responseForFromIAPI) {
    street = strToArr(inputs.city, '%20');
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=8c60b74a91f924ce61d118ccaafef034&query=${street.homeNum}%20${inputs.city}${street.street}`,
    );
    data = await response.json();
    return {
      coordinates: [data.data[0].latitude, data.data[0].longitude],
    };
  }

  const coordinatesForFromIAPI = responseForFromIAPI.split(' ').map((el) => Number(el)).reverse();
  // coordinatesForFromIAPI: "37.615057 55.757425" =>  [55.757425, 37.615057]
  return {
    coordinates: coordinatesForFromIAPI,
  };
};

module.exports = { getAdCoordinates };
