let bodyNode = document.querySelector(`body`);
let onNode = document.querySelector(`#on`);
let offNode = document.querySelector(`#off`);
onNode.addEventListener(`click`, function(){
    bodyNode.classList.add("dark")
});
offNode.addEventListener(`click`, function(){
    bodyNode.classList.remove("dark")
});
