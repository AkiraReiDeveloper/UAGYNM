function teacherinfo(id) {
    var lang = document.getElementById("teacher__hide_" + id);

    if (lang.className === "main__teacher__info--hide") {
        lang.className = "main__teacher__info--show";
        console.log(lang.className);
    } else {
        lang.className = "main__teacher__info--hide";
    }
}

function consejoinfo(id) {
    var lang = document.getElementById("consejo__hide_" + id);

    if (lang.className === "container__consejo--info--hide") {
        lang.className = "container__consejo--info--show";
        console.log(lang.className);
    } else {
        lang.className = "container__consejo--info--hide";
    }
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

window.addEventListener("scroll", reveal);