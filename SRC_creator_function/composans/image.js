function addImageDiv(i){
   // i = le numero de la div
   // compo = le numerot du composan
    let divcomp = "div"+i+"comp"+compo; // ex: div1comp1
    //console.log(divcomp);
    let add = '<div id="div'+i+'comp'+compo+'"><img id="imadiv'+i+compo+'" class="media_size_defaul" src="" alt="Image introuvable"></div>';
    
    // Permet de créé un text dans une div
    document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
    tablediv["idiv"+i].push(divcomp);

    tablediv["idiv"+i][divcomp] ='IMAGE'; // ajouter a divcomp un nom
    //console.log(tablediv);
    compo = compo + 1;

    boucle_composans(i)
}
