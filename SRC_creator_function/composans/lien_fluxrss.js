function addLienFluxRss(i,nbcomp){
    // i = le numero de la div
    // compo = le numerot du composan
    // nbcomp = le numerot du composans de la list
    //let divcomp = "div"+i+"comp"+compo; // ex: div1comp1
    //console.log(divcomp);
     let add = '<p id="rssliendiv'+i+compo+'">Nouveau Flux RSS</p>';
     
     document.getElementById('list_composans').innerHTML =  document.getElementById('list_composans').innerHTML + '<button id="id_op'+i+compo+'" onclick="clearInterval(inter),option_element('+i+compo+',`LIENRSS`,`rssliendiv`)">option</button>'+'<button id="id_sup'+i+compo+'" onclick="clearInterval(inter),suprime_lienRSS_liste('+i+compo+')">suprimer</button><button id="up'+i+compo+'" onclick="ligne_up('+i+nbcomp+','+i+compo+','+nbcomp+','+i+')">up</button><button id="down'+i+compo+'" onclick="ligne_down('+i+nbcomp+','+i+compo+','+nbcomp+','+i+')">down</button><br id="id_br'+i+compo+'"><p id="trai_rssliendiv'+i+compo+'">Nouveau Flux RSS</p>';
     // Permet de créé un une ligne dans une liste
     document.getElementById('rssdiv'+i+nbcomp).innerHTML =  document.getElementById('rssdiv'+i+nbcomp).innerHTML + add;
     

     compo = compo + 1;
 
     //boucle_composans(i); // on ne modifie pas la structure priscipale, donc pas la peine de l'appeler
 }  

// option
// Il faut le laisser car il y as des element a suprimer different au composans comme e texte, titre, ...
function suprime_lienRSS_liste(i){
   
    document.getElementById("option_compossan").innerHTML = op_menu; // pour remettre a vide le menu
    // Suprimer tout les Bouton Option
    document.getElementById('rssliendiv'+i).remove();
    document.getElementById('trai_rssliendiv'+i).remove();
    //document.getElementById('name_comp'+i).remove();
    document.getElementById('id_op'+i).remove();
    document.getElementById('id_sup'+i).remove();
    document.getElementById('id_br'+i).remove();
    document.getElementById('down'+i).remove();
    document.getElementById('up'+i).remove();
    
}
