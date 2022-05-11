function B1(){
    document.getElementById("info").innerHTML= linkB1; // Tableau de bord
}

function B2(){
    document.getElementById("info").innerHTML= linkB2; // Article
    // function dans le ficiher index_function.php
    description = description_dbb(1); // Permet de récuperer tout les information des article
    liste_categorie = categorie_dbb(); // Permet de récuperer tout les catégories
    
}

function B3(){
    document.getElementById("info").innerHTML= linkB3; // Media
    
}

function B4(){
    document.getElementById("info").innerHTML= linkB4; // Page
    // function dans le ficiher index_function.php
    description = description_dbb(2); // Permet de récuperer tout les information des pages
    liste_categorie = categorie_dbb(); // Permet de récuperer tout les catégories
}

function B5(){
    document.getElementById("info").innerHTML= linkB5; // Paramètre
}