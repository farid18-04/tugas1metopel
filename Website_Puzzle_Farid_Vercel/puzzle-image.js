'use strict';
function openPuzzleImage(){const dialog=document.querySelector('#puzzle-image-dialog');dialog.showModal();document.querySelector('#close-puzzle-image').focus()}
document.querySelector('#open-puzzle-image').addEventListener('click',openPuzzleImage);
document.querySelector('#open-puzzle-zoom').addEventListener('click',openPuzzleImage);
document.querySelector('#close-puzzle-image').addEventListener('click',()=>document.querySelector('#puzzle-image-dialog').close());
