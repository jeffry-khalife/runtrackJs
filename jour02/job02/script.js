let newArticle = document.createElement('article');
newArticle.setAttribute('id','citation');
newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage." ;
document.body.appendChild(newArticle);

const newButton = document.createElement('button');
newButton.setAttribute('id','button');
newButton.textContent = 'Click me';
document.body.appendChild(newButton);


function showhide() {
    let showorhide = document.getElementById('citation');
    if (showorhide.style.display === 'none') {
        showorhide.style.display = 'block';
    } else {
        showorhide.style.display = 'none';
    }
}

let button = document.querySelector('button');
button.addEventListener('click',function() {
    showhide();
})