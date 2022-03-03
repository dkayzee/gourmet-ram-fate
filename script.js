var imgSlider = document.querySelector("#heroSlider");

var imgPosition = 0;

function goLeft() {
  if (imgPosition < 2) {
    imgPosition++;
  }

  var imgPositionVw = imgPosition * 100;

  imgSlider.style.transform = "translateX(-" + imgPositionVw + "vw)";
}

function goRight() {
  if (imgPosition > 0) {
    imgPosition--;
  }

  var imgPositionVw = imgPosition * 100;

  imgSlider.style.transform = "translateX(-" + imgPositionVw + "vw)";
}
