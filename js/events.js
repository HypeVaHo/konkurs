let hidecontNode = document.querySelector(`.hidecont`);
let hidecont2Node = document.querySelector(`.hidecont-2`);
let hidecont3Node = document.querySelector(`.hidecont-3`);
let hidecont4Node = document.querySelector(`.hidecont-4`);
let hidecont5Node = document.querySelector(`.hidecont-5`);
let hidecont6Node = document.querySelector(`.hidecont-6`);
let hidecont7Node = document.querySelector(`.hidecont-7`);
let hideNode = document.querySelector(`#hide`);

hideNode.addEventListener(`click`, function(){
 hidecontNode.classList.toggle('hidecont');
 hidecont2Node.classList.toggle('hidecont-2');
 hidecont3Node.classList.toggle('hidecont-3');
 hidecont4Node.classList.toggle('hidecont-4');
 hidecont5Node.classList.toggle('hidecont-5');
 hidecont6Node.classList.toggle('hidecont-6');
 hidecont7Node.classList.toggle('hidecont-7');
});