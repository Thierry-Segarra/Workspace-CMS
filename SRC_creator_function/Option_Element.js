var parcour_menu = 0;
var stock_i = 0;
var stock_nom_element = '';
var stock_element = '';


function option_element(i,nom_element,element,divnb,compnb){
    stock_divnb = divnb;
    stock_compnb = compnb;
// i = numerot du composans
// nom_ellement = nom de l'ellement ex TITRE, TEXT, LISTE ...
// element = l'identifiant de l'ellement ex imadiv ...

    stock_i = i;
    stock_nom_element = nom_element;
    stock_element = element;

    if(nom_element == 'LIGNE'){

        document.getElementById("option_compossan").innerHTML = op_menu_element; // Permet d'afficher les options disponible à cette element
        document.getElementById("menu_option").innerHTML = op_menu; // pour eviter un conflie avec les paramettre
    
    }else{

        Fermer_op_avancee(); // pour fermer automatiquement la fenetre des option menu avancée (là ou il y a les ligne de liste etc)
        document.getElementById("menu_option").innerHTML = op_menu_element; // Permet d'affichet les option disponible à cette element
    
    }
    // Information pour differentier les element comme le nom de l'element
    document.getElementById("nom_element").innerHTML = 'OPTION '+nom_element;

    if(parcour_menu == 1){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = op_contenue;
        document.getElementById('bordure').innerHTML = '';
        document.getElementById('position').innerHTML = '';

        if(nom_element == 'IMAGE'){
            // option pour modifier le contenue et la taille d'une image
            document.getElementById("text").innerHTML = '<p>lien de l`image</p><button id="op_plus" onclick="contenue_media_image()" >Option Ligne</button><p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value=""><br><br>';
            //document.getElementById('op_src').value = document.getElementById(element+i).src; // Permet de selectionné le contenue a modifier

            if(document.getElementById(element+i).style.width){
                let width = document.getElementById(element+i).style.width;
                document.getElementById('op_taille_width').value = width;//.substring(0,width.length-2);
            }

        }else if(nom_element == 'VIDEO'){
            // option pour modifier le contenue et la taille d'une image
            document.getElementById("text").innerHTML = '<p>lien de la video</p><button id="op_plus" onclick="contenue_media_video()" >Option Ligne</button><p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value=""><br>';

            if(document.getElementById(element+i).style.width){
                let width = document.getElementById(element+i).style.width;
                document.getElementById('op_taille_width').value = width;//.substring(0,width.length-2);
            }

        }else if(nom_element == 'LISTE'){

            document.getElementById("text").innerHTML = '<p>Modifer contenue de la liste</p><button id="op_plus" onclick="clearInterval(inter),contenue_Liste('+i+','+stock_divnb+','+stock_compnb+')">Option Ligne</button><p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value=""><br><br>';

            if(document.getElementById(element+i).style.fontSize){
                let fontsize = document.getElementById(element+i).style.fontSize;
                document.getElementById('op_taille').value = fontsize.substring(0,fontsize.length-2);
            }

            if(document.getElementById(element+i).style.width){
                let width = document.getElementById(element+i).style.width;
                document.getElementById('op_taille_width').value = width.substring(0,width.length-2);
            }
        
            if(document.getElementById(element+i).style.height){
                let height = document.getElementById(element+i).style.height;
                document.getElementById('op_taille_height').value = height.substring(0,height.length-2)
            } 


        }else{
            // option pour modifier le contenue et la taille d'un text
            document.getElementById("text").innerHTML = '<p>contenue dans le texte</p><input name="op_contenue" id="op_contenue" placeholder="Saisir votre titre" type="text" value=""><p>taille</p><input name="op_taille" id="op_taille" type="text" placeholder="18.72 par defaut" value="">px<p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value="">px<br><label for="op_taille_height">Hauteur</label><br><input name="op_taille_height" id="op_taille_height" type="text" placeholder="image par defaut" value="">px<br>';

            document.getElementById('op_contenue').value = document.getElementById(element+i).innerHTML; // Permet de selectionné le contenue a modifier
            
            if(document.getElementById(element+i).style.fontSize){
                let fontsize = document.getElementById(element+i).style.fontSize;
                document.getElementById('op_taille').value = fontsize.substring(0,fontsize.length-2);
            }

            if(document.getElementById(element+i).style.width){
                let width = document.getElementById(element+i).style.width;
                document.getElementById('op_taille_width').value = width.substring(0,width.length-2);
            }
        
            if(document.getElementById(element+i).style.height){
                let height = document.getElementById(element+i).style.height;
                document.getElementById('op_taille_height').value = height.substring(0,height.length-2)
            } 
        }
    }
   
    if(parcour_menu == 2){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = '';
        document.getElementById('bordure').innerHTML = op_bordure;
        document.getElementById('position').innerHTML = '';



        if(document.getElementById(element+i).style.border){
            let border = document.getElementById(element+i).style.border;
            //console.log(border.substring(border.search('px'),0));
            document.getElementById('op_bordure').value = border.substring(border.search('px'),0);// Permet de récuperer la taille de la bordure
        }
        
        if(document.getElementById(element+i).style.borderColor){
            
            let borderColor = document.getElementById(element+i).style.borderColor;

            let couleur = CouleurBorder(borderColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }

        // Partie border séparer
        if(document.getElementById(element+i).style.borderTop){
            let borderTop = document.getElementById(element+i).style.borderTop;
            document.getElementById('op_bordure_haut').value = borderTop.substring(border.search('px'),0);
        }
        if(document.getElementById(element+i).style.borderRight){
            let borderRight = document.getElementById(element+i).style.borderRight;
            document.getElementById('op_bordure_droit').value = borderRight.substring(border.search('px'),0);
        }
        if(document.getElementById(element+i).style.borderBottom){
            let borderBottom = document.getElementById(element+i).style.borderBottom;
            document.getElementById('op_bordure_bas').value = borderBottom.substring(border.search('px'),0);
        }
        if(document.getElementById(element+i).style.borderLeft){
            let borderLeft = document.getElementById(element+i).style.borderLeft;
            document.getElementById('op_bordure_gauche').value = borderLeft.substring(border.search('px'),0);
        }

        
    }
    if(parcour_menu == 3){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = '';
        document.getElementById('bordure').innerHTML = '';
        document.getElementById('position').innerHTML = op_position;

    // Partie margin
        if(document.getElementById(element+i).style.marginTop){
            let marginTop = document.getElementById(element+i).style.marginTop;
            document.getElementById('op_marge_haut').value = marginTop;//.substring(0,marginTop.length-2);
        }
        if(document.getElementById(element+i).style.marginRight){
            let marginRight = document.getElementById(element+i).style.marginRight;
            document.getElementById('op_marge_droit').value = marginRight;//.substring(0,marginRight.length-2);
        }
        if(document.getElementById(element+i).style.marginBottom){
            let marginBottom = document.getElementById(element+i).style.marginBottom;
            document.getElementById('op_marge_bas').value = marginBottom;//.substring(0,marginBottom.length-2);
        }
        if(document.getElementById(element+i).style.marginLeft){
            let marginLeft = document.getElementById(element+i).style.marginLeft;
            document.getElementById('op_marge_gauche').value = marginLeft;//.substring(0,marginLeft.length-2);
        }
        
        // Partie Padding
        if(document.getElementById(element+i).style.paddingTop){
            let paddingTop = document.getElementById(element+i).style.paddingTop;
            document.getElementById('op_padding_haut').value = paddingTop;//.substring(0,paddingTop.length-2);
        }
        if(document.getElementById(element+i).style.paddingRight){
            let paddingRight = document.getElementById(element+i).style.paddingRight;
            document.getElementById('op_padding_droit').value = paddingRight;//.substring(0,paddingRight.length-2);
        }
        if(document.getElementById(element+i).style.paddingBottom){
            let paddingBottom = document.getElementById(element+i).style.paddingBottom;
            document.getElementById('op_padding_bas').value = paddingBottom;//.substring(0,paddingBottom.length-2);
        }
        if(document.getElementById(element+i).style.paddingLeft){
            let paddingLeft = document.getElementById(element+i).style.paddingLeft;
            document.getElementById('op_padding_bas').value = paddingLeft;//.substring(0,paddingLeft.length-2);
        } 
    }
    inter = setInterval(op_update_element,250,i,nom_element,element);
}




function op_update_element(i,nom_element,element){ // modifier pour chaque composant car il y a un risque de conflie de fonction    
    // permet d'afficher les modification
    
    // la taille de la balise
    if(parcour_menu == 1){
    if(nom_element == 'IMAGE' || nom_element == 'VIDEO'){
        //document.getElementById(element+i).src = document.getElementById('op_src').value; // pour afficher le contenue modifier
        if(document.getElementById("switch")){
            if(document.getElementById("switch").src){
                if(document.getElementById("switch").src != document.getElementById(element+i).src){
                    document.getElementById(element+i).src = document.getElementById("switch").src;
                }
            }
        }

        if(document.getElementById('op_taille_width').value){
            document.getElementById(element+i).style.width = document.getElementById('op_taille_width').value;
        }else{document.getElementById(element+i).style.width = null}
        

    }else if(nom_element == 'TITRE' || nom_element == 'TEXT' || nom_element == 'LIGNE'){

        // Le contenue de la balise
        document.getElementById(element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier

        // la taille du text
        if(document.getElementById('op_taille').value){
            document.getElementById(element+i).style.fontSize = document.getElementById('op_taille').value +"px"; // pour afficher la taille modifier
        }else{document.getElementById(element+i).style.fontSize = null}

        // Modification contenue dans liste des ligne dans une liste
        if (nom_element == 'LIGNE') {

            document.getElementById('trai_'+element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier

            if(document.getElementById('op_taille').value){
                document.getElementById(element+i).style.fontSize = document.getElementById('op_taille').value +"px"; // pour afficher la taille modifier
            }else{document.getElementById(element+i).style.fontSize = null}

            if(document.getElementById('op_taille_width').value){
                document.getElementById(element+i).style.width = document.getElementById('op_taille_width').value +"px";
            }else{document.getElementById(element+i).style.width = null}

            if(document.getElementById('op_taille_height').value){
                document.getElementById(element+i).style.height = document.getElementById('op_taille_height').value +"px";
            }else{document.getElementById(element+i).style.height = null}

        }else{

            if(document.getElementById('op_taille_width').value){
                document.getElementById(element+i).style.width = document.getElementById('op_taille_width').value +"px";
            }else{document.getElementById(element+i).style.width = null}

            if(document.getElementById('op_taille_height').value){
                document.getElementById(element+i).style.height = document.getElementById('op_taille_height').value +"px";
            }else{document.getElementById(element+i).style.height = null}
        }
    }

    // Alignement du text
    if(document.querySelector('input[name=align]:checked').value){
        document.getElementById(element+i).style.textAlign = document.querySelector('input[name=align]:checked').value; // pour afficher les modificaton fait sur l'alignement du titre
    }
}

    if(parcour_menu == 2){
        // Bordure
        
        if(document.getElementById('op_bordure').value){
            document.getElementById(element+i).style.border = document.getElementById('op_bordure').value +"px "+document.getElementById('op_bordure_type').value+" "+document.getElementById('op_border_couleur').value; // document.getElementById('op_border_couleur').value = borderColor
        }else{document.getElementById(element+i).style.border = null}
        
        // Partie Bordure séparer
        if(document.getElementById('op_bordure_haut').value){
            document.getElementById(element+i).style.borderTop = document.getElementById('op_bordure_haut').value +"px "+document.getElementById('op_bordure_type').value+" "+document.getElementById('op_border_couleur').value;
        }//else{document.getElementById(element+i).style.borderTop = null}

        if(document.getElementById('op_bordure_droit').value){
            document.getElementById(element+i).style.borderRight = document.getElementById('op_bordure_droit').value +"px "+document.getElementById('op_bordure_type').value+" "+document.getElementById('op_border_couleur').value;
        }//else{document.getElementById(element+i).style.borderRight = null}

        if(document.getElementById('op_bordure_bas').value){
            document.getElementById(element+i).style.borderBottom = document.getElementById('op_bordure_bas').value +"px "+document.getElementById('op_bordure_type').value+" "+document.getElementById('op_border_couleur').value;
        }//else{document.getElementById(element+i).style.borderBottom = null}

        if(document.getElementById('op_bordure_gauche').value){
            document.getElementById(element+i).style.borderLeft = document.getElementById('op_bordure_gauche').value +"px "+document.getElementById('op_bordure_type').value+" "+document.getElementById('op_border_couleur').value;
        }//else{document.getElementById(element+i).style.borderLeft = null}    
        

        // on verifi si il y a des donnée dans ces input
        if(document.getElementById('op_bordure').value || document.getElementById('op_bordure_haut').value || document.getElementById('op_bordure_droit').value || document.getElementById('op_bordure_bas').value || document.getElementById('op_bordure_gauche').value){
            
            document.getElementById(element+i).style.borderStyle = document.getElementById('op_bordure_type').value;

        }else{document.getElementById(element+i).style.borderStyle = null}


        if(document.getElementById('op_bordure').value || document.getElementById('op_bordure_haut').value || document.getElementById('op_bordure_droit').value || document.getElementById('op_bordure_bas').value || document.getElementById('op_bordure_gauche').value){
            
            document.getElementById(element+i).style.borderTopLeftRadius = document.getElementById('op_bordure_hg').value+'%';

        }else{document.getElementById(element+i).style.borderTopLeftRadius = null}

    }

    if(parcour_menu == 3){

        // Partie Marging
        if(document.getElementById('op_marge_haut').value){
        document.getElementById(element+i).style.marginTop = document.getElementById('op_marge_haut').value;// +"px";
        }else{document.getElementById(element+i).style.marginTop = null}

        if(document.getElementById('op_marge_droit').value){
        document.getElementById(element+i).style.marginRight = document.getElementById('op_marge_droit').value;// +"px";
        }else{document.getElementById(element+i).style.marginRight = null}

        if(document.getElementById('op_marge_bas').value){
        document.getElementById(element+i).style.marginBottom = document.getElementById('op_marge_bas').value;// +"px";
        }else{document.getElementById(element+i).style.marginBottom = null}

        if(document.getElementById('op_marge_gauche').value){
            document.getElementById(element+i).style.marginLeft = document.getElementById('op_marge_gauche').value;// +"px";
        }else{document.getElementById(element+i).style.marginLeft = null}


        // Partie Padding
        if(document.getElementById('op_padding_haut').value){
            document.getElementById(element+i).style.paddingTop = document.getElementById('op_padding_haut').value;// +"px";
        }else{document.getElementById(element+i).style.paddingTop = null}
        
        if(document.getElementById('op_padding_droit').value){
            document.getElementById(element+i).style.paddingRight = document.getElementById('op_padding_droit').value;// +"px";
        }else{document.getElementById(element+i).style.paddingRight = null}
        
        if(document.getElementById('op_padding_bas').value){
            document.getElementById(element+i).style.paddingBottom = document.getElementById('op_padding_bas').value;// +"px";
        }else{document.getElementById(element+i).style.paddingBottom = null}
        
        if(document.getElementById('op_padding_gauche').value){
            document.getElementById(element+i).style.paddingLeft = document.getElementById('op_padding_gauche').value;// +"px";
        }else{document.getElementById(element+i).style.paddingLeft = null}
        
        
    }
}