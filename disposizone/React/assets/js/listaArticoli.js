'use strict'

window.addEventListener("load", () => {
    var template = document.getElementById("article-template");
    var articles = document.getElementById("articles");

    for(var i = 1; i < 5; i++){
        var cloned = template.cloneNode(true);
        cloned.removeAttribute("id");
        var h2 = cloned.getElementsByClassName("h2-title-article")[0];
        h2.innerHTML = h2.textContent + ' ' + i;

        articles.appendChild(cloned);
    }

});