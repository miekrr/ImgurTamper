// ==UserScript==
// @name         Imgur remove recommandations
// @namespace    imgur
// @version      0.1
// @description  Remove recommandation and make images fill the remaining space
// @author       You
// @match        http://imgur.com/*
// @grant        none
// ==/UserScript==


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function removeContainer(className) {
     var div = document.getElementsByClassName(className)[0];

    if (div) {
        div.style.display = "none";
    }
}

function removeContainerById(id) {
     var div = document.getElementById(id);

    if (div) {
        div.style.display = "none";
    }
}

addGlobalStyle("
.post-container {           \
    width: 1000px;          \
    background: #2B2B2B;    \
    border-radius: 5px;     \
}");

removeContainerById("right-content");

removeContainer("right post-unification");

