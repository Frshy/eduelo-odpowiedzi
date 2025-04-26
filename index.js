// ==UserScript==
// @name         eduelo haki
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  nie trzeba sie uczyc
// @author       Freshy, MajliTech
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
        var answerContent = questionDescription.innerText
        answerContent = answerContent.split("").reverse().join("");
        answerContent = answerContent.split("").map(char =>{
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + 13) % 26) + 65);
            }
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + 13) % 26) + 97);
            }
            return char;
        }).join("");
        answer.innerText=answerContent;
        answer.style.visibility = 'visible'
    }
})

document.addEventListener('keyup', (e) => {
    if (e.code == 'KeyF') {
        let questionDescription = document.querySelector('.quiz-desc-inner-text')
        answer.style.visibility = 'hidden'
    }
})
