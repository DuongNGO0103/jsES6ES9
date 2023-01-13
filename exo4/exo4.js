const V1= {nom:"Paris", lat: 48.8534, long: 2.3488};
const V2= {nom: "Toulous", lat: 46.6043, long: 1.4437};
const V3= {nom: "Lyon", lat: 45.75, long: 4.85};
affichageCoordonne(V1.nom, V1.lat, V1.long);
affichageCoordonne(V2.nom,V2.lat, V2.long);
affichageCoordonne(V3.nom, V3.lat, V3.long);

function affichageCoordonne(nom, lat, long){
    let txt;
    for(let i=0; i<3; i++){
      txt = `------------${nom}---------\n`;  
      txt += `Latitude: ${lat} \n`;
      txt += `Longitude: ${long}\n`;
      
    }
    console.log(txt);
}