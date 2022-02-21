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
    boucle_composans(dv)
}


function option_text(i){

    document.getElementById("menu_option").innerHTML = op_menu_text; // Permet d'affichet les option disponible a cette element
    document.getElementById('op_contenue').value = document.getElementById("texdiv"+i).innerHTML; // Permet de selectionné le contenue a modifier
    document.querySelector('input[name=align]').value = document.getElementById('texdiv'+i).style.textAlign;
    
    if(document.getElementById('texdiv'+i).style.fontSize){
        let fontsize = document.getElementById('texdiv'+i).style.fontSize;
        document.getElementById('op_taille').value = fontsize.substring(0,fontsize.length-2);
    }

    if(document.getElementById('texdiv'+i).style.width){
        let width = document.getElementById('texdiv'+i).style.width;
        document.getElementById('op_taille_width').value = width.substring(0,width.length-2);
    }

    if(document.getElementById('texdiv'+i).style.height){
        let height = document.getElementById('texdiv'+i).style.height;
        document.getElementById('op_taille_height').value = height.substring(0,height.length-2)
    }

    if(document.getElementById('texdiv'+i).style.border){
        let border = document.getElementById('texdiv'+i).style.border;
        document.getElementById('op_bordure').value = border.substring(0,border.length-14) // voir pour la modification de couleur de la border
    }

    // Partie margin
    if(document.getElementById('texdiv'+i).style.marginTop){
        let marginTop = document.getElementById('texdiv'+i).style.marginTop;
        document.getElementById('op_marge_haut').value = marginTop;//.substring(0,marginTop.length-2);
    }
    if(document.getElementById('texdiv'+i).style.marginRight){
        let marginRight = document.getElementById('texdiv'+i).style.marginRight;
        document.getElementById('op_marge_droit').value = marginRight;//.substring(0,marginRight.length-2);
    }
    if(document.getElementById('texdiv'+i).style.marginBottom){
        let marginBottom = document.getElementById('texdiv'+i).style.marginBottom;
        document.getElementById('op_marge_bas').value = marginBottom;//.substring(0,marginBottom.length-2);
    }
    if(document.getElementById('texdiv'+i).style.marginLeft){
        let marginLeft = document.getElementById('texdiv'+i).style.marginLeft;
        document.getElementById('op_marge_gauche').value = marginLeft;//.substring(0,marginLeft.length-2);
    }
    
    // Partie Padding
    if(document.getElementById('texdiv'+i).style.paddingTop){
        let paddingTop = document.getElementById('texdiv'+i).style.paddingTop;
        document.getElementById('op_padding_haut').value = paddingTop;//.substring(0,paddingTop.length-2);
    }
    if(document.getElementById('texdiv'+i).style.paddingRight){
        let paddingRight = document.getElementById('texdiv'+i).style.paddingRight;
        document.getElementById('op_padding_droit').value = paddingRight;//.substring(0,paddingRight.length-2);
    }
    if(document.getElementById('texdiv'+i).style.paddingBottom){
        let paddingBottom = document.getElementById('texdiv'+i).style.paddingBottom;
        document.getElementById('op_padding_bas').value = paddingBottom;//.substring(0,paddingBottom.length-2);
    }
    if(document.getElementById('texdiv'+i).style.paddingLeft){
        let paddingLeft = document.getElementById('texdiv'+i).style.paddingLeft;
        document.getElementById('op_padding_bas').value = paddingLeft;//.substring(0,paddingLeft.length-2);
    }    
    
    inter = setInterval(op_update_text,250,i); // permet de changer les ellement en eem temps que l'on ecrit

    /* MARCHE A MOITIER
    document.getElementsByName('op_contenue')[0].addEventListener('change', function (){
        document.getElementById('tidiv'+i).innerHTML = document.getElementById('op_contenue').value;
        
    });
    */
}
function op_update_text(i){ // modifier pour chaque composant car il y a un risque de conflie de fonction
    // permet d'afficher les modification
    // Le contenue de la balise
    document.getElementById('texdiv'+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier

    // la taille du text
    document.getElementById('texdiv'+i).style.fontSize = document.getElementById('op_taille').value +"px"; // pour afficher la taille modifier

    // la taille de la balise
    document.getElementById('texdiv'+i).style.width = document.getElementById('op_taille_width').value +"px";
    document.getElementById('texdiv'+i).style.height = document.getElementById('op_taille_height').value +"px";

    // Alignement du text
    document.getElementById('texdiv'+i).style.textAlign = document.querySelector('input[name=align]:checked').value; // pour afficher les modificaton fait sur l'alignement du titre

    // Bordure
    document.getElementById('texdiv'+i).style.border = document.getElementById('op_bordure').value +"px solid black";
    
    // Partie Marging
    document.getElementById('texdiv'+i).style.marginTop = document.getElementById('op_marge_haut').value;// +"px";
    document.getElementById('texdiv'+i).style.marginRight = document.getElementById('op_marge_droit').value;// +"px";
    document.getElementById('texdiv'+i).style.marginBottom = document.getElementById('op_marge_bas').value;// +"px";
    document.getElementById('texdiv'+i).style.marginLeft = document.getElementById('op_marge_gauche').value;// +"px";

    // Partie Padding
    document.getElementById('texdiv'+i).style.paddingTop = document.getElementById('op_padding_haut').value;// +"px";
    document.getElementById('texdiv'+i).style.paddingRight = document.getElementById('op_padding_droit').value;// +"px";
    document.getElementById('texdiv'+i).style.paddingBottom = document.getElementById('op_padding_bas').value;// +"px";
    document.getElementById('texdiv'+i).style.paddingLeft = document.getElementById('op_padding_gauche').value;// +"px";

}