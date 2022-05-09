const axios = require('axios');

const convertInputForAPI = (inputedAddress, params) => {
  const inputArr = inputedAddress.split(',').join('').split('.').join('')
    .split('');
  console.log('inputArr', inputArr); // после проверки удалить?
  const addressTextArr = [];
  let homeNumber;

  inputArr.forEach((el) => {
    if (Number.isNaN(Number(el))) {
      addressTextArr.push(`${el}`);
    } else { homeNumber = Number(el); }
  });

  const addressText = addressTextArr.join('').trim();

  return { addressText: `${`${addressText}${params.toString()}`}`, homeNumber: `${homeNumber}%20` };
};

const getAdCoordinates = async (inputsObject) => {
  const addressForAPI = convertInputForAPI(inputsObject.address, '%20');

  const requestToIAPI = encodeURI(`https://geocode-maps.yandex.ru/1.x/?apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&geocode=${inputsObject.city}${addressForAPI.addressText}${addressForAPI.homeNumber}&results=1`);
  const data = await axios.get(requestToIAPI);
  const responseI = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;

  if (!responseI) {
    const requestToIIAPI = encodeURI(`http://api.positionstack.com/v1/forward?access_key=8c60b74a91f924ce61d118ccaafef034&query=${addressForAPI.homeNumber}%20${inputsObject.city}${addressForAPI.addressText}`);
    const responseII = await axios.get(await axios.get(requestToIIAPI));
    return { coordinates: [responseII.data[0].latitude, responseII.data[0].longitude] };
  }
  const coordinatesForFromIAPI = responseI.split(' ').map((el) => Number(el)).reverse();
  console.log('mapHelperFront', responseI); // после проверки удалить?
  return {
    coordinates: coordinatesForFromIAPI, // coordinate: [массив с 2 числами]
    // coordinatesForFromIAPI: "37.615057 55.757425" =>  [55.757425, 37.615057]
  };
};

module.exports = { getAdCoordinates };
