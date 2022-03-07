function addListeDiv(i){
   // i = le numero de la div
   // compo = le numerot du composan
    let divcomp = "div"+i+"comp"+compo; // ex: div1comp1
    console.log(divcomp);
    let add = '<div id="div'+i+'comp'+compo+'"><ul id="listdiv'+i+compo+'"></ul></div>';
    
    // Permet de créé un text dans une div
    document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
    tablediv["idiv"+i].push(divcomp);

    tablediv["idiv"+i][divcomp] ='LISTE'; // ajouter a divcomp un nom
    console.log(tablediv);
    compo = compo + 1; // car nous ajouton en plus une ligne dans la liste
    

    boucle_composans(i);
}