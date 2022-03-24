function addArticleDiv(i){
    // Permet de créé un text dans une div
    let divcomp = "div"+i+"comp"+compo;
    //console.log(divcomp);
    let add = '<div id="div'+i+'comp'+compo+'"><div id="listearticlediv'+i+compo+'">categorie selectionner : Tout</div></div>';
    
    document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
    tablediv["idiv"+i].push(divcomp);

    tablediv["idiv"+i][divcomp] ='ARTICLE'; // ajouter a divcomp un nom
    //console.log(tablediv);
    compo = compo + 1;

    boucle_composans(i)
}