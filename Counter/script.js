var countInterval;

function startCounter(){

    var countervalue = parseInt(document.getElementById('countervalue').value);

    if(isNaN(countervalue)){
        alert("Please enter a number.");
        clearInterval(countInterval);
        return;
    }

    if(countervalue < 1 || countervalue > 99999) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var current  = document.querySelectorAll('.current');
    var next = document.querySelectorAll('.next');
    var count = 0;

    resetNumbers(current, next, 5);

    clearInterval(countInterval);

    countInterval = setInterval(function() {
        if(count === countervalue) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(current, next, 4);
        count++;
    }, 1000);

    function resetNumbers(current, next, end) {
        for(var i=0; i<end; ++i) {
            current[i].innerText = 0;
            next[i].innerText = 1;
        }
    }
    
    
    
    function increaseCount(current, next, index) {
        
        let current1 = current[index];
        let next1 = next[index];
        
        if(current1.innerText == 9) {
            increaseCount(current, next, index-1);
        }
        
        next1.classList.add("animate");
        
        setTimeout(function() {
            current1.innerText = next1.innerText;
            next1.classList.remove("animate");
            next1.innerText = parseInt(next1.innerText) + 1;
            if(next1.innerText > 9) {
                next1.innerText = 0;
            }
        }, 500);
    }

}

