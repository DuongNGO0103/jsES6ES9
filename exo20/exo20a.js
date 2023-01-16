
const addition=(x,y)=>x+y;
const soustraction=(x,y)=>x-y;
const multiplication=(x,y)=>x*y;
const division=(x,y)=>x/y

const formatage=(maFonction,x,y)=>{
    console.log(`le resultat est ${maFonction(x,y)}`);
}
formatage(division,12,10);