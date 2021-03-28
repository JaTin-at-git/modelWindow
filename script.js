'use strict';

let showModelBtn = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');

for (var i = 0; i < showModelBtn.length; i++) {
  showModelBtn[i].addEventListener('click', function() {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
}

[closeModal, overlay].forEach(item => {
  item.addEventListener('click', function() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  });
});

document.querySelector("body").addEventListener("keydown",function(e){
  if(e.key=="Escape" && !modal.classList.contains('hidden')){
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  }
})