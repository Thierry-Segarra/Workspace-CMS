function affiche_structure(){
    document.getElementById('structure').innerHTML = '<button onclick="enregistrer()">Enregistrer</button><button onclick="quitter()">Quitter</button><h1>Structure</h1><button onclick="adddiv()">div</button>';
    
    // div = numero de la div
    // compo = numero de la composant
    // [0] = pour savoire le nom du composans
    //console.log(tablediv.length)
    for(let d=0;d < tablediv.length;d++){
        let table = tablediv[d]; // récupère la valeur d dans tablediv
        let tablecomp = tablediv[table] // via la valeur de table transferer les donnée de table de tablediv  dans tablecomp
        let divnb = table.substring(4);
        document.getElementById('structure').innerHTML = document.getElementById('structure').innerHTML + '<p>DIV '+divnb+'</p><div id="div'+divnb+'"><button onclick="menu_add_fermer('+divnb+','+tablecomp+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="addVideoDiv('+divnb+')">video</button><button onclick="addListeDiv('+divnb+')">liste</button><button onclick="addMapDiv('+divnb+')">map</button><button onclick="addHtmlDiv('+divnb+')">HTML</button><button onclick="addRssDiv('+divnb+')">RSS</button><br><button onclick="option_element('+divnb+',`DIV`,`idiv`)">option</button><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button></div>'
        // pour parcourir les different composans dans une div
        boucle_composans(divnb)
    };
}

function menu_add_fermer(divnb){
    document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_ouvert('+divnb+')">↑</button>'
}
function menu_add_ouvert(divnb){
    let divnb2 = divnb
    //document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_fermer('+divnb+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="addVideoDiv('+divnb+')">video</button><button onclick="addListeDiv('+divnb+')">liste</button><button onclick="addMapDiv('+divnb+')">map</button><button onclick="addHtmlDiv('+divnb+')">HTML</button><button onclick="addRssDiv('+divnb+')">RSS</button><br><button onclick="option_element('+divnb+',`DIV`,`idiv`)">option</button><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button><div id="comp'+divnb+'"></div>'
    
    if(document.querySelector('article')){
        document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_fermer('+divnb+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="addVideoDiv('+divnb+')">video</button><button onclick="addListeDiv('+divnb+')">liste</button><button onclick="addMapDiv('+divnb+')">map</button><button onclick="addHtmlDiv('+divnb+')">HTML</button><button onclick="addRssDiv('+divnb+')">RSS</button><br><button onclick="option_element('+divnb+',`DIV`,`idiv`)">option</button><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button><div id="comp'+divnb+'"></div>'
    }else if(document.querySelector('page')){
        document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_fermer('+divnb+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="addVideoDiv('+divnb+')">video</button><button onclick="addListeDiv('+divnb+')">liste</button><button onclick="addMapDiv('+divnb+')">map</button><button onclick="addHtmlDiv('+divnb+')">HTML</button><button onclick="addRssDiv('+divnb+')">RSS</button><button onclick="addArticleDiv('+divnb+')">Liste Article</button><br><button onclick="option_element('+divnb+',`DIV`,`idiv`)">option</button><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button><div id="comp'+divnb+'"></div>'
    }
    


    boucle_composans(divnb2)
}

function boucle_composans(divnb){
    let tablecomp = tablediv["idiv"+divnb]
    if(tablecomp.length != []){
        if(document.querySelector('article')){
            document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_fermer('+divnb+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="addVideoDiv('+divnb+')">video</button><button onclick="addListeDiv('+divnb+')">liste</button><button onclick="addMapDiv('+divnb+')">map</button><button onclick="addHtmlDiv('+divnb+')">HTML</button><button onclick="addRssDiv('+divnb+')">RSS</button><br><button onclick="option_element('+divnb+',`DIV`,`idiv`)">option</button><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button><div id="comp'+divnb+'"></div>'
        }else if(document.querySelector('page')){
            document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_fermer('+divnb+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="addVideoDiv('+divnb+')">video</button><button onclick="addListeDiv('+divnb+')">liste</button><button onclick="addMapDiv('+divnb+')">map</button><button onclick="addHtmlDiv('+divnb+')">HTML</button><button onclick="addRssDiv('+divnb+')">RSS</button><button onclick="addArticleDiv('+divnb+')">Liste Article</button><br><button onclick="option_element('+divnb+',`DIV`,`idiv`)">option</button><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button><div id="comp'+divnb+'"></div>'
        }
        for(let c=0;c < tablecomp.length;c++){
            var nbligne = 0;
            let table2 = tablecomp[c]; // récuperer un par un
            let nom = tablecomp[table2] // récuperer le nom du composans
            
            //console.log(c,table2,nom)

            // divnb = numero de la div
            // table2 = nom du composans ex div1comp1
            // compnb = numero du composans

            //console.log(table2.substring(3,table2.search('comp'))); // Pour récuperer le nb de la div
            compnb = table2.substring(table2.search('comp')+4)  // Pour récuperer le nb du composans
            let type_element = '';
            if(nom == 'IMAGE'){
                type_element = "imadiv";
                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`)">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_image('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            else if(nom == 'VIDEO'){
                type_element = "viddiv";
                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`)">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            else if(nom == 'TEXT'){
                type_element = "texdiv";
                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`)">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            else if(nom == 'TITRE'){
                type_element = "tidiv";
                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`)">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            else if(nom == 'BOUTON'){
                type_element = "boudiv";
                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`)">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            else if(nom == 'LISTE'){
                type_element = "listdiv";
                nbligne = nombre_ligne_list(compnb,divnb);

                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`,'+divnb+','+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }else if(nom == 'MAP'){
                type_element = "mapdiv";
                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`,'+divnb+','+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }else if(nom == 'HTML'){
                type_element = "htmldiv";
                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`,'+divnb+','+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }else if(nom == 'RSS'){
                type_element = "rssdiv";
                nbligne = nombre_ligne_fluxrss(compnb,divnb);
                // Faire une fonction pour récuperer le nombre d'ellement dans ce compoisant (le nombrede ligne qui est dans le flux)

                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`,'+divnb+','+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }else if(nom == 'ARTICLE'){
                type_element = "articlelistediv";
                nbligne = nombre_ligne_article(compnb,divnb); // A FAIRE
                //document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`,'+divnb+','+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            if(type_element != ''){
                document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_element('+divnb+compnb+',`'+nom+'`,`'+type_element+'`,'+divnb+','+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_element('+divnb+','+divnb+compnb+',`'+table2+'`,`'+type_element+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }else{
                //console.log('Probleme mineur');
            }
            compnb = parseInt(compnb);
            compo = compnb + nbligne + 1;
            
        }
        console.log(compo);
    }
}

function nombre_ligne_list(nbcomposant,nbdiv){
    var i = 0;
    var list = document.getElementById("apercu").innerHTML 
    list = list.substring(list.search('<ul id="listdiv'+nbdiv+nbcomposant));
    list = list.substring(0,list.search('</ul>')+5);
    //console.log(list);
    while(list.search('<li id="lignelistdiv')!=-1){
        list = list.substring(list.search('<li id="lignelistdiv')+20);
        console.log(list);
        i = i +1
        console.log(i);
    }
    return i;
}

function nombre_ligne_article(nbcomposant,nbdiv){
    console.log(nbcomposant);
    var i = 0;
    var list = document.getElementById("apercu").innerHTML
    list = list.substring(list.search('<div id="articlelistediv'+nbdiv+nbcomposant));
    list = list.substring(0,list.search('</div>')+6);
    //console.log(list);
    while(list.search('<p id="lignearticlelistediv')!=-1){
        list = list.substring(list.search('<p id="lignearticlelistediv')+27);
        console.log(list);
        i = i +1
        console.log(i);
    }
    return i;
}

function nombre_ligne_fluxrss(nbcomposant,nbdiv){
    console.log(nbcomposant);
    var i = 0;
    var list = document.getElementById("apercu").innerHTML
    list = list.substring(list.search('<div id="rssdiv'+nbdiv+nbcomposant));
    list = list.substring(0,list.search('</div>')+6);
    //console.log(list);
    while(list.search('<p id="rssliendiv')!=-1){
        list = list.substring(list.search('<p id="rssliendiv')+17);
        console.log(list);
        i = i +1
        console.log(i);
    }
    return i;
}