let newArticle = document.createElement('article');
newArticle.setAttribute('id','citation');
newArticle.textContent = 'La vie a beaucoup plus d’imagination que nous' ;
document.body.appendChild(newArticle);

const newButton = document.createElement('button');
newButton.setAttribute('id','button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);

function citation() {
    let element = document.getElementById('citation');
    console.log(element.innerHTML);
}

let button = document.querySelector('button');
button.addEventListener('click',function() {
    console.log(citation());
})

// Alternative sans fonction citation

// let newArticle = document.createElement('article');
// newArticle.setAttribute('id','citation');
// newArticle.textContent = 'La vie a beaucoup plus d’imagination que nous' ;
// document.body.appendChild(newArticle);

// const newButton = document.createElement('button');
// newButton.setAttribute('id','button');
// newButton.textContent = 'Click me!';
// document.body.appendChild(newButton);
// let element = document.getElementById('citation');

// let button = document.querySelector('button');
// button.addEventListener('click',function() {
// console.log(element.innerHTML);
// })
