function jsonValueKey(jsonString, key) {
  const obj = JSON.parse(jsonString);
  
  if (Object.keys(obj).includes(key)) {
    return obj[key];
  } else {
    return undefined; 
  }
}

const jsonString = '{"name": "Laplateforme", "adress": "8 rue hozier" ,"city": "Marseille" , "nb_staff": "11" , "creation": "2019"}';
const key = "city";
console.log(jsonValueKey(jsonString, key)); 
