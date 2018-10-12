var lesCartes = [];
var lesCartesSelectionees = [];
$(document).ready(function(){
    var nbCartes = $('.zoneBas .uneCarte').length;
    $('.zoneBas .uneCarte').each(function(){
        lesCartes.push(this);
    });
    orienterCartes(lesCartes,nbCartes);
    $('.zoneJoueurPrincipal .uneCarte:not(.selectionee)').hover(mettreEnAvantCarte,positionInitialeCarte);
    $('.zoneBas .uneCarte').on('click',selectionCarte);
    $('.zoneBas .uneCarte').mouseenter(mettreEnAvantCarte);
    $('.zoneBas .uneCarte:not(.selectionee)').mouseleave(positionInitialeCarte);
});

function orienterCartes(lesCartes,nbCartes){
    var angle = 180 / nbCartes;
    var angleDepart = -70;
    var origin = 20 *nbCartes;
    for(var i = 0; i< nbCartes; i++){       
        $(lesCartes[i]).css("transform","rotate("+angle+"deg)");  $(lesCartes[i]).css("transform-origin","center "+origin+"em");
        angle += angle;
        }
}

function mettreEnAvantCarte(){
    $(this).css('z-index','30');
}

function positionInitialeCarte(){
    $(this).css('z-index','0');
}

function selectionCarte()
{
    if($(this).hasClass('selectionee')){
        $(this).removeClass('selectionee');
    }else{
        $(this).addClass('selectionee'); 
        lesCartesSelectionees.push($(this));
        console.log('carte selectionée');  
        console.log($(this));       
    }
} 