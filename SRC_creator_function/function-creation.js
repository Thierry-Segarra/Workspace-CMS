function addfunc(){
    let divfunc= 'func';
    // Permet de créé une div
    let structure = '<p>FONCTION '+idiv+'</p><div id="func'+idiv+'"><button onclick="menu_add_fermer(`'+divfunc+'`,'+idiv+')">↓</button><br><button onclick="up_func('+idiv+')">up</button><button onclick="down_func('+idiv+')">down</button></div>'
    document.getElementById('structure').innerHTML = document.getElementById('structure').innerHTML + structure;
    let div = '<div class="builddiv" id="ifunc'+idiv+'"></div>';
    
    document.querySelector('page').innerHTML = document.querySelector('page').innerHTML + div;
    
    let comdiv = "ifunc"+idiv; // ex: idiv1
    tablediv.push(comdiv);
    tablediv[comdiv]= []; // dire que c'est un tableau
    //console.log(tablediv);
    idiv = idiv + 1;

}
/*
function suprime_Div(dv){
    tablediv.splice(tablediv.indexOf("idiv"+dv),1); // Permet de dire a la table de suprimer uniquement l'ellement du tableau avec sont index sinon il suprime tout la table
    delete tablediv["idiv"+dv];
    document.getElementById('idiv'+dv).remove();
    
    affiche_structure();
}
*/