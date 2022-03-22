function B1(){
    document.getElementById("info").innerHTML= linkB1; // Tableau de bord
}

function B2(){
    document.getElementById("info").innerHTML= linkB2; // Article
    description = description_dbb('1');
    liste_categorie = categorie_dbb();
    
}

function B3(){
    document.getElementById("info").innerHTML= linkB3; // Media
    
}

function B4(){
    document.getElementById("info").innerHTML= linkB4; // Page
    description = description_dbb('2');
    liste_categorie = categorie_dbb();
}

function B5(){
    document.getElementById("info").innerHTML= linkB5; // Paramètre
}