const newButton = document.createElement('button');
newButton.setAttribute('id','button');
newButton.textContent = 'Click me';
document.body.appendChild(newButton);


let newP = document.createElement('p');
newP.setAttribute('id','compteur');
newP.textContent = 0 ;
document.body.appendChild(newP);
count = 0 ;

function addOne() {
    let element = document.getElementById('compteur');
    count += 1 ;
    element.innerHTML = count;
}

let button = document.querySelector('button');
button.addEventListener('click',function() {
    addOne();
})

