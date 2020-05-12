var m = document.getElementById("menu-phone-hide");
var b = document.getElementsByClassName("b");
window.onscroll = function() {
  if (this.pageYOffset > 149) {
    bar1.style.display = "block";
    bar1.style.position = "fixed";
    bar1.style.top = "0";
    bar1.style.transition = "all 1s";
  } else {
    bar1.style.display = "";
    bar1.style.position = "";
    bar1.style.top = "";
  }
};

$(document).ready(function() {
  $(".btnhide").click(function() {
    $(".menu-phone-hide").css({ left: "0" });
    $(".popup").css({ display: "block" });
  });
});

$(document).ready(function() {
  $(".popup").click(function() {
    $(".menu-phone-hide").css({ left: "-70%" });
    $(".popup").css({ display: "none" });
  });
});

$(document).ready(function() {
  $(".plusplusa").click(function() {
    var eThis = $(this);
    var myDown = eThis.find(".fa-angle-down").length;
    eThis
      .parent()
      .find(".content-phone-hide")
      .slideToggle();
    if (myDown > 0) {
      eThis.find("i").removeClass("fa-angle-down");
      eThis.find("i").addClass("fa-angle-up");
      eThis.css({ "background-color": "#a2f581" });
    } else {
      eThis.find("i").addClass("fa-angle-down");
      eThis.find("i").removeClass("fa-angle-up");
      eThis.css({ "background-color": "rgb(250, 250, 250)", color: "#086972" });
    }
  });
});

$(document).ready(function() {
  $(".plusplusb").click(function() {
    var eThis = $(this);
    var myDown = eThis.find(".fa-angle-down").length;
    eThis
      .parent()
      .find(".content-cpro")
      .slideToggle();
    if (myDown > 0) {
      eThis.find("i").removeClass("fa-angle-down");
      eThis.find("i").addClass("fa-angle-up");
    } else {
      eThis.find("i").addClass("fa-angle-down");
      eThis.find("i").removeClass("fa-angle-up");
    }
  });
});
