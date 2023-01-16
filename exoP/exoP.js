const tab="livre";
console.log(afficherReq(tab,
   {champ:"type", valeur:"policier"}, 
   {champ:"auteur", valeur:"Milo"}
   ));

function afficherReq(tab,...conditions){
   let req = ``;

for(let [indice,condition] of conditions.entries()){
   req += `${condition.champ}: ${condition.valeur}`
 if(indice != conditions.length-1) req += " AND ";  
}
return `select * from ${tab} where ${req}`
}