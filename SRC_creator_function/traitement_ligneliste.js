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
    
    while(article.search('<li id="') != -1){
        article = article.substring(article.search('<li id="')+8);

        let id_ligne = article.substring(0,article.search('"')); // Pour récuperer l'id du la ligne pour identifier la ligne lors de la modification
        
        // Pour récuperer le numerot de l'id
        let nbid_ligne = document.getElementById(id_ligne);
        nbid_ligne = nbid_ligne.getAttribute("id");
        nbid_ligne = nbid_ligne.substring(('lignelistdiv').length);


        // isoler le nom de la lisgne pour l'affichage de la liste
        let nom_ligne = article.substring(article.search('">')+2);
        nom_ligne = nom_ligne.substring(0,nom_ligne.search('</li>'));
        

        document.getElementById("list_composans").innerHTML = document.getElementById("list_composans").innerHTML + '<button id="id_op'+nbid_ligne+'" onclick="clearInterval(inter),option_ligne_liste('+nbid_ligne+')">option</button>'+'<button id="id_sup'+nbid_ligne+'" onclick="clearInterval(inter),suprime_ligne_liste('+nbid_ligne+')">suprimer</button><button id="up'+nbid_ligne+'" onclick="ligne_up('+i+','+nbid_ligne+','+compnb+','+divnb+')">up</button><button id="down'+nbid_ligne+'" onclick="down_comp('+nbid_ligne+')">down</button><br id="id_br'+nbid_ligne+'"><p id="trai_'+id_ligne+'">'+nom_ligne+'</p>'

        // list_composans mettre une balsie p ou autre et mettre le nom de la ligne
        // rajouter des bouton pour la modification, supresion, monté ou décendre la ligne
    }
    
}

function ligne_up(i,comp,nbcomp,divnb){
 // i = numero de de la div et du composans
 // comp = numero du composans
 // nbcomp = numero de la list
 // divnb = numero de la div
   // console.log('i : '+i);
   // console.log('comp : '+comp);
   // console.log('nbcomp : '+nbcomp);
   // console.log('divnb : '+divnb);

    let av_ligne = '';
    let ligne_deplacer = '';

    var list = document.getElementById("apercu").innerHTML
    list = list.substring(list.search('<ul id="listdiv'+i));
    list = list.substring(0,list.search('</ul>')+5);
    // contenue avant la ligne à monté
    var avant_ligne = list.substring(list.search('<ul id="listdiv'+i)+('<ul id="listdiv'+i+'">').length);
    avant_ligne = avant_ligne.substring(0,avant_ligne.search('<li id="lignelistdiv'+comp));

    // isoloer la ligne a monté
    var ligne_selec = list.substring(list.search('<li id="lignelistdiv'+comp));
    ligne_selec = ligne_selec.substring(0,ligne_selec.search('</li>')+5);
    
    // contenue apres la ligne à monté
    var apres_ligne = list.substring(list.search(ligne_selec)+ligne_selec.length);
    apres_ligne = apres_ligne.substring(0,apres_ligne.search('</ul>'));
    /*
    console.log('##########');
    console.log('LISTE : '+list);
    console.log('|');
    console.log('AVANT : '+avant_ligne);
    console.log('|');
    console.log('SELECTIONER : '+ligne_selec);
    console.log('|');
    console.log('APRES : '+apres_ligne);
    console.log('##########');
    */

    if(avant_ligne != ''){
        traitement = avant_ligne;
        while(traitement.search('<li id="lignelistdiv')!=-1){
            ligne_deplacer = traitement;
            reste = traitement.substring(traitement.search('</li>')+5);
            av_ligne = av_ligne + traitement.substring(0,traitement.search(reste));
            traitement = traitement.substring(traitement.search('</li>')+5);
            if(traitement == ''){
                document.getElementById('listdiv'+i).innerHTML = av_ligne+ligne_selec+ligne_deplacer+apres_ligne;
                document.getElementById("list_composans").innerHTML = '';
                traitement_ligneliste(i,divnb,nbcomp)
            }
        }
    }


}