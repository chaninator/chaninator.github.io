var message = "Hi, I'm Andrew! Come see what I've been up to.";
var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messageLabel = document.getElementById("messageLabel");

window.onresize = function(){ location.reload();

function textFunc() {
   messageLabel.innerHTML = message.substring(0, msgCount);

   if (msgCount == message.length) {
      // Stop Timer
      clearInterval(timer1);

      // Start blinking animation!
      // timer2 = setInterval("blinkFunc()", 200);

   } else {
      msgCount++;
   }
}

// function blinkFunc() {
//
//    // Blink 5 times
//    if (blinkCount < 6) {
//       if(blinkFlg == 0) {
//          messageLabel.innerHTML = message;
//          blinkFlg = 1;
//          blinkCount++;
//       } else {
//          messageLabel.innerHTML = "";
//          blinkFlg = 0;
//       }
//    } else {
//       // Stop Timer
//       clearInterval(timer2);
//    }
// }


timer1 = setInterval("textFunc()", 150); // Every 150 milliseconds


// collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

// hide name until scroll
function hideNavname() {
    if ($(".navbar").offset().top > 300) {
        $(".navname").addClass("top-nav-name-collapse");
        $(".navname").addClass("animated");
        $(".navname").addClass("pulse");
    } else {
        $(".navname").removeClass("top-nav-name-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
$(window).scroll(hideNavname);
$(document).ready(hideNavname);


// page scrolling - jQuery easing
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// closes hamburger menu on click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');

// Get the button that opens the modal
var btn1 = document.getElementById("proj1");
var btn2 = document.getElementById("proj2");
var btn3 = document.getElementById("proj3");
var btn4 = document.getElementById("proj4");
var btn5 = document.getElementById("proj5");
var btn6 = document.getElementById("proj6");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("closeBtn")[0];
var span2 = document.getElementsByClassName("closeBtn")[1];
var span3 = document.getElementsByClassName("closeBtn")[2];
var span4 = document.getElementsByClassName("closeBtn")[3];
var span5 = document.getElementsByClassName("closeBtn")[4];
var span6 = document.getElementsByClassName("closeBtn")[5];


// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
span6.onclick = function() {
    modal6.style.display = "none";
}
