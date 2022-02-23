function addTitreDiv(i){
    let divcomp = "div"+i+"comp"+compo;
    console.log(divcomp);
    let add = '<div id="div'+i+'comp'+compo+'"><h1 id="tidiv'+i+compo+'">Titre</h1></div>'
    
    // Permet de créé un text dans une div
    document.getElementById('idiv'+i).innerHTML =  document.getElementById('idiv'+i).innerHTML +add;
    tablediv["idiv"+i].push(divcomp);

    tablediv["idiv"+i][divcomp] ='TITRE'; // ajouter a divcomp un nom
    console.log(tablediv);
    compo = compo + 1;

    boucle_composans(i)
}


// option
function suprime_titre(dv,i,comp){;
    delete tablediv["idiv"+dv][comp]; // suprimer les elements du compsans
    tablediv["idiv"+dv].splice(tablediv["idiv"+dv].indexOf(comp),1); // suprimer de composans du tableau
    
    // Avoir bug de supression sur tout les bouton
    document.getElementById("menu_option").innerHTML = op_menu; // pour remettre a vide le menu
    // Suprimer tout les Bouton Option
    document.getElementById('tidiv'+i).remove();
    document.getElementById('idnomcomp'+i).remove();
    document.getElementById('id_op'+i).remove();
    document.getElementById('id_sup'+i).remove();
    document.getElementById('up'+i).remove();
    document.getElementById('down'+i).remove();
    document.getElementById(comp).remove();

    boucle_composans(dv)
}

function option_titre(i){
    Fermer_op_avancee(); // pour fermer automatiquement la fenetre des option menu avancée (là ou il y a les ligne de liste etc)

    document.getElementById("menu_option").innerHTML = op_menu_titre; // Permet d'affichet les option disponible a cette element
    document.getElementById('op_contenue').value = document.getElementById("tidiv"+i).innerHTML; // Permet de selectionné le contenue a modifier
    document.querySelector('input[name=align]').value = document.getElementById('tidiv'+i).style.textAlign;
    
    if(document.getElementById('tidiv'+i).style.fontSize){
        let fontsize = document.getElementById('tidiv'+i).style.fontSize;
        document.getElementById('op_taille').value = fontsize.substring(0,fontsize.length-2);
    }

    if(document.getElementById('tidiv'+i).style.border){
        let border = document.getElementById('tidiv'+i).style.border;
        document.getElementById('op_bordure').value = border.substring(0,border.length-14) // voir pour la modification de couleur de la border
    }

    // Partie margin
    if(document.getElementById('tidiv'+i).style.marginTop){
        let marginTop = document.getElementById('tidiv'+i).style.marginTop;
        document.getElementById('op_marge_haut').value = marginTop;//.substring(0,marginTop.length-2); // ne sert plus a rien car on oblige plus l'utilisateur a utiliser que le px
    }
    if(document.getElementById('tidiv'+i).style.marginRight){
        let marginRight = document.getElementById('tidiv'+i).style.marginRight;
        document.getElementById('op_marge_droit').value = marginRight;//.substring(0,marginRight.length-2);
    }
    if(document.getElementById('tidiv'+i).style.marginBottom){
        let marginBottom = document.getElementById('tidiv'+i).style.marginBottom;
        document.getElementById('op_marge_bas').value = marginBottom;//.substring(0,marginBottom.length-2);
    }
    if(document.getElementById('tidiv'+i).style.marginLeft){
        let marginLeft = document.getElementById('tidiv'+i).style.marginLeft;
        document.getElementById('op_marge_gauche').value = marginLeft;//.substring(0,marginLeft.length-2);
    }
    
    // Partie Padding
    if(document.getElementById('tidiv'+i).style.paddingTop){
        let paddingTop = document.getElementById('tidiv'+i).style.paddingTop;
        document.getElementById('op_padding_haut').value = paddingTop;//.substring(0,paddingTop.length-2);
    }
    if(document.getElementById('tidiv'+i).style.paddingRight){
        let paddingRight = document.getElementById('tidiv'+i).style.paddingRight;
        document.getElementById('op_padding_droit').value = paddingRight;//.substring(0,paddingRight.length-2);
    }
    if(document.getElementById('tidiv'+i).style.paddingBottom){
        let paddingBottom = document.getElementById('tidiv'+i).style.paddingBottom;
        document.getElementById('op_padding_bas').value = paddingBottom;//.substring(0,paddingBottom.length-2);
    }
    if(document.getElementById('tidiv'+i).style.paddingLeft){
        let paddingLeft = document.getElementById('tidiv'+i).style.paddingLeft;
        document.getElementById('op_padding_bas').value = paddingLeft;//.substring(0,paddingLeft.length-2);
    } 
    inter = setInterval(op_update_titre,250,i); // permet de changer les ellement en eem temps que l'on ecrit

    /* MARCHE A MOITIER
    document.getElementsByName('op_contenue')[0].addEventListener('change', function (){
        document.getElementById('tidiv'+i).innerHTML = document.getElementById('op_contenue').value;
        
    });
    */
}

function op_update_titre(i){// modifier pour chaque composant car il y a un risque de conflie de fonction
    // permet d'afficher les modification
    document.getElementById('tidiv'+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier
    document.getElementById('tidiv'+i).style.fontSize = document.getElementById('op_taille').value +"px"; // pour afficher la taille modifier
    document.getElementById('tidiv'+i).style.textAlign = document.querySelector('input[name=align]:checked').value; // pour afficher les modificaton fait sur l'alignement du titre
    document.getElementById('tidiv'+i).style.border = document.getElementById('op_bordure').value +"px solid black";
    
    // Partie Marging
    document.getElementById('tidiv'+i).style.marginTop = document.getElementById('op_marge_haut').value;// +"px";
    document.getElementById('tidiv'+i).style.marginRight = document.getElementById('op_marge_droit').value;// +"px";
    document.getElementById('tidiv'+i).style.marginBottom = document.getElementById('op_marge_bas').value;// +"px";
    document.getElementById('tidiv'+i).style.marginLeft = document.getElementById('op_marge_gauche').value;// +"px";

    // Partie Padding
    document.getElementById('tidiv'+i).style.paddingTop = document.getElementById('op_padding_haut').value;// +"px";
    document.getElementById('tidiv'+i).style.paddingRight = document.getElementById('op_padding_droit').value;// +"px";
    document.getElementById('tidiv'+i).style.paddingBottom = document.getElementById('op_padding_bas').value;// +"px";
    document.getElementById('tidiv'+i).style.paddingLeft = document.getElementById('op_padding_gauche').value;// +"px";

}