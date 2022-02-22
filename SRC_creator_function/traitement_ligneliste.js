function contenue_Liste(i){
    document.getElementById('affichage_avance').style.visibility = 'visible';
    document.getElementById("affichage_avance").innerHTML = document.getElementById("affichage_avance").innerHTML + adv_op_ligne_liste; // Permet d'affichet la liste des ellements d'une liste ou d'une tableau
    traitement_ligneliste(i);
}

function traitement_ligneliste(i){
    var article = document.getElementById("apercu").innerHTML

    article = article.substring(article.search('<ul id="listdiv'+i));
    article = article.substring(0,article.search('</ul>')+5);
    console.log(article);
    
}