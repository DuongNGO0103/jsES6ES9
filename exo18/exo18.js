let requete = createSelect(
  "livre",
  { champ: "type", valeur: "policier" },
  { champ: "auteur", valeur: "Milo" },
  { champ: "couleur", valeur: "jaune" }
);
console.log(requete);

function createSelect(table, ...conditions) {
  let cond = "";
  //để có thể lấy được indice thì phải dùng entries
  //indice là để bỏ điều kiện: có AND trước indice cuối cùng

  //đã lấy được giá trị
  for (let [indice, condition] of conditions.entries()) {
    cond += `${condition.champ} : ${condition.valeur} `;

    //phải đưa điều kiện nếu indice cuối cùng sẽ ko xuất hiện AND. indice 0 And, indice 1 KO CÓ END
    //conditions.length -1 là indice cuối cùng. 
    if (indice != conditions.length - 1) cond += " AND ";
  }
  
  return `select *from ${table} where ${cond}`;
}
