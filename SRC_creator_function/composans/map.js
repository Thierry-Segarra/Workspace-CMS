function addMapDiv(i){
    // i = le numero de la div
    // compo = le numerot du composan
     let divcomp = "div"+i+"comp"+compo; // ex: div1comp1
     console.log(divcomp);
     let add = '<div id="div'+i+'comp'+compo+'"><iframe id="mapdiv'+i+compo+'"width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=france+(france)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>';
 
     // Permet de créé un text dans une div
     document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
     tablediv["idiv"+i].push(divcomp);
 
     tablediv["idiv"+i][divcomp] ='MAP'; // ajouter a divcomp un nom
     console.log(tablediv);
     compo = compo + 1;
 
     boucle_composans(i)
}