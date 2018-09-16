const PubSub = require('../helpers/pub_sub.js');
// const CONSTANTS = require('../helpers/constants.js');

const SearchView = function (container, comp) {
  this.container = container;
  this.comp = comp;
  this.form = null;
}

SearchView.prototype.bindEvents = function () {

  this.generate();

  this.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formSubmit =  event.target;
    PubSub.publish(this.comp+'SearchView:submit', formSubmit);
    this.form.reset();
  })

}

SearchView.prototype.generate = function () {

  const form = document.createElement('form');
  this.form = form;
  this.container.appendChild(form);

  const selectLabel = document.createElement('label');
  selectLabel.for = "dropdown";
  selectLabel.textContent = "Search publications:  ";
  this.form.appendChild(selectLabel);
  const select = document.createElement('select');
  select.id = "dropdown";
  this.form.appendChild(select);
  const option0 = document.createElement('option');
  option0.textContent = "My publications";
  option0.value = "MY";
  option0.selected = true;
  select.appendChild(option0);
  const option1 = document.createElement('option');
  option1.textContent = "All publications";
  option1.value = "ALL";
  select.appendChild(option1);

  const searchLabel = document.createElement('label');
  searchLabel.for = "search";
  searchLabel.textContent = "Enter search words:  ";
  this.form.appendChild(searchLabel);
  const search = document.createElement('input');
  search.type = "text";
  search.id = "search";
  this.form.appendChild(search);

  const submit = document.createElement('input');
  submit.type = "submit";
  submit.value = "Search";
  this.form.appendChild(submit);

};

module.exports = SearchView;
