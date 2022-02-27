function adddiv(){
    // Permet de créé une div
    let structure = '<p>DIV '+idiv+'</p><div id="div'+idiv+'"><button onclick="menu_add_fermer('+idiv+')">↓</button><br><button onclick="addTitreDiv('+idiv+')">titre</button><button onclick="addTextDiv('+idiv+')">text</button><button onclick="addBoutonDiv('+idiv+')">bouton</button><button onclick="addImageDiv('+idiv+')">image</button><button onclick="addVideoDiv('+idiv+')">video</button><button onclick="addListeDiv('+idiv+')">liste</button><br><button onclick="suprime_Div('+idiv+')">suprimer</button><button onclick="up_div('+idiv+')">up</button><button onclick="down_div('+idiv+')">down</button></div>'
    document.getElementById('structure').innerHTML = document.getElementById('structure').innerHTML + structure;
    let div = '<div class="builddiv" id="idiv'+idiv+'"></div>';
    document.querySelector('article').innerHTML = document.querySelector('article').innerHTML + div;
    let comdiv = "idiv"+idiv; // ex: idiv1
    tablediv.push(comdiv);
    tablediv[comdiv]= []; // dire que c'est un tableau
    //console.log(tablediv);
    idiv = idiv + 1;

}

function suprime_Div(dv){
    tablediv.splice(tablediv.indexOf("idiv"+dv),1); // Permet de dire a la table de suprimer uniquement l'ellement du tableau avec sont index sinon il suprime tout la table
    delete tablediv["idiv"+dv];
    document.getElementById('idiv'+dv).remove();
    
    affiche_structure();
}