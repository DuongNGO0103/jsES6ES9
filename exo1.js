//sử dụng let để có thể tương thích với js moderne
let p1=10; 
let p2; 
let p3;
let somme; 
let moyenne = calculMoyenne();
console.log("P1 " + p1 + "P2: " + p2 +"P3: "+ p3);
console.log("La somme est de " + somme);
console.log("la Moynne est de "+ moyenne);


 function calculMoyenne(){
    p1= p1+10; 
    p2=6; 
    p3=3;
    somme=p1+p2+p3;
    //resultat là ko đổi vì biến là const
    const resultat = somme/3;
    return resultat;
 }