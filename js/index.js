const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;

}
document.querySelector('.calc .eq').addEventListener('click' ,
  () => display.value = eval(display.value) );
//reset
  document.querySelector('.calc .reset') .addEventListener ('click' , function () {
    display.value = '';
    display.classList.remove('not-allowed');
    symbols = 1;
    valueTemp = '';
    valPointData = 0; });
//


