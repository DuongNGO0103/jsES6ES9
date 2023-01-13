/**
 * main
 */
const prenom= "Mathieu";
prenom="Duong";
//variable age là variable global
let age= 10; 
console.log(age);
age = age+1; 
anniversaire();
console.log(age);

/**
 * function 
 */
function anniversaire(){
     let nombreAnnee= 0; 
    if(age>18){
        //age >18: console.log là 20
        nombreAnnee=20;
    age+=nombreAnnee; 
}else{
    //age<18: console.log sẽ là 0
    age++;
}
console.log(nombreAnnee);

}