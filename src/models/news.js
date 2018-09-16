const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const CONSTANTS = require('../helpers/constants.js');

const News = function (comp) {
  this.comp = comp;
  this.data = null;
}

News.prototype.bindEvents = function () {

  // populate initial data
  const initial_index = CONSTANTS.PUBS.indexOf(CONSTANTS.INITIAL[this.comp]);
  this.getData(initial_index);

  PubSub.subscribe(this.comp+'SearchView:submit', (event) => {
    this.getDataSearch(event.detail);
  })
  PubSub.subscribe(this.comp+'SelectView:change', (event) => {
    this.getData(event.detail);
  })
};

News.prototype.getData = function(index) {
  const source = CONSTANTS.PUBS[index];
  const url = 'https://newsapi.org/v2/top-headlines?'+'sources='+source;
  const request = new Request(url);
  const myPromise = request.get()
  myPromise.then((data) => {
    this.data = data;
    console.log(data);
    PubSub.publish(this.comp+'News:data', this.data);
  })
};

News.prototype.getDataSearch = function(eventDetails) {
  const searchTerms = this.getSearchTerms(eventDetails.search.value);
  const sources = this.getSources(searchTerms, eventDetails.dropdown.value);
  const sortBy = this.getSortBy(searchTerms);
  const url = 'https://newsapi.org/v2/everything?'+searchTerms+sources+sortBy;
  console.log('search event triggered - url is ', url);
  const request = new Request(url);
  const myPromise = request.get()
  myPromise.then((data) => {
    this.data = data;
    console.log(data);
    PubSub.publish(this.comp+'News:data', this.data);
  })
};

News.prototype.getSearchTerms = function(searchValue) {
  if (searchValue === "") {
    return "";
  } else {
    return "q=" + searchValue + "&";
  }
};

News.prototype.getSources = function(searchTerms, selectValue) {
  // cannot have no search terms and all sources so need to force here if no search
  if (searchTerms === "" || selectValue === "MY") {
    console.log("sources=" + CONSTANTS.PUBS.join(",") + "&");
    return "sources=" + CONSTANTS.PUBS.join(",") + "&";
  } else {
    return "";
  }
};

News.prototype.getSortBy = function(searchTerms) {
  if (searchTerms === "") {
    return "sortBy=publishedAt";
  } else {
    return "sortBy=relevancy";;
  }
};

module.exports = News;
