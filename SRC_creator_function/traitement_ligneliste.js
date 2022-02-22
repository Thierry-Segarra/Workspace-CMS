function contenue_Liste(i){
    document.getElementById('affichage_avance').style.visibility = 'visible';
    document.getElementById("affichage_avance").innerHTML = adv_op_ligne_liste; // Permet d'affichet la liste des ellements d'une liste ou d'une tableau
    traitement_ligneliste(i);
}

function traitement_ligneliste(i){
    var article = document.getElementById("apercu").innerHTML

    article = article.substring(article.search('<ul id="listdiv'+i));
    article = article.substring(0,article.search('</ul>')+5);
    console.log(article);
    
    if(article.search('<li id="') != 0){
        article = article.substring(article.search('<li id="')+8);
        console.log(article);

        id_ligne = article.substring(0,article.search('">')); // Pour récuperer l'id du la ligne pour identifier la ligne lors de la modification
        console.log(id_ligne);

        // isoler le nom de la lisgne pour l'affichage de la liste
        nom_ligne = article.substring(article.search('">')+2);
        nom_ligne = nom_ligne.substring(0,nom_ligne.search('</li>'));
        console.log(nom_ligne);

        // list_composans mettre une balsie p ou autre et mettre le nom de la ligne
        // rajouter des bouton pour la modification, supresion, monté ou décendre la ligne
    }
    
}