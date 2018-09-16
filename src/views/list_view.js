const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');


const ListView = function (container, comp) {
  this.container = container;
  this.comp = comp;
  this.data = null;
}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe(this.comp+'News:data', (event) => {
    this.data = event.detail;
    this.clearContents();
    this.render();
  })
};

ListView.prototype.render = function () {
  this.data.articles.forEach((newsItem) => {
    const itemCont = document.createElement('div');
    itemCont.classList.add("item-cont");
    this.container.appendChild(itemCont);
    const itemView = new ItemView(itemCont, newsItem);
    itemView.display();
  })
};

ListView.prototype.clearContents = function () {
  while (this.container.firstChild) {
    this.container.removeChild(this.container.firstChild);
  }
};


module.exports = ListView;
