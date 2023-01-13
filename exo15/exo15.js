
afficherTabMul(5);
console.log("*******************")
afficherTabMul(5,7);
console.log("*******************")
afficherTabMul(5,9,7);
function afficherTabMul(a,debut=1,fin=9){
    //tránh trường hợp fin<debut
if(debut>fin){
    let tmp= debut;
    debut=fin;
    fin=tmp;
}    
    for(let i=debut;i<fin;i++){
        console.log(`${i}*${a}=${a*i}`);
    }

}