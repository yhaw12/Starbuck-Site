function changeImg(any){
    document.querySelector('#bg-images').src = any;

}

function changeColor(color){
    const circle = document.querySelector('.circle');
    const span = document.querySelector('.spanColor');
    const button = document.querySelector('.btn');

    circle.style.background = color;
    span.style.color = color;
    button.style.background = color;
}