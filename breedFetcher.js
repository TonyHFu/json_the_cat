const args = Object.values(process.argv).slice(2);

const request = require("request");

const breed = args[0];
// console.log(breed);

const url = "https://api.thecatapi.com/v1/breeds/search?q=";
request(url + breed, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
    process.exit();
  }
  console.log(data[0].description);

  // console.log(typeof body);
});