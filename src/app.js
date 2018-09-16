const ComponentView = require('./views/component_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('#container');

  const component1 = document.createElement('div');
  component1.classList.add("component");
  container.appendChild(component1);
  const component1View = new ComponentView(component1, "comp1");
  component1View.render();

  const component2 = document.createElement('div');
  component2.classList.add("component");
  container.appendChild(component2);
  const component2View = new ComponentView(component2, "comp2");
  component2View.render();

  const component3 = document.createElement('div');
  component3.classList.add("component");
  container.appendChild(component3);
  const component3View = new ComponentView(component3, "comp3");
  component3View.render();

});
