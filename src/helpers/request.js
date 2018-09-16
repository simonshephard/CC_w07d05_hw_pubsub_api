const CONSTANTS = require('./constants.js');

const Request = function (url) {
  this.url = url
}

Request.prototype.get = function () {
  const myPromise = fetch(this.url, {
    method: "GET",
    headers: {
      "X-API-Key": CONSTANTS.API_KEY
    }
  })
  return myPromise.then(response => response.json());
};

module.exports = Request;
