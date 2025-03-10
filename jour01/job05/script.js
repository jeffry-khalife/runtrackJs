function afficherJoursSemaines() {
  let joursSemaines = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  for (let jour = 0 ; jour < joursSemaines.length;jour++) {
    console.log(joursSemaines[jour]);
  }
}
console.log(afficherJoursSemaines());