const mot="rever";
console.log(isPanlidrome(mot));
function isPanlidrome(mot){
let array=mot.split("");  
let arrayReverse=array.slice().reverse();
for(let i=0;i<array.length;i++){
    if(array[i]!=arrayReverse[i])return false;
}
console.log(array);
console.log(arrayReverse);
return true;
}