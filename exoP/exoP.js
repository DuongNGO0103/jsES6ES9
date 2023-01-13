const perso = {
    nom:"Milo",
    age:31,
 }
 const persoGuerrier={
    ...perso,
    type:"Guerrier",
    force:5
 };
const {nom,age, ...carac}=persoGuerrier;
console.log(carac); 
console.log(nom);