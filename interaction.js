var cat_image = document.getElementByID('cat');
var feed_button = document.getElementByID('feed_button')

feed_button.addEventListener("click", feed);
function feed() {
  cat_image.style.width = (cat_image.offsetWidth + 30.0) + 'px';
};
