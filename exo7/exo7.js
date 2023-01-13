let randoms=[]
for(let i=0; i<5;i++){
    let aleatoire = Math.floor(Math.random()*2);
    randoms.push(aleatoire);
}

//cho nbPile và nbFace là 0
let nbPile=0;
let nbFace=0;
//valeur là 0 thì tăng Pile lên và ngược lại
for(let valeur of randoms){
if(valeur===0) nbPile++;
else nbFace++;
}
//ra khỏi vòng lặp thì sẽ tính tổng số pile như bình thường
//dấu \ để hủy việc xuống hàng
console.log(`Le nombre de piles est de: ${nbPile}, \
le nombre de face est de: ${nbFace}, \
le nombre de faces représente: ${nbFace/(nbPile+nbFace)}%`)