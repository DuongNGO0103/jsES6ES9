const classes = {
    guerrier: {
        classe: 'war',
        force: 5,
        agilite:3,
        intelligence:2
    },
    archer: {
        classe: 'archer',
        force: 3,
        agilite:5,
        intelligence:3
    },
    mage: {
        classe: 'mage',
        force: 2,
        agilite:3,
        intelligence:5
    },
}

const p1= {
    nom:'Milo',
    age:30,
    ...classes.guerrier
}

const p2={
    nom:'Tya',
    age:22,
    ...classes.archer
}
const p3={
    nom:'Duong',
    age:32,
    ...classes.mage
}
afficherPersonnages(p1,p2,p3);
//nhac lai: persos chinh la rest. la tab chua p1,p2,p3
function afficherPersonnages(...persos){
    console.log("=================================")
    for(let perso of persos){
         console.log(`nom: ${perso.nom}`);
         console.log(`age: ${perso.age}`);
         console.log(`classe: ${perso.classe}`);
         console.log(`force: ${perso.force}`);
         console.log(`agilite: ${perso.agilite}`);
         console.log(`intelligence:${perso.intelligence} `);
         console.log("=================================")
    }}
    
   
  ;
