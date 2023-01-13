const villes =[
    ["Paris", 48.8534, 2.3488],
    ["Toulouse", 46.6043, 1.4437],
    ["Lyon",47.75, 4.85]
]
//2. bóc tách biến từ tableau
let[Paris, Toulouse,Lyon]=villes;
//3. hiển thị thông tin từng biến
affichageCoordonnees(Paris);
affichageCoordonnees(Toulouse);
affichageCoordonnees(Lyon);

//1. Hàm hiển thị từng ville
function affichageCoordonnees(ville){
    // tiếp tục bóc tách
    let[nom, latitude, longtitude]=ville;
    let affichage = `
    ----------${nom}-----------
    Latitude: ${latitude}
    Longitude: ${longtitude}
    `
    console.log(affichage);
}