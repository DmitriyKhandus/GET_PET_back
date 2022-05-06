const animalType = {
  cat: 'islands#yellowDotIcon',
  dog: 'islands#brownDotIcon',
  other: 'islands#grayDotIcon',
};

const mapHelper = (speciesId) => {
  switch (speciesId) {
    case 1:
      return animalType.cat;
    case 2:
      return animalType.dog;
    default:
      return animalType.other;
  }
};

module.exports = mapHelper;
// готов
