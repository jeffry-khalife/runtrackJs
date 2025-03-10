function bisextile(annee) {
    let result;
    if (annee % 4 == 0 && annee % 100 !=0 ) {
      result = "true";
    } else {
      result = "false";
    }
    return result;
  }
  
  console.log(bisextile(2023));