function contenue_Liste(i,divnb,compnb){
    document.getElementById('affichage_avance').style.visibility = 'visible';
    document.getElementById("affichage_avance").innerHTML = '<button class="bouton_ligne_list" onclick="Fermer_op_avancee()">X</button><button onclick="addLigneListe('+divnb+','+compnb+')">add ligne</button>',
    document.getElementById("affichage_avance").innerHTML = document.getElementById("affichage_avance").innerHTML + adv_op_ligne_liste; // Permet d'affichet la liste des ellements d'une liste ou d'une tableau
    compnb = compnb +1; // Pour avoir l'id du composans
    traitement_ligneliste(i,divnb,compnb);
}

function Fermer_op_avancee(){
    clearInterval(inter);
    document.getElementById('affichage_avance').style.visibility = 'hidden';
    document.getElementById("affichage_avance").innerHTML = '';
}

function traitement_ligneliste(i,divnb,compnb){
    var article = document.getElementById("apercu").innerHTML

    article = article.substring(article.search('<ul id="listdiv'+i));
    article = article.substring(0,article.search('</ul>')+5);
    console.log(article);
    
    while(article.search('<li id="') != -1){
        article = article.substring(article.search('<li id="')+8);
        console.log(article);

        id_ligne = article.substring(0,article.search('"')); // Pour récuperer l'id du la ligne pour identifier la ligne lors de la modification
        console.log(id_ligne);

        // isoler le nom de la lisgne pour l'affichage de la liste
        nom_ligne = article.substring(article.search('">')+2);
        nom_ligne = nom_ligne.substring(0,nom_ligne.search('</li>'));
        console.log(nom_ligne);

        document.getElementById("list_composans").innerHTML = document.getElementById("list_composans").innerHTML + '<button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_ligne_liste('+divnb+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_ligne_liste('+divnb+','+divnb+compnb+')">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+')">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+')">down</button><br id="id_br'+divnb+compnb+'"><p id="trai_'+id_ligne+'">'+nom_ligne+'</p>'

        // list_composans mettre une balsie p ou autre et mettre le nom de la ligne
        // rajouter des bouton pour la modification, supresion, monté ou décendre la ligne
    }
    
}