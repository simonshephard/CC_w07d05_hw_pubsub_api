const ItemView = function (container, item) {
  this.container = container;
  this.item = item;
}

ItemView.prototype.display = function () {

  const linkUrl = document.createElement('a');
  linkUrl.href = this.item.url;
  linkUrl.target = "_blank";
  this.container.appendChild(linkUrl);

  const title = document.createElement('p');
  title.classList.add("item-title");
  title.textContent = this.item.title;
  linkUrl.appendChild(title);

  const attribution = document.createElement('p');
  attribution.classList.add("item-attribution");
  const formattedTimeStamp = this.formatTimeStamp(this.item.publishedAt);
  attribution.textContent = this.item.source.name + ', ' + this.item.author + ', ' + formattedTimeStamp;
  this.container.appendChild(attribution);

  const description = document.createElement('p');
  description.classList.add("item-description");
  description.textContent = this.item.description;
  this.container.appendChild(description);

  const content = document.createElement('p');
  content.classList.add("item-content");
  content.textContent = this.item.content;
  this.container.appendChild(content);

//if image then
  // const image = document.createElement('img');
  // image.src = this.object.urlToImage;
  // image.alt = "";
  // this.container.appendChild(image);

};

ItemView.prototype.formatTimeStamp = function (dataTimeStamp) {
  // data in format "2018-09-15T16:09:55Z"
  return dataTimeStamp.slice(0,10) + " " + dataTimeStamp.slice(11,16);
};

module.exports = ItemView;
