const args = Object.values(process.argv).slice(2);
const breed = args[0];

const { fetchBreedDescription } = require("./breedFetcher");

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});