
function pile(nb){
    console.log(`vous avez obtenu un pile+ ${nb}`)
}
function face(nb){
    console.log(`vous avez obtenu un face + ${nb}`);
}
//nếu giả sử sau này muốn thay đổi một hàm khác như
function pile2(nb){
    console.log("*********************")
    console.log("vous avez obtenu une face"+nb);
}
function pileOuFace(ok,ko){
    //ok và ko chính là function de rappel!le 
    let random=Math.floor(Math.random()*2);
    //nếu 1 sẽ khởi động hàm ok lên
    if(random===1)ok(random);
    //nếu 0 sẽ ko 
    else ko(random);
}
//tôi chỉ ra rằng hai fonctions trong rappel của function phía trên chính là pile và face
pileOuFace(pile,face);
//có thể thay rất dễ dàng
pileOuFace(pile2,face)