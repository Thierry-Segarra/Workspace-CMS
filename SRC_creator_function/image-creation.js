function addImageDiv(i){
   // i = le numero de la div
   // compo = le numerot du composan
    let divcomp = "div"+i+"comp"+compo; // ex: div1comp1
    console.log(divcomp);
    let add = '<div id="div'+i+'comp'+compo+'"><img id="imadiv'+i+compo+'" src="../Image/imagedefaut.png" alt="Image introuvable"></div>';
    
    // Permet de créé un text dans une div
    document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML + add;
    tablediv["idiv"+i].push(divcomp);

    tablediv["idiv"+i][divcomp] ='IMAGE'; // ajouter a divcomp un nom
    console.log(tablediv);
    compo = compo + 1;

    boucle_composans(i)
}


// option
function suprime_image(dv,i,comp){
    
    delete tablediv["idiv"+dv][comp]; // suprimer les elements du compsans
    tablediv["idiv"+dv].splice(tablediv["idiv"+dv][comp],1); // suprimer de composans du tableau

    document.getElementById("menu_option").innerHTML = op_menu; // pour remettre a vide le menu
    // Suprimer tout les Bouton Option
    document.getElementById('imadiv'+i).remove();
    //document.getElementById('name_comp'+i).remove();
    document.getElementById('idnomcomp'+i).remove();
    document.getElementById('id_op'+i).remove();
    document.getElementById('id_sup'+i).remove();
    document.getElementById('id_br'+i).remove();
    document.getElementById('down'+i).remove();
    document.getElementById('up'+i).remove();
    document.getElementById(comp).remove();
    
    boucle_composans(dv)
}

function option_image(i){

    document.getElementById("menu_option").innerHTML = op_menu_image; // Permet d'affichet les option disponible a cette element
    document.getElementById('op_src').value = document.getElementById("imadiv"+i).src; // Permet de selectionné le contenue a modifier

    if(document.getElementById('imadiv'+i).style.border){
        let border = document.getElementById('imadiv'+i).style.border;
        document.getElementById('op_bordure').value = border.substring(0,border.length-14) // voir pour la modification de couleur de la border
    }

    // Partie margin
    if(document.getElementById('imadiv'+i).style.marginTop){
        let marginTop = document.getElementById('imadiv'+i).style.marginTop;
        document.getElementById('op_marge_haut').value = marginTop;//.substring(0,marginTop.length-2);
    }
    if(document.getElementById('imadiv'+i).style.marginRight){
        let marginRight = document.getElementById('imadiv'+i).style.marginRight;
        document.getElementById('op_marge_droit').value = marginRight;//.substring(0,marginRight.length-2);
    }
    if(document.getElementById('imadiv'+i).style.marginBottom){
        let marginBottom = document.getElementById('imadiv'+i).style.marginBottom;
        document.getElementById('op_marge_bas').value = marginBottom;//.substring(0,marginBottom.length-2);
    }
    if(document.getElementById('imadiv'+i).style.marginLeft){
        let marginLeft = document.getElementById('imadiv'+i).style.marginLeft;
        document.getElementById('op_marge_gauche').value = marginLeft;//.substring(0,marginLeft.length-2);
    }
    
    // Partie Padding
    if(document.getElementById('imadiv'+i).style.paddingTop){
        let paddingTop = document.getElementById('imadiv'+i).style.paddingTop;
        document.getElementById('op_padding_haut').value = paddingTop;//.substring(0,paddingTop.length-2);
    }
    if(document.getElementById('imadiv'+i).style.paddingRight){
        let paddingRight = document.getElementById('imadiv'+i).style.paddingRight;
        document.getElementById('op_padding_droit').value = paddingRight;//.substring(0,paddingRight.length-2);
    }
    if(document.getElementById('imadiv'+i).style.paddingBottom){
        let paddingBottom = document.getElementById('imadiv'+i).style.paddingBottom;
        document.getElementById('op_padding_bas').value = paddingBottom;//.substring(0,paddingBottom.length-2);
    }
    if(document.getElementById('imadiv'+i).style.paddingLeft){
        let paddingLeft = document.getElementById('imadiv'+i).style.paddingLeft;
        document.getElementById('op_padding_bas').value = paddingLeft;//.substring(0,paddingLeft.length-2);
    } 
    inter = setInterval(op_update_image,250,i); // permet de changer les ellement en eem temps que l'on ecrit

    /* MARCHE A MOITIER
    document.getElementsByName('op_contenue')[0].addEventListener('change', function (){
        document.getElementById('imadiv'+i).innerHTML = document.getElementById('op_contenue').value;
        
    });
    */
}

function op_update_image(i){// modifier pour chaque composant car il y a un risque de conflie de fonction
    // permet d'afficher les modification
    document.getElementById('imadiv'+i).src = document.getElementById('op_src').value; // pour afficher le contenue modifier

    // la taille de la balise
    document.getElementById('imadiv'+i).style.width = document.getElementById('op_taille_width').value +"px";
    document.getElementById('imadiv'+i).style.height = document.getElementById('op_taille_height').value +"px";

    document.getElementById('imadiv'+i).style.border = document.getElementById('op_bordure').value +"px solid black";
    
    // Partie Marging
    document.getElementById('imadiv'+i).style.marginTop = document.getElementById('op_marge_haut').value;// +"px";
    document.getElementById('imadiv'+i).style.marginRight = document.getElementById('op_marge_droit').value;// +"px";
    document.getElementById('imadiv'+i).style.marginBottom = document.getElementById('op_marge_bas').value;// +"px";
    document.getElementById('imadiv'+i).style.marginLeft = document.getElementById('op_marge_gauche').value;// +"px";

    // Partie Padding
    document.getElementById('imadiv'+i).style.paddingTop = document.getElementById('op_padding_haut').value;// +"px";
    document.getElementById('imadiv'+i).style.paddingRight = document.getElementById('op_padding_droit').value;// +"px";
    document.getElementById('imadiv'+i).style.paddingBottom = document.getElementById('op_padding_bas').value;// +"px";
    document.getElementById('imadiv'+i).style.paddingLeft = document.getElementById('op_padding_gauche').value;// +"px";

}