var box = document.getElementById('box');



box.addEventListener('mouseover', function(){
    let top = Math.floor(Math.random() * (window.innerHeight - 115));
    let left = Math.floor(Math.random() * (window.innerWidth - 115));
    box.style.position = 'absolute';
    box.style.left = left + "px";
    box.style.top = top + "px";
});