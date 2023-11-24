"use strict";
let btn = document.querySelectorAll(`.btn`);
let parents = document.querySelectorAll(`.parent`);
btn.forEach((e) => {
    e.addEventListener(`click`, () => {
        if (parents[1].classList.contains(`!hidden`)) {
            parents[1].classList.remove(`!hidden`);
            parents[0].classList.add(`!hidden`);
        }
        else {
            parents[0].classList.remove(`!hidden`);
            parents[1].classList.add(`!hidden`);
        }
    });
});
