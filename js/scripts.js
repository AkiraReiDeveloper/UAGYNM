function teacherinfo(id) {
    var lang = document.getElementById("teacher__hide_"+id);

    if (lang.className === "main__teacher__info--hide") {
        lang.className = "main__teacher__info--show";
        console.log(lang.className);
    } else {
        lang.className = "main__teacher__info--hide";
    }
}