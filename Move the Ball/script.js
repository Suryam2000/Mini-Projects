var ball = document.querySelector('#ball');

ball.style.position = 'absolute';
ball.style.left = Math.round(Math.random()* (window.innerWidth - 110)) + 'px';
ball.style.top = Math.round(Math.random()* (window.innerHeight - 110)) + 'px';

document.addEventListener('keydown', function(e){
    if(e.keyCode == 87){
        if(parseInt(ball.style.top) - 20 >= 0){
            ball.style.top = parseInt(ball.style.top) - 20 + "px";
        }
        else{
            ball.style.top = 10 + "px";
        }
    }

    if(e.keyCode == 65){
        if(parseInt(ball.style.left) - 20 >= 0){
            ball.style.left = parseInt(ball.style.left) - 20 + "px";
        }
        else{
            ball.style.left = 10 + "px";
        }
    }

    if(e.keyCode == 83){
        if(parseInt(ball.style.top) + 20 <= (window.innerHeight - 110)){
            ball.style.top = parseInt(ball.style.top) + 20 + "px";
        }
        else{
            ball.style.top = (window.innerHeight - 110) + "px";
        }
    }

    if(e.keyCode == 68){
        if(parseInt(ball.style.left) + 20 <= (window.innerWidth - 110)){
            ball.style.left = parseInt(ball.style.left) + 20 + "px";
        }
        else{
            ball.style.left = (window.innerWidth - 110) + "px";
        }
    }
});