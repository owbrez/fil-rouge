
$(document).ready(function(){
    
   $('label.avatar').click (ajouterClasse('connexion label.avatar','checked'));
});

function ajouterClasse(label,classe){
    $(label).addClass(classe);
}