const notes=[5,10,15,20];
for(let [indice,valeur] of notes.entries()){
    if(valeur % 2===0){
    console.log(`Note numéro ${indice}:${valeur}`)
};
}