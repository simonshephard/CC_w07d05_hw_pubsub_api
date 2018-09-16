const SearchView = require('./search_view.js');
const SelectView = require('./select_view.js');

const ControlsView = function (container, comp) {
  this.container = container;
  this.comp = comp;
}

ControlsView.prototype.render = function () {

  const searchCont = document.createElement('div');
  searchCont.classList.add("search-cont");
  this.container.appendChild(searchCont);
  const searchView = new SearchView(searchCont, this.comp);
  searchView.bindEvents();

  const selectCont = document.createElement('div');
  selectCont.classList.add("select-cont");
  this.container.appendChild(selectCont);
  const selectView = new SelectView(selectCont, this.comp);
  selectView.bindEvents();

};


module.exports = ControlsView;
