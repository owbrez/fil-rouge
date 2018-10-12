var lesCartes = [];
var lesCartesSelectionees = [];
$(document).ready(function(){
    var nbCartes = $('.zoneBas .uneCarte').length;
    $('.zoneBas .uneCarte').each(function(){
        lesCartes.push(this);
    });
    orienterCartes(lesCartes,nbCartes);
    $('.zoneBas .uneCarte:not(.selectionee)').hover(mettreEnAvantCarte,positionInitialeCarte);
    $('.zoneBas .uneCarte').on('click',selectionCarte);
    $('.zoneBas .uneCarte').mouseenter(mettreEnAvantCarte);
    $('.zoneBas .uneCarte:not(.selectionee)').mouseleave(positionInitialeCarte);
});

function orienterCartes(lesCartes,nbCartes){
    var demiCercle = 0;
    var degree = 60; 
    var topInit = -80;
    var leftInit = 0;
    for(var i = 0; i< nbCartes; i++){

        degRotate = degree-100;
        $(lesCartes[i]).css("transform","rotate("+degRotate+"deg)");
        $(lesCartes[i]).css("-moz-transform","rotate("+degRotate+"deg)");
        $(lesCartes[i]).css("-webkit-transform","rotate("+degRotate+"deg)");
        $(lesCartes[i]).css("-o-transform","rotate("+degRotate+"deg)");
        rad  = degree/57.2;
        posX = Math.round(leftInit-(Math.cos(rad)*600));
        posY = Math.round(topInit+(Math.sin(rad)*200));
        $(lesCartes[i]).css("left",posX+"px");
        $(lesCartes[i]).css("bottom",posY+"px");
        degree = degree + Math.round(degree/nbCartes);
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