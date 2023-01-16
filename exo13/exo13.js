const mots=["clou","flou","bijou","genou","trou"];
const exceptionx=["bijou","caillou","genou","hibou","joujou","pou"];
const motPluriel=mots.map(mot=>mot+(exceptionx.includes(mot)?"x":"s"))
console.log(motPluriel);