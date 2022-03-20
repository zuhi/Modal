const openButton = document.querySelector('#open-button');
const closeIcon = document.querySelector('#close-icon');

const modalSegment = document.querySelector('.modal-body');

openButton.addEventListener('click',()=>{
    modalSegment.style.display ='flex';

});

closeIcon.addEventListener('click',()=>{
    modalSegment.style.display ='none';

})