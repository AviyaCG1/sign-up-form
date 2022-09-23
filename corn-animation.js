const cornAnimationButton = document.querySelector('#corn-animation');
const corn = document.querySelector('#corn');

cornAnimationButton.addEventListener('click', cornJump);

function cornJump(){
    if (corn.width == '0'){
        const left = random();
        const top = random();

        corn.style.left = `${left}vw`;
        corn.style.top = `${top}vh`;
        corn.width = '100';
    } else{
        corn.width = '0';
    }
}

function random(){// return a number between 10-90
    return 10 + Math.random() * 80;
}