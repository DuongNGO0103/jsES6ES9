const somme=additionner(1,2,3,4);
console.log("le resultat est: "+somme);

function additionner(chiffre,...nombres){
console.log("chiffre: "+chiffre)
let somme=0;
for(let nombre of nombres){
somme+=nombre;
}
return somme;
}


