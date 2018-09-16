const PubSub = require('../helpers/pub_sub.js');
const CONSTANTS = require('../helpers/constants.js');

const SelectView = function (container, comp) {
  this.container = container;
  this.comp = comp;
  this.select = null;
}

SelectView.prototype.bindEvents = function () {
  this.generate();
  this.select.addEventListener('change', (event) => {
    const selectedIndex =  event.target.value;
    PubSub.publish(this.comp+'SelectView:change', selectedIndex);
  });
}

SelectView.prototype.generate = function () {

  const selectLabel = document.createElement('label');
  selectLabel.for = "dropdown";
  selectLabel.textContent = "Select publication:  ";
  // add class?
  this.container.appendChild(selectLabel);
  const select = document.createElement('select');
  this.select = select;
  select.id = "dropdown";
  this.container.appendChild(select);
  const option0 = document.createElement('option');
  option0.textContent = "";
  option0.disabled = true;
  option0.selected = true;
  select.appendChild(option0);

  CONSTANTS.PUBS.forEach((pub, index) => {
    const option = document.createElement('option');
    option.textContent = pub;
    option.value = index;
    select.appendChild(option);
  });

};

module.exports = SelectView;
