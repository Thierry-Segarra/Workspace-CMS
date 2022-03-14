function option_div(divnb){
    stock_divnb = divnb;

        Fermer_op_avancee(); // pour fermer automatiquement la fenetre des option menu avancée (là ou il y a les ligne de liste etc)
        document.getElementById("menu_option").innerHTML = op_menu_div; // Permet d'affichet les option disponible à cette element
    
    // Information pour differentier les element comme le nom de l'element
    document.getElementById("nom_element").innerHTML = 'OPTION DIV';

    if(parcour_menu == 1){
        // Affichage du module souhaiter
        //document.getElementById('contenue').innerHTML = op_contenue;
        document.getElementById('bordure').innerHTML = '';
        document.getElementById('position').innerHTML = '';
        document.getElementById('autre').innerHTML = '';

    }
   
    if(parcour_menu == 2){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = '';
        document.getElementById('bordure').innerHTML = op_bordure;
        document.getElementById('position').innerHTML = '';
        document.getElementById('autre').innerHTML = '';



        if(document.getElementById('idiv'+divnb).style.border){
            let border = document.getElementById('idiv'+divnb).style.border;
            //console.log(border.substring(border.search('px'),0));
            document.getElementById('op_bordure').value = border.substring(border.search('px'),0);// Permet de récuperer la taille de la bordure
        }else{
        // Partie border séparer
            if(document.getElementById('idiv'+divnb).style.borderTop){
                let borderTop = document.getElementById('idiv'+divnb).style.borderTop;
                document.getElementById('op_bordure_haut').value = borderTop.substring(borderTop.search('px'),0);
            }
            if(document.getElementById('idiv'+divnb).style.borderRight){
                let borderRight = document.getElementById('idiv'+divnb).style.borderRight;
                document.getElementById('op_bordure_droit').value = borderRight.substring(borderRight.search('px'),0);
            }
            if(document.getElementById('idiv'+divnb).style.borderBottom){
                let borderBottom = document.getElementById('idiv'+divnb).style.borderBottom;
                document.getElementById('op_bordure_bas').value = borderBottom.substring(borderBottom.search('px'),0);
            }
            if(document.getElementById('idiv'+divnb).style.borderLeft){
                let borderLeft = document.getElementById('idiv'+divnb).style.borderLeft;
                document.getElementById('op_bordure_gauche').value = borderLeft.substring(borderLeft.search('px'),0);
            }
        }
        if(document.getElementById('idiv'+divnb).style.borderColor){
            
            let borderColor = document.getElementById('idiv'+divnb).style.borderColor;

            let couleur = CouleurBorder(borderColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }


        if(document.getElementById('idiv'+divnb).style.borderTopColor){
            
            let borderTopColor = document.getElementById('idiv'+divnb).style.borderTopColor;

            let couleur = CouleurBorder(borderTopColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur_haut').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }

        if(document.getElementById('idiv'+divnb).style.borderRightColor){
            
            let borderRightColor = document.getElementById('idiv'+divnb).style.borderRightColor;

            let couleur = CouleurBorder(borderRightColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur_droit').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }
        
        if(document.getElementById('idiv'+divnb).style.borderBottomColor){
            
            let borderBottomColor = document.getElementById('idiv'+divnb).style.borderBottomColor;

            let couleur = CouleurBorder(borderBottomColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur_bas').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }

        if(document.getElementById('idiv'+divnb).style.borderLeftColor){
            
            let borderLeftColor = document.getElementById('idiv'+divnb).style.borderLeftColor;

            let couleur = CouleurBorder(borderLeftColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur_gauche').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }


        if(document.getElementById('idiv'+divnb).style.borderStyle){
            let borderStyle = document.getElementById('idiv'+divnb).style.borderStyle;
            document.getElementById('op_bordure_type').value = borderStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        // Bordure séparer
        if(document.getElementById('idiv'+divnb).style.borderTopStyle){
            let borderTopStyle = document.getElementById('idiv'+divnb).style.borderTopStyle;
            document.getElementById('op_bordure_type_haut').value = borderTopStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        if(document.getElementById('idiv'+divnb).style.borderRightStyle){
            let borderRightStyle = document.getElementById('idiv'+divnb).style.borderRightStyle;
            document.getElementById('op_bordure_type_droit').value = borderRightStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        if(document.getElementById('idiv'+divnb).style.borderBottomStyle){
            let borderBottomStyle = document.getElementById('idiv'+divnb).style.borderBottomStyle;
            document.getElementById('op_bordure_type_bas').value = borderBottomStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        if(document.getElementById('idiv'+divnb).style.borderLeftStyle){
            let borderLeftStyle = document.getElementById('idiv'+divnb).style.borderLeftStyle;
            document.getElementById('op_bordure_type_gauche').value = borderLeftStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        

        // partie bordure arrondi
        if(document.getElementById('idiv'+divnb).style.borderTopLeftRadius){
            let borderTopLeftRadius = document.getElementById('idiv'+divnb).style.borderTopLeftRadius;
            document.getElementById('op_bordure_hg').value = borderTopLeftRadius.substring(borderTopLeftRadius.search('%'),0);
        }
        if(document.getElementById('idiv'+divnb).style.borderTopRightRadius){
            let borderTopRightRadius = document.getElementById('idiv'+divnb).style.borderTopRightRadius;
            document.getElementById('op_bordure_hd').value = borderTopRightRadius.substring(borderTopRightRadius.search('%'),0);
        }
        if(document.getElementById('idiv'+divnb).style.borderBottomLeftRadius){
            let borderBottomLeftRadius = document.getElementById('idiv'+divnb).style.borderBottomLeftRadius;
            document.getElementById('op_bordure_bg').value = borderBottomLeftRadius.substring(borderBottomLeftRadius.search('%'),0);
        }
        if(document.getElementById('idiv'+divnb).style.borderBottomRightRadius){
            let borderBottomRightRadius = document.getElementById('idiv'+divnb).style.borderBottomRightRadius;
            document.getElementById('op_bordure_bd').value = borderBottomRightRadius.substring(borderBottomRightRadius.search('%'),0);
        }
        
    }

    if(parcour_menu == 3){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = '';
        document.getElementById('bordure').innerHTML = '';
        document.getElementById('position').innerHTML = op_position;
        document.getElementById('autre').innerHTML = '';

        // Partie margin
        if(document.getElementById('idiv'+divnb).style.marginTop){
            let marginTop = document.getElementById('idiv'+divnb).style.marginTop;
            document.getElementById('op_marge_haut').value = marginTop;//.substring(0,marginTop.length-2);
        }
        if(document.getElementById('idiv'+divnb).style.marginRight){
            let marginRight = document.getElementById('idiv'+divnb).style.marginRight;
            document.getElementById('op_marge_droit').value = marginRight;//.substring(0,marginRight.length-2);
        }
        if(document.getElementById('idiv'+divnb).style.marginBottom){
            let marginBottom = document.getElementById('idiv'+divnb).style.marginBottom;
            document.getElementById('op_marge_bas').value = marginBottom;//.substring(0,marginBottom.length-2);
        }
        if(document.getElementById('idiv'+divnb).style.marginLeft){
            let marginLeft = document.getElementById('idiv'+divnb).style.marginLeft;
            document.getElementById('op_marge_gauche').value = marginLeft;//.substring(0,marginLeft.length-2);
        }
        
        // Partie Padding
        if(document.getElementById('idiv'+divnb).style.paddingTop){
            let paddingTop = document.getElementById('idiv'+divnb).style.paddingTop;
            document.getElementById('op_padding_haut').value = paddingTop;//.substring(0,paddingTop.length-2);
        }
        if(document.getElementById('idiv'+divnb).style.paddingRight){
            let paddingRight = document.getElementById('idiv'+divnb).style.paddingRight;
            document.getElementById('op_padding_droit').value = paddingRight;//.substring(0,paddingRight.length-2);
        }
        if(document.getElementById('idiv'+divnb).style.paddingBottom){
            let paddingBottom = document.getElementById('idiv'+divnb).style.paddingBottom;
            document.getElementById('op_padding_bas').value = paddingBottom;//.substring(0,paddingBottom.length-2);
        }
        if(document.getElementById('idiv'+divnb).style.paddingLeft){
            let paddingLeft = document.getElementById('idiv'+divnb).style.paddingLeft;
            document.getElementById('op_padding_bas').value = paddingLeft;//.substring(0,paddingLeft.length-2);
        } 
    }

    if(parcour_menu == 4){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = '';
        document.getElementById('bordure').innerHTML = '';
        document.getElementById('position').innerHTML = '';
        document.getElementById('autre').innerHTML = op_autre;

        if(document.getElementById('idiv'+divnb).style.backgroundColor){
            
            let textColor = document.getElementById('idiv'+divnb).style.backgroundColor;
            console.log(textColor);

            let couleur = CouleurBorder(textColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX
            console.log(couleur);

            document.getElementById('op_backgrouwn_couleur').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }

        if(document.getElementById('idiv'+divnb).style.opacity){
            let opacity = document.getElementById('idiv'+divnb).style.opacity;
            document.getElementById('op_opacite').value = opacity;//.substring(opacity.search('%'),0);
        }

    }

    inter = setInterval(op_update_div,250,divnb);
}




function op_update_div(divnb){ // modifier pour chaque composant car il y a un risque de conflie de fonction    
    // permet d'afficher les modification
    
    if(parcour_menu == 1){ // Module Contenue

        

    

    }

    if(parcour_menu == 2){ // Module Bordure
        
        if(document.getElementById('op_bordure').value){
            document.getElementById('idiv'+divnb).style.border = document.getElementById('op_bordure').value +"px "+document.getElementById('op_bordure_type').value+" "+document.getElementById('op_border_couleur').value; // document.getElementById('op_border_couleur').value = borderColor
        }else{document.getElementById('idiv'+divnb).style.border = null}
        
        // Partie Bordure séparer
        if(document.getElementById('op_bordure_haut').value){
            document.getElementById('idiv'+divnb).style.borderTop = document.getElementById('op_bordure_haut').value +"px "+document.getElementById('op_bordure_type_haut').value+" "+document.getElementById('op_border_couleur_haut').value;
        }//else{document.getElementById('idiv'+divnb).style.borderTop = null}

        if(document.getElementById('op_bordure_droit').value){
            document.getElementById('idiv'+divnb).style.borderRight = document.getElementById('op_bordure_droit').value +"px "+document.getElementById('op_bordure_type_droit').value+" "+document.getElementById('op_border_couleur_droit').value;
        }//else{document.getElementById('idiv'+divnb).style.borderRight = null}

        if(document.getElementById('op_bordure_bas').value){
            document.getElementById('idiv'+divnb).style.borderBottom = document.getElementById('op_bordure_bas').value +"px "+document.getElementById('op_bordure_type_bas').value+" "+document.getElementById('op_border_couleur_bas').value;
        }//else{document.getElementById('idiv'+divnb).style.borderBottom = null}

        if(document.getElementById('op_bordure_gauche').value){
            document.getElementById('idiv'+divnb).style.borderLeft = document.getElementById('op_bordure_gauche').value +"px "+document.getElementById('op_bordure_type_gauche').value+" "+document.getElementById('op_border_couleur_gauche').value;
        }//else{document.getElementById('idiv'+divnb).style.borderLeft = null}    
        

        if(document.getElementById('op_bordure').value){ // Style pour tout les coté de la bordure
            // Different Type de bordure    
                document.getElementById('idiv'+divnb).style.borderStyle = document.getElementById('op_bordure_type').value;
        }//else{document.getElementById('idiv'+divnb).style.borderStyle = null}


        if(document.getElementById('op_bordure_haut').value){// Style pour tout les coté TOP de la bordure
            // Different Type de bordure    
                document.getElementById('idiv'+divnb).style.borderTopStyle = document.getElementById('op_bordure_type_haut').value;
        }//else{document.getElementById('idiv'+divnb).style.borderTopStyle = null}

        if(document.getElementById('op_bordure_droit').value){ // Style pour tout les coté RIGHT de la bordure
            // Different Type de bordure    
                document.getElementById('idiv'+divnb).style.borderRightStyle = document.getElementById('op_bordure_type_droit').value;
        }//else{document.getElementById('idiv'+divnb).style.borderRightStyle = null}

        if(document.getElementById('op_bordure_bas').value){ // Style pour tout les coté BOTTOM de la bordure
            // Different Type de bordure    
                document.getElementById('idiv'+divnb).style.borderBottomStyle = document.getElementById('op_bordure_type_bas').value;
        }//else{document.getElementById('idiv'+divnb).style.borderBottomStyle = null}

        if(document.getElementById('op_bordure_gauche').value){ // Style pour tout les coté LEFT de la bordure
            // Different Type de bordure    
                document.getElementById('idiv'+divnb).style.borderLeftStyle = document.getElementById('op_bordure_type_gauche').value;
        }//else{document.getElementById('idiv'+divnb).style.borderLeftStyle = null}

        


        // Partie bordure arrondie
        if(document.getElementById('op_bordure').value || document.getElementById('op_bordure_haut').value || document.getElementById('op_bordure_droit').value || document.getElementById('op_bordure_bas').value || document.getElementById('op_bordure_gauche').value){
            
            document.getElementById('idiv'+divnb).style.borderTopLeftRadius = document.getElementById('op_bordure_hg').value+'%';
        }else{document.getElementById('idiv'+divnb).style.borderTopLeftRadius = null}
        
        if(document.getElementById('op_bordure').value || document.getElementById('op_bordure_haut').value || document.getElementById('op_bordure_droit').value || document.getElementById('op_bordure_bas').value || document.getElementById('op_bordure_gauche').value){
            
            document.getElementById('idiv'+divnb).style.borderTopRightRadius = document.getElementById('op_bordure_hd').value+'%';
        }else{document.getElementById('idiv'+divnb).style.borderTopRightRadius = null}
        
        if(document.getElementById('op_bordure').value || document.getElementById('op_bordure_haut').value || document.getElementById('op_bordure_droit').value || document.getElementById('op_bordure_bas').value || document.getElementById('op_bordure_gauche').value){
            
            document.getElementById('idiv'+divnb).style.borderBottomLeftRadius = document.getElementById('op_bordure_bg').value+'%';
        }else{document.getElementById('idiv'+divnb).style.borderBottomLeftRadius = null}
        
        if(document.getElementById('op_bordure').value || document.getElementById('op_bordure_haut').value || document.getElementById('op_bordure_droit').value || document.getElementById('op_bordure_bas').value || document.getElementById('op_bordure_gauche').value){
            
            document.getElementById('idiv'+divnb).style.borderBottomRightRadius = document.getElementById('op_bordure_bd').value+'%';
        }else{document.getElementById('idiv'+divnb).style.borderBottomRightRadius = null}

        document.getElementById('af_op_bordure_hg').innerHTML = document.getElementById('op_bordure_hg').value+'%';
        document.getElementById('af_op_bordure_hd').innerHTML = document.getElementById('op_bordure_hd').value+'%';
        document.getElementById('af_op_bordure_bg').innerHTML = document.getElementById('op_bordure_bg').value+'%';
        document.getElementById('af_op_bordure_bd').innerHTML = document.getElementById('op_bordure_bd').value+'%';
    }

    if(parcour_menu == 3){ // Module Position

        // Partie Marging
        if(document.getElementById('op_marge_haut').value){
        document.getElementById('idiv'+divnb).style.marginTop = document.getElementById('op_marge_haut').value;// +"px";
        }else{document.getElementById('idiv'+divnb).style.marginTop = null}

        if(document.getElementById('op_marge_droit').value){
        document.getElementById('idiv'+divnb).style.marginRight = document.getElementById('op_marge_droit').value;// +"px";
        }else{document.getElementById('idiv'+divnb).style.marginRight = null}

        if(document.getElementById('op_marge_bas').value){
        document.getElementById('idiv'+divnb).style.marginBottom = document.getElementById('op_marge_bas').value;// +"px";
        }else{document.getElementById('idiv'+divnb).style.marginBottom = null}

        if(document.getElementById('op_marge_gauche').value){
            document.getElementById('idiv'+divnb).style.marginLeft = document.getElementById('op_marge_gauche').value;// +"px";
        }else{document.getElementById('idiv'+divnb).style.marginLeft = null}


        // Partie Padding
        if(document.getElementById('op_padding_haut').value){
            document.getElementById('idiv'+divnb).style.paddingTop = document.getElementById('op_padding_haut').value;// +"px";
        }else{document.getElementById('idiv'+divnb).style.paddingTop = null}
        
        if(document.getElementById('op_padding_droit').value){
            document.getElementById('idiv'+divnb).style.paddingRight = document.getElementById('op_padding_droit').value;// +"px";
        }else{document.getElementById('idiv'+divnb).style.paddingRight = null}
        
        if(document.getElementById('op_padding_bas').value){
            document.getElementById('idiv'+divnb).style.paddingBottom = document.getElementById('op_padding_bas').value;// +"px";
        }else{document.getElementById('idiv'+divnb).style.paddingBottom = null}
        
        if(document.getElementById('op_padding_gauche').value){
            document.getElementById('idiv'+divnb).style.paddingLeft = document.getElementById('op_padding_gauche').value;// +"px";
        }else{document.getElementById('idiv'+divnb).style.paddingLeft = null}
        
        
    }

    if(parcour_menu == 4){ // Module autre
        
        if(document.getElementById('op_backgrouwn_couleur').value != '#ffffff'){

            document.getElementById('idiv'+divnb).style.backgroundColor = document.getElementById('op_backgrouwn_couleur').value;

        }else{document.getElementById('idiv'+divnb).style.backgroundColor = null}
        
        if(document.getElementById('op_opacite').value != '100'){
            document.getElementById('idiv'+divnb).style.opacity = document.getElementById('op_opacite').value+'%';
        }else{document.getElementById('idiv'+divnb).style.opacity = null}

        document.getElementById('af_op_opacite').innerHTML = document.getElementById('op_opacite').value+'%';
        
        
    }
}
