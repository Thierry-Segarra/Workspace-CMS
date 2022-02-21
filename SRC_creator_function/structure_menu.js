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
        document.getElementById('structure').innerHTML = document.getElementById('structure').innerHTML + '<p>DIV '+divnb+'</p><div id="div'+divnb+'"><button onclick="menu_add_fermer('+divnb+','+tablecomp+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button></div>'
        // pour parcourir les different composans dans une div
        boucle_composans(divnb)
    };
}

function menu_add_fermer(divnb){
    document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_ouvert('+divnb+')">↑</button>'
}
function menu_add_ouvert(divnb){
    let divnb2 = divnb
    document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_fermer('+divnb+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button><div id="comp'+divnb+'"></div>'
    boucle_composans(divnb2)
}

function boucle_composans(divnb){
    let tablecomp = tablediv["idiv"+divnb]
    if(tablecomp.length != []){
        document.getElementById('div'+divnb).innerHTML = '<button onclick="menu_add_fermer('+divnb+')">↓</button><br><button onclick="addTitreDiv('+divnb+')">titre</button><button onclick="addTextDiv('+divnb+')">text</button><button onclick="addBoutonDiv('+divnb+')">bouton</button><button onclick="addImageDiv('+divnb+')">image</button><br><button onclick="suprime_Div('+divnb+')">suprimer</button><button onclick="up_div('+divnb+')">up</button><button onclick="down_div('+divnb+')">down</button><div id="comp'+divnb+'"></div>'
        for(let c=0;c < tablecomp.length;c++){
            let table2 = tablecomp[c]; // récuperer un par un
            let nom = tablecomp[table2] // récuperer le nom du composans
            //console.log(table2)

            // divnb = numero de la div
            // table2 = nom du composans ex div1comp1
            // compnb = numero du composans

            //console.log(table2.substring(3,table2.search('comp'))); // Pour récuperer le nb de la div
            compnb = table2.substring(table2.search('comp')+4)  // Pour récuperer le nb du composans
            //console.log(nom)
            
            if(nom == 'IMAGE'){
                document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_image('+divnb+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_image('+divnb+','+divnb+compnb+',`'+table2+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            else if(nom == 'TEXT'){
                document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_text('+divnb+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_text('+divnb+','+divnb+compnb+',`'+table2+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            else if(nom == 'TITRE'){
                document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_titre('+divnb+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_titre('+divnb+','+divnb+compnb+',`'+table2+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
            else if(nom == 'BOUTON'){
                document.getElementById('div'+divnb).innerHTML = document.getElementById('div'+divnb).innerHTML + '<p id="idnomcomp'+divnb+compnb+'">'+nom+'</p><button id="id_op'+divnb+compnb+'" onclick="clearInterval(inter),option_bouton('+divnb+compnb+')">option</button>'+'<button id="id_sup'+divnb+compnb+'" onclick="clearInterval(inter),suprime_bouton('+divnb+','+divnb+compnb+',`'+table2+'`)">suprimer</button><button id="up'+divnb+compnb+'" onclick="up_comp('+divnb+',`'+table2+'`)">up</button><button id="down'+divnb+compnb+'" onclick="down_comp('+divnb+',`'+table2+'`)">down</button><br id="id_br'+divnb+compnb+'">'
            }
        }
    }
}