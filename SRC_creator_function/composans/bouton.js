function addBoutonDiv(i){
    let divcomp = "div"+i+"comp"+compo;
    console.log(divcomp);
    let add = '<div id="div'+i+'comp'+compo+'"><button id="boudiv'+i+compo+'">Click</button></div>'
    
    // Permet de créé un text dans une div
    document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
    tablediv["idiv"+i].push(divcomp);

    tablediv["idiv"+i][divcomp] ='BOUTON'; // ajouter a divcomp un nom
    console.log(tablediv);
    compo = compo + 1;

    boucle_composans(i)
}





/*
function opion_bouton()



*/