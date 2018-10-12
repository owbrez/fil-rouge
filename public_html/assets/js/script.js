
$(document).ready(function(){
    
   $('label.avatar').click (ajouterClasse('connexion label.avatar','checked'));
    $('label.labelAvatarUn').click(function(){playSonCourt('assets/son/avatars/lezard.mp3');});
    $('label.labelAvatarDeux').click(function(){playSonCourt('assets/son/avatars/druide.mp3')});
    $('label.labelAvatarTrois').click(function(){playSonCourt('assets/son/avatars/paladin.mp3')});
    $('label.labelAvatarQuatre').click(function(){playSonCourt('assets/son/avatars/magicien.mp3')});
    playMusiquefond();
});

function ajouterClasse(label,classe){
    $(label).addClass(classe);
}

function playSonCourt(url){
    var audio = new Audio(url);
    audio.volume = 0.2;
    audio.play();
}

function playMusiquefond(){
    var audio = new Audio('assets/son/fond/musique-fond.mp3');
    audio.volume = 0.2;
    audio.play();
    
}