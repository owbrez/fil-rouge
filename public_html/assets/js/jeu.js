$(document).ready(function(){
    var nbCartes = $('.zoneBas .uneCarte').length;
    var lesCartes = [];
    $('.zoneBas .uneCarte').each(function(){
        lesCartes.push(this);
    });
    orienterCartes(lesCartes,nbCartes);
});

function orienterCartes(lesCartes,nbCartes){
    var compteur = 180/(nbCartes + 2);
    var angle = -90 + compteur;
    var translateX = 0;
    for(var i = 0; i< nbCartes; i++){
        $(lesCartes[i]).css({"transform":"rotate(" + angle + "deg"});
        console.log(angle);
        angle += compteur;
        angle += translateX;
    }
}