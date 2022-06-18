function addHtmlDiv(i){
    // i = le numero de la div
    // compo = le numerot du composan
     let divcomp = "div"+i+"comp"+compo; // ex: div1comp1
     //console.log(divcomp);
     let add = '<div id="div'+i+'comp'+compo+'"><div id="htmldiv'+i+compo+'"></div><style id="htmldiv'+i+compo+'css"></style></div>';
 
     // Permet de créé un text dans une div
     document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
     tablediv["idiv"+i].push(divcomp);
 
     tablediv["idiv"+i][divcomp] ='HTML'; // ajouter a divcomp un nom
     //console.log(tablediv);
     compo = compo + 1;
 
     boucle_composans(i)
}