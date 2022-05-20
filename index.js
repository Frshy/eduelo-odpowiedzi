// ==UserScript==
// @name         eduelo haki
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  nie trzeba sie uczyc
// @author       You
// @match        *://www.eduelo.pl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eduelo.pl
// ==/UserScript==

let answer;

window.addEventListener('load', () => {
    answer = document.createElement('div')
    answer.id = 'answer'
    answer.style.position = 'fixed'
    answer.style.left = '50%'
    answer.style.top = '50%'
    answer.style.transform = 'translate(-50%, -50%)'
    answer.style.zIndex = '420'
    answer.style.visibility = 'hidden'
    answer.style.padding = '30px 10px'
    answer.style.background = '#fcba03'
    answer.style.borderRadius = '8px'
    document.body.insertBefore(answer, document.body.firstChild);
});

document.addEventListener('keypress', (e) => {
   if (e.code == 'KeyF') {
       let questionDescription = document.querySelector('.quiz-desc-inner-text')
       answer.innerText = questionDescription.innerText
       answer.style.visibility = 'visible'
   }
})

document.addEventListener('keyup', (e) => {
   if (e.code == 'KeyF') {
       let questionDescription = document.querySelector('.quiz-desc-inner-text')
       answer.style.visibility = 'hidden'
   }
})
