var lesCartes = [];
var lesCartesSelectionees = 0;
var lesJoueurs = [];


/* Pour les Tests, les joueurs sont créés ici */
//var lesCartes = ['aile-de-chauve-souris','bave-de-crapaud','corne-de-licorne','lapis-lazuli','mandragore'];
var lesIngredients = [{id:1,nom:"corne de licorne",img:"corne-de-licorne"},{id:2,nom:"aile de chauve souris",img:"aile-de-chauve-souris"},{id:2,nom:"bave de crapaud",img:"bave-de-crapaud"},{id:3,nom:"lapis lazuli",img:"lapis-lazuli"},{id:2,nom:"mandragore",img:"mandragore"}];
var joueurUn = [['1', '1'], ['1', '2', '3', '3', '3', '3', '3', '1', '2', '3', '3', '3', '3', '3', '3']];
var joueurDeux = [['1', '1'], ['1', '2', '1', '3', '4', '2', '5']];
var joueurTrois = [['1', '1'], ['1', '2', '1', '3', '4', '2', '5']];
var joueurQuatre = [['1', '1'], ['1', '2', '1', '3', '4', '2', '5']];


$(document).ready(function () {
    var nbCartes = joueurUn[1].length;
    genererCartes('.zoneJoueurPrincipal .cartes', nbCartes);
    orienterCartes(nbCartes);
    $('.zoneJoueurPrincipal .uneCarte img').on('click', selectionCarte);
    $('button.lancerSort').on('click', lancerSort);
});

function genererCartes(joueur, nbCartes) {
    for (let i = 0; i < nbCartes; i++) {
        let uneCarte = '<div class="uneCarte"><img src="assets/img/ingredients/'+lesIngredients[joueurUn[1][i]].img+'.jpg" alt=""></div>';
        $(joueur).append(uneCarte);
    }
    $('.zoneJoueurPrincipal .overlay .nbCartes span').text($('.zoneJoueurPrincipal .uneCarte').length);
    return lesCartes;
}

function orienterCartes(nbCartes) {
    $('.zoneJoueurPrincipal .cartes .uneCarte').each(function () {
        lesCartes.push($(this));
    });
    translate = 50;
    pas = 50;
    if (nbCartes > 14) {
        pas = (50 - nbCartes);
        translate = (50 - nbCartes);
    }
    for (let i = 1; i < nbCartes; i++) {
        $(lesCartes[i]).css("left", translate + "px");
        translate += pas;
    }
}

function selectionCarte() {
    $('button.lancerSort').hide();
    if ($(this).hasClass('selectionee')) {
        $(this).removeClass('selectionee');
        lesCartesSelectionees = lesCartesSelectionees - 1;
    } else {
        if (lesCartesSelectionees < 2) {
            $(this).addClass('selectionee');
            lesCartesSelectionees = lesCartesSelectionees + 1;
        }
    }
}

function lancerSort() {
    var destinationTop = $('.portail').css('top');
    var destinationLeft = $('.portail').css('top');
    $('.selectionee').each(function () {
        $(this).css('top', destinationTop);
        $(this).css('position', 'fixed');
    });
}