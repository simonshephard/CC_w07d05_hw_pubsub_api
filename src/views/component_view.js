const News = require('../models/news.js');
const ListView = require('./list_view.js');
const ControlsView = require('./controls_view.js');

const ComponentView = function (container, comp) {
  this.container = container;
  this.comp = comp;
  this.data = null;
}

ComponentView.prototype.render = function () {

  const controls = document.createElement('div');
  controls.classList.add("controls");
  this.container.appendChild(controls);
  const controlsView = new ControlsView(controls, this.comp);
  controlsView.render();

  const list = document.createElement('div');
  list.classList.add("list");
  this.container.appendChild(list);
  const listView = new ListView(list, this.comp);
  listView.bindEvents();

  const news = new News(this.comp);
  news.bindEvents();

};


module.exports = ComponentView;
