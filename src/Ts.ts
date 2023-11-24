let btn = document.querySelectorAll(`.btn`) as NodeListOf<HTMLDivElement>;
let parents = document.querySelectorAll(`.parent`) as NodeListOf<HTMLDivElement>;
btn.forEach((e) => {
  e.addEventListener(`click`, () => {
    console.log(1);
    if (parents[1].classList.contains(`!hidden`)) {
      parents[1].classList.remove(`!hidden`);
      parents[0].classList.add(`!hidden`);
    } else {
      parents[0].classList.remove(`!hidden`);
      parents[1].classList.add(`!hidden`);
    }
  });
});
