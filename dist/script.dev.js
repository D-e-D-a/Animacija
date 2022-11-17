"use strict";

var _this = void 0;

/**
 * Animacija texta
 */
var textTag = document.querySelector('.section1 h1');
var text = textTag.textContent;
var splittedText = text.split('');
textTag.innerHTML = '';

for (var i = 0; i < splittedText.length; i++) {
  if (splittedText[i] == " ") {
    splittedText[i] = "&nbsp;";
  }

  textTag.innerHTML += "<span>".concat(splittedText[i], "</span>");
}

;
var spans = textTag.querySelectorAll('span');
var k = 0;
var interval = setInterval(function () {
  var singleSpan = spans[k];
  singleSpan.className = 'fadeMove';
  k++;

  if (k === spans.length) {
    clearInterval(interval);
  }
}, 70);
/**
 * Animacija linije 
 */

var border = document.querySelector('.border-line');
var animationWidth = 0;

window.onscroll = function () {
  if (_this.oldScroll > _this.scrollY) {
    animationWidth -= 1.8;
  } else {
    animationWidth += 1.8;
  }

  if (animationWidth >= 100) {
    animationWidth = 100;
  }

  if (animationWidth <= 0) {
    animationWidth = 0;
  }

  border.style.width = animationWidth + '%';
  _this.oldScroll = _this.scrollY;
  imageAnimation();
};
/**
 * Animacija slika
 */


var imageAnimation = function imageAnimation() {
  var sectionForAnimation = document.querySelector('.section2 .images');
  var sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;
  console.log('screen' + screenPosition);
  console.log('section' + sectionPosition);
  var leftImage = document.querySelector('.slideFromLeft');
  var rightImage = document.querySelector('.slideFromRight');

  if (sectionPosition < screenPosition) {
    leftImage.classList.add('animated');
    rightImage.classList.add('animated');
  } else {
    leftImage.classList.remove('animated');
    rightImage.classList.remove('animated');
  }
};