var lesCartes = [];
var lesCartesSelectionees = [];
var lesJoueurs = [];


/* Pour les Tests, les joueurs sont créés ici */
var joueurUn = [['1','1'],['1','2','3','3','3','3','3']];
var joueurDeux = [['1','1'],['1','2','1','3','4','2','5']];
var joueurTrois = [['1','1'],['1','2','1','3','4','2','5']];
var joueurQuatre = [['1','1'],['1','2','1','3','4','2','5']];


$(document).ready(function(){
    var nbCartes = joueurUn[1].length;
    genererCartes('.zoneJoueurPrincipal .cartes',nbCartes);
    orienterCartes(nbCartes);
    $('.zoneJoueurPrincipal .uneCarte:not(.selectionee)').hover(positionInitialeCarte);
    $('.zoneJoueurPrincipal .uneCarte img').on('click',selectionCarte);
    $('.zoneJoueurPrincipal .uneCarte:not(.selectionee)').mouseleave(positionInitialeCarte);
    $('button.lancerSort').on('click',lancerSort);
});

function genererCartes(joueur,nbCartes){
    var uneCarte = '<div class="uneCarte"><img src="assets/img/ingredients/corne-de-licorne.jpg" alt=""></div>';
    for(var i = 0; i < nbCartes; i++){
        $(joueur).append(uneCarte);
    }
    return lesCartes;
}

function orienterCartes(nbCartes){
    $('.zoneJoueurPrincipal .cartes .uneCarte').each(function(){
        lesCartes.push($(this));
    });
    var degree = Math.round(20 / nbCartes);
    var angleInit = -(nbCartes/2) * degree;
    var origin = 20 * nbCartes;
    for(var i = 0; i < nbCartes ; i++){ 
        $(lesCartes[i]).css("transform","rotate("+angleInit+"deg)");  
        $(lesCartes[i]).css("transform-origin","center 80em");
        $(lesCartes[i]).css("z-index",0); 
        angleInit += degree;
    }
}

function positionInitialeCarte(){
    $(this).css('z-index','0');
}

function selectionCarte()
{
    if(lesCartesSelectionees.length != 2){
        $('button.lancerSort').hide();
        if($(this).hasClass('selectionee')){
            $(this).removeClass('selectionee');
        }else{
            $(this).addClass('selectionee'); 
            lesCartesSelectionees.push($(this));   
            if(lesCartesSelectionees.length === 2){
                $('button.lancerSort').show();
                lesCartesSelectionees = [];                
            }
        }
    }
}

function lancerSort(){
        var destinationTop = $('.portail').css('top');
        var destinationLeft = $('.portail').css('top');
    $('.selectionee').each(function(){
        $(this).css('top',destinationTop);
        $(this).css('position','fixed');
    });
}