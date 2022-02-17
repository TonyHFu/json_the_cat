const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  request(url + breed, (error, response, body) => {
    let desc;
    let err;
    // console.log("body", body);
    // console.log("error", error);
    if (!error && body !== "[]") {
      desc = JSON.parse(body)[0].description;
    } else {
      desc = null;
      err = "Breed not found";
    }
    // console.log(response.statusCode);
    // console.log("body === '[]'", body === "[]");
    // console.log("desc", desc)
    callback(err, desc);
  });
};


// const url = "https://api.thecatapi.com/v1/breeds/search?q=";
//   request(url + breed, (error, response, body) => {
//     if (error) {
//       console.log(error);
//       process.exit();
//     }
//     const data = JSON.parse(body);
//     if (data.length === 0) {
//       console.log("Breed not found");
//       process.exit();
//     }
//     console.log(data[0].description);

module.exports = { fetchBreedDescription };