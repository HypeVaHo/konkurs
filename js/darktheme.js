let bodyNode = document.querySelector(`body`);
let offNode = document.querySelector(`#theme`);

offNode.addEventListener(`click`, function(){
    bodyNode.classList.toggle("light");
    bodyNode.classList.toggle("dark");
});
