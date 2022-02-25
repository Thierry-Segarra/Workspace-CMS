function addTextDiv(i){
    // Permet de créé un text dans une div
    let divcomp = "div"+i+"comp"+compo;
    console.log(divcomp);
    let add = '<div id="div'+i+'comp'+compo+'"><p id="texdiv'+i+compo+'" disabled>Text</p></div>';
    
    document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
    tablediv["idiv"+i].push(divcomp);

    tablediv["idiv"+i][divcomp] ='TEXT'; // ajouter a divcomp un nom
    console.log(tablediv);
    compo = compo + 1;

    boucle_composans(i)
}




//option
function suprime_text(dv,i,comp){
    Fermer_op_avancee(); // pour fermer automatiquement la fenetre des option menu avancée (là ou il y a les ligne de liste etc)

    delete tablediv["idiv"+dv][comp]; // suprimer les elements du compsans
    tablediv["idiv"+dv].splice(tablediv["idiv"+dv].indexOf(comp),1); // suprimer de composans du tableau
    
    document.getElementById("menu_option").innerHTML = op_menu; // pour remettre a vide le menu
    // Suprimer tout les Bouton Option
    document.getElementById('texdiv'+i).remove();
    document.getElementById('idnomcomp'+i).remove();
    document.getElementById('id_op'+i).remove();
    document.getElementById('id_sup'+i).remove();
    document.getElementById('id_br'+i).remove();
    document.getElementById('up'+i).remove();
    document.getElementById('down'+i).remove();
    document.getElementById(comp).remove();

    boucle_composans(dv)
}
