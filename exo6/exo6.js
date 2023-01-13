const tab =[5,10, 15,20];
//Template String:
console.log(`La moyenne est de ${calculMoyenne(tab)}`);
function calculMoyenne(tab){
    let resultat=0;
    for(let valeur of tab){
        resultat+=valeur;
    }
    resultat /=tab.length;
    return resultat;
}