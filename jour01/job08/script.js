function premier(nbre) {
    if (nbre <= 1) return false; 
    for (let i = 2; i < nbre; i++) {
        if (nbre % i === 0) {
            return false; 
        }
    }
    return true; 
}

function sommeNombresPremiers(nb1, nb2) {
    if (premier(nb1) && premier(nb2)) {
        return nb1 + nb2; 
    } else {
        return false; 
    }
}

console.log(sommeNombresPremiers(2, 3)); 