function addVideoDiv(i){
   // i = le numero de la div
   // compo = le numerot du composan
    let divcomp = "div"+i+"comp"+compo; // ex: div1comp1
    console.log(divcomp);
    let add = '<div id="div'+i+'comp'+compo+'"><iframe id="viddiv'+i+compo+'" src="" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

    // Permet de créé un text dans une div
    document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
    tablediv["idiv"+i].push(divcomp);

    tablediv["idiv"+i][divcomp] ='VIDEO'; // ajouter a divcomp un nom
    console.log(tablediv);
    compo = compo + 1;

    boucle_composans(i)
}