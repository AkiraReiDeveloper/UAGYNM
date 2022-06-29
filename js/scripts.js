function teacherinfo(id) {
  /*var lang = document.getElementById("teacher__hide_" + id);

  if (lang.className === "main__teacher__info--hide") {
    lang.className = "main__teacher__info--show";
    console.log(lang.className);
  } else {
    lang.className = "main__teacher__info--hide";
  }*/
}

function consejoinfo(id) {
  /*var lang = document.getElementById("consejo__hide_" + id);

  if (lang.className === "container__consejo--info--hide") {
    lang.className = "container__consejo--info--show";
    console.log(lang.className);
  } else {
    lang.className = "container__consejo--info--hide";
  }*/
}

function reveal() {
  var reveals = document.querySelectorAll(".expose");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");

    } /*else {
            reveals[i].classList.remove("active");
        }*/
  }
}

function myNavbar() {
  var x = document.getElementById("menu");
  if (x.className === "navbar--options--list") {
    x.className += " responsive";
  } else {
    x.className = "navbar--options--list";
  }
}

function myNavbarSubList(id) {
  var x = document.getElementById("sub-menu-" + id);
  if (x.className === "navbar--options--sublist") {
    x.className += " responsive";
  } else {
    x.className = "navbar--options--sublist";
  }
}

function myNavbarSubList2(id) {
  var x = document.getElementById("sub-menu2-" + id);
  if (x.className === "navbar--options--sublist--sublist") {
    x.className += " responsive";
  } else {
    x.className = "navbar--options--sublist--sublist";
  }
}

function myDateActive(id) {
  var x = document.getElementById("date-active-" + id);
  if (x.className === "fas fa-angle-down") {
    x.className = "fas fa-angle-up";
  } else {
    x.className = "fas fa-angle-down";
  }
}

function copyTextMail() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText
    ("gastronomia@uas.edu.mx");
}

function copyTextNumber() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText
    ("6699540716");
}

window.addEventListener("scroll", reveal);