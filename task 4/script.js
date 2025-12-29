const button = document.getElementById('colorButton');


function changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    document.body.style.backgroundColor = randomColor;
}


button.addEventListener('click', changeColor);