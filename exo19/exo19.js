let notes1= [5,10,15,20];
let notes2=[2,4,6];

function additionnerTab(tab1,tab2){
    let taille = tab1.length;
    //nếu tab1 nhỏ hơn tab2, thì taille sẽ thành length của tab2
    if(tab1.length<tab2.length)taille=tab2.length;
    let newTab=[];
    for(let i=0; i<taille; i++){
    let valeur = (tab1[i])?tab1[i]:0;
    valeur += (tab2[i])?tab2[i]:0;
    newTab.push(valeur);
    }
    return newTab;
}
const notes4=additionnerTab(notes1,notes2);
console.log(notes4);

