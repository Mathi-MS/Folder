// add active class 
$(".navbar .nav-item .nav-link").on("click", function () {
  $(".navbar").find(".active").removeClass("active");
  $(this).addClass("active");
});
//navscroll
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 1) {
      $('#navbar').addClass('navbar-scroll');
    } else {
      $('#navbar').removeClass('navbar-scroll');
    }
  });
//mobview navbar hide
$('.navbar-nav>.nav-item>.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
//customcursor

var cursorr = document.querySelector(".cursor")
document.addEventListener("mousemove",(e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursorr.style.top = y +"px ";
  cursorr.style.left = x+"px ";
})
var reviewtop = document.querySelector(".reviewtop-content")
var review = document.querySelector(".review-content")
reviewtop.addEventListener("mouseenter",() => {
  cursorr.style.background="blue"
  cursorr.style.width="100px"
  cursorr.style.height="100px"
  cursorr.textContent="lxhotel"
  cursorr.style.display="flex"
  cursorr.style.justifyContent="center"
  cursorr.style.alignItems="center"
  cursorr.style.color="white"
})
reviewtop.addEventListener("mouseleave",() => {
  cursorr.style.background="red"
  cursorr.style.width="0px"
  cursorr.style.height="0px"
  cursorr.textContent=""
})
review.addEventListener("mouseenter",() => {
  cursorr.style.background="orange"
  cursorr.style.width="100px"
  cursorr.style.height="100px"
  cursorr.textContent="lxhotel"
  cursorr.style.display="flex"
  cursorr.style.justifyContent="center"
  cursorr.style.alignItems="center"
  cursorr.style.color="white"
})
review.addEventListener("mouseleave",() => {
  cursorr.style.background="red"
  cursorr.style.width="0px"
  cursorr.style.height="0px"
  cursorr.textContent=""
})
//year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
//back to top
(function($) { "use strict";
$(document).ready(function(){"use strict";
 var progressPath = document.querySelector('.progress-wrap path');
 var pathLength = progressPath.getTotalLength();
 progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
 progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
var scroll = $(window).scrollTop();
var height = $(document).height() - $(window).height();
var progress = pathLength - (scroll * pathLength / height);
progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function() {
if (jQuery(this).scrollTop() > offset) {
jQuery('.progress-wrap').addClass('active-progress');
} else {
jQuery('.progress-wrap').removeClass('active-progress');
}
});
jQuery('.progress-wrap').on('click', function(event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: 0}, duration);
return false;
})
 });
})(jQuery);
//telegram api

// let text = "Hello World!";
// let encoded = window.btoa(text);
// let decoded = window.atob(encoded);
// console.log("encoded");
// console.log();

const TELEGRAM_BOT_TOKEN =window.atob("") ;//encryt
const TELEGRAM_CHAT_ID =window.atob("");//encryt

var firstnameone = document.getElementById("validationCustom01")
var lastnametwo = document.getElementById("validationCustom02")
var emailthree = document.getElementById("validationCustom03")
var messagefour = document.getElementById("validationCustom04")
var firstnamewrong = document.querySelector(".firstnamewrong")
var lastnamewrong = document.querySelector(".lastnamewrong")
var emailwrong = document.querySelector(".emailwrong")
function nagutech() {
  var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var one= firstnameone.value;
    var two= lastnametwo.value;
    var three= emailthree.value;
    var four= messagefour.value;
    if(emailthree.value.match(mailformat)){
      console.log("ok")
      var message = `New form submission:\nName:${one}\nLastname: ${two}\nEmail: ${three}\nmessage: ${four}`;
      firstnamewrong.textContent=""
      lastnamewrong.textContent=""
      emailwrong.textContent=""
      firstnameone.value=""
      lastnametwo.value=""
      emailthree.value=""
      messagefour.value=""
    }
    
    else{
      console.log("no")
      emailwrong.textContent="Enter Valid Email"
    }
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const data = {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
    };

    // Use the fetch API to make a POST request
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    console.log(one)
    console.log(two)
    console.log(three)

}
