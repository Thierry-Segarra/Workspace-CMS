var parcour_menu = 0;
var stock_i = 0;
var stock_nom_element = '';
var stock_element = '';
var onoff = 0;


function option_element(i,nom_element,element,divnb,compnb){
    stock_divnb = divnb;
    stock_compnb = compnb;
    // i = numerot du composans
    // nom_ellement = nom de l'ellement ex TITRE, TEXT, LISTE ...
    // element = l'identifiant de l'ellement ex imadiv ...
    // divnb = numero de la div
    // compnb = numero du composans

    stock_i = i;
    stock_nom_element = nom_element;
    stock_element = element;

    gras = 0;
    italique = 0;
    ligne = 0;
    


    if(nom_element == 'LIGNE' || nom_element == 'LIENRSS'){

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
        //document.getElementById('contenue').innerHTML = op_contenue;
        document.getElementById('bordure').innerHTML = '';
        document.getElementById('position').innerHTML = '';
        document.getElementById('autre').innerHTML = '';

        if(nom_element == 'IMAGE'){
            // option pour modifier le contenue et la taille d'une image
            document.getElementById("contenue").innerHTML = '<p>lien de l`image</p><button id="op_plus" onclick="contenue_media_image()" >Option Image</button><p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value=""><br><br>';
            //document.getElementById('op_src').value = document.getElementById(element+i).src; // Permet de selectionné le contenue a modifier

            if(document.getElementById(element+i).style.width){
                let width = document.getElementById(element+i).style.width;
                document.getElementById('op_taille_width').value = width;//.substring(0,width.length-2);
            }

        }else if(nom_element == 'VIDEO'){
            // option pour modifier le contenue et la taille d'une image
            document.getElementById("contenue").innerHTML = '<p>lien de la video</p><button id="op_plus" onclick="contenue_media_video()" >Option Ligne</button><p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value=""><br>';

            if(document.getElementById(element+i).style.width){
                let width = document.getElementById(element+i).style.width;
                document.getElementById('op_taille_width').value = width;//.substring(0,width.length-2);
            }

        }else if(nom_element == 'LISTE'){

            document.getElementById("contenue").innerHTML = '<p>Modifer contenue de la liste</p><button id="op_plus" onclick="clearInterval(inter),contenue_Liste('+i+','+stock_divnb+','+stock_compnb+')">Option Ligne</button><p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value=""><br><br>';

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


        }else if(nom_element == 'MAP'){

            document.getElementById("contenue").innerHTML = '<p>Modifer adresse sur a map</p><button onclick="apercu_map(`div'+divnb+'comp'+compnb+'`,`'+element+i+'`)">Aperçus de la localisation</button><br><input name="op_adresse_map" id="op_adresse_map" type="text" placeholder="marseille" value=""><br><br><p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value="">px<br><label for="op_taille_height">Hauteur</label><br><input name="op_taille_height" id="op_taille_height" type="text" placeholder="image par defaut" value="">px<br>';

            document.getElementById('op_adresse_map').value = adresse(document.getElementById(element+i).attributes.src.value);

            if(document.getElementById(element+i).style.width){
                let width = document.getElementById(element+i).style.width;
                document.getElementById('op_taille_width').value = width.substring(0,width.length-2);
            }
        
            if(document.getElementById(element+i).style.height){
                let height = document.getElementById(element+i).style.height;
                document.getElementById('op_taille_height').value = height.substring(0,height.length-2)
            } 

        }else if(nom_element == 'TITRE' || nom_element == 'TEXT' || nom_element == 'LIGNE'){
            // option pour modifier le contenue et la taille d'un text
            document.getElementById("contenue").innerHTML = '<p>contenue dans le texte</p><button onclick="text_gras()">B</button><button onclick="text_italique()">I</button><button onclick="text_ligne()">U</button><input type="color" id="op_text_couleur" name="couleur" value="#000000"><br><input name="op_contenue" id="op_contenue" placeholder="Saisir votre titre" type="text" value=""><p>taille</p><input name="op_taille" id="op_taille" type="text" placeholder="18.72 par defaut" value="">px<p>taille de l`element</p><label for="op_taille_width">Largeur</label><br><input name="op_taille_width" id="op_taille_width" type="text" placeholder="image par defaut" value="">px<br><label for="op_taille_height">Hauteur</label><br><input name="op_taille_height" id="op_taille_height" type="text" placeholder="image par defaut" value="">px<br><p>Alignement</p><input style="position:absolute;visibility: hidden;z-index=-100;" type="radio" id="none" name="align" value="" checked><input type="radio" id="left" name="align" value="left"><label for="left">Left</label><input type="radio" id="center" name="align" value="center"><label for="center">Center</label><input type="radio" id="right" name="align" value="right"><label for="right">Right</label><br><br>';

            if(document.getElementById(element+i).innerHTML){
                document.getElementById('op_contenue').value = document.getElementById(element+i).innerHTML; // Permet de selectionné le contenue a modifier
            }

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

            if(document.getElementById(element+i).style.fontWeight){
                gras = 1;
            }
        
            if(document.getElementById(element+i).style.fontStyle){
                italique = 1;
            }
        
            if(document.getElementById(element+i).style.textDecoration){
                ligne = 1;
            }

            if(document.getElementById(element+i).style.color){
            
                let textColor = document.getElementById(element+i).style.color;
    
                let couleur = CouleurBorder(textColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX
    
                document.getElementById('op_text_couleur').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
            }

        }else if(nom_element == 'RSS'){

            document.getElementById("contenue").innerHTML = '<br><p>Changer le style du flux RSS</p><button id="op_plus" onclick="contenue_style_RSS('+i+','+stock_divnb+','+stock_compnb+')">Option Style</button><p>Alignement</p><input style="position:absolute;visibility: hidden;z-index=-100;" type="radio" id="none" name="align" value="" checked><input type="radio" id="left" name="align" value="left"><label for="left">Left</label><input type="radio" id="center" name="align" value="center"><label for="center">Center</label><input type="radio" id="right" name="align" value="right"><label for="right">Right</label><br><br>';

        }else if(nom_element == 'LIENRSS'){

            document.getElementById("contenue").innerHTML = '<p>Lien flux RSS</p><input name="op_contenue" id="op_contenue" placeholder="Saisir votre titre" type="text" value=""><br><p>Alignement</p><input style="position:absolute;visibility: hidden;z-index=-100;" type="radio" id="none" name="align" value="" checked><input type="radio" id="left" name="align" value="left"><label for="left">Left</label><input type="radio" id="center" name="align" value="center"><label for="center">Center</label><input type="radio" id="right" name="align" value="right"><label for="right">Right</label><br><br>';

            if(document.getElementById(element+i).innerHTML){
                document.getElementById('op_contenue').value = document.getElementById(element+i).innerHTML; // Permet de selectionné le contenue a modifier
            }

        }else if(nom_element == 'ARTICLE'){

            let categorie = categorie_traitement(element+i) // permet de récuperer l'id de l'option selectionner
            option = modif_op_article_categorie(op_article_categorie,categorie); // cette foncvtion permet d'ajouter a la liste de scategorie, la catégorie selectionner

            document.getElementById("contenue").innerHTML = '<p>Categorie Article</p><select name="op_contenue" id="select_categorie">'+option+'</select><br><p>Alignement</p><input style="position:absolute;visibility: hidden;z-index=-100;" type="radio" id="none" name="align" value="" checked><input type="radio" id="left" name="align" value="left"><label for="left">Left</label><input type="radio" id="center" name="align" value="center"><label for="center">Center</label><input type="radio" id="right" name="align" value="right"><label for="right">Right</label><br><br>';

        }else if(nom_element == 'HTML'){
            document.getElementById("contenue").innerHTML = '<p>code HTML</p><textarea name="op_html" id="op_html"></textarea><br><br><p>code CSS</p><textarea name="op_css" id="op_css"></textarea>';

            if(document.getElementById(element+i).innerHTML){
                let html = document.getElementById(element+i).innerHTML;
                document.getElementById('op_html').value = html;
            }

            if(document.getElementById(element+i+'css').innerHTML){
                let html = document.getElementById(element+i+'css').innerHTML;
                document.getElementById('op_css').value = html;
            }

        }else if(nom_element == 'BOUTON'){
            document.getElementById("contenue").innerHTML = '<p>contenue dans le texte</p><input name="op_contenue" id="op_contenue" placeholder="Saisir votre titre" type="text" value=""><br><p>Lien</p><input type="text" name="op_lien" id="op_lien"></input><br><p>Contenue téléchargeable</p><button id="op_plus" onclick="contenue_media_contenue()" >Option Document</button><br>';

            if(document.getElementById(element+i).innerHTML){
                document.getElementById('op_contenue').value = document.getElementById(element+i).innerHTML;
            }
            if(document.getElementById(element+i).attributes.onclick){
                
                let url = lien(document.getElementById(element+i).attributes.onclick.value);
                //console.log(url);
                document.getElementById('op_lien').value = url;
            }
            
        }else if(nom_element == 'DIV'){
            
            document.getElementById("contenue").innerHTML = '<p>Image en Arrière plan</p><button id="op_plus" onclick="contenue_media_image()" >Select Image</button><br><br>';
            
        }else{
            document.getElementById("contenue").innerHTML = '<p>Aucun contenue est disponible pour cette element</p>';

        }
    }

    if(parcour_menu == 2){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = '';
        document.getElementById('bordure').innerHTML = op_bordure;
        document.getElementById('position').innerHTML = '';
        document.getElementById('autre').innerHTML = '';



        if(document.getElementById(element+i).style.border){
            let border = document.getElementById(element+i).style.border;
            //console.log(border.substring(border.search('px'),0));
            document.getElementById('op_bordure').value = border.substring(border.search('px'),0);// Permet de récuperer la taille de la bordure
        }else{
        // Partie border séparer
            if(document.getElementById(element+i).style.borderTop){
                let borderTop = document.getElementById(element+i).style.borderTop;
                document.getElementById('op_bordure_haut').value = borderTop.substring(borderTop.search('px'),0);
            }
            if(document.getElementById(element+i).style.borderRight){
                let borderRight = document.getElementById(element+i).style.borderRight;
                document.getElementById('op_bordure_droit').value = borderRight.substring(borderRight.search('px'),0);
            }
            if(document.getElementById(element+i).style.borderBottom){
                let borderBottom = document.getElementById(element+i).style.borderBottom;
                document.getElementById('op_bordure_bas').value = borderBottom.substring(borderBottom.search('px'),0);
            }
            if(document.getElementById(element+i).style.borderLeft){
                let borderLeft = document.getElementById(element+i).style.borderLeft;
                document.getElementById('op_bordure_gauche').value = borderLeft.substring(borderLeft.search('px'),0);
            }
        }
        if(document.getElementById(element+i).style.borderColor){
            
            let borderColor = document.getElementById(element+i).style.borderColor;

            let couleur = CouleurBorder(borderColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }


        if(document.getElementById(element+i).style.borderTopColor){
            
            let borderTopColor = document.getElementById(element+i).style.borderTopColor;

            let couleur = CouleurBorder(borderTopColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur_haut').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }

        if(document.getElementById(element+i).style.borderRightColor){
            
            let borderRightColor = document.getElementById(element+i).style.borderRightColor;

            let couleur = CouleurBorder(borderRightColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur_droit').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }
        
        if(document.getElementById(element+i).style.borderBottomColor){
            
            let borderBottomColor = document.getElementById(element+i).style.borderBottomColor;

            let couleur = CouleurBorder(borderBottomColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur_bas').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }

        if(document.getElementById(element+i).style.borderLeftColor){
            
            let borderLeftColor = document.getElementById(element+i).style.borderLeftColor;

            let couleur = CouleurBorder(borderLeftColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX

            document.getElementById('op_border_couleur_gauche').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }


        if(document.getElementById(element+i).style.borderStyle){
            let borderStyle = document.getElementById(element+i).style.borderStyle;
            document.getElementById('op_bordure_type').value = borderStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        // Bordure séparer
        if(document.getElementById(element+i).style.borderTopStyle){
            let borderTopStyle = document.getElementById(element+i).style.borderTopStyle;
            document.getElementById('op_bordure_type_haut').value = borderTopStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        if(document.getElementById(element+i).style.borderRightStyle){
            let borderRightStyle = document.getElementById(element+i).style.borderRightStyle;
            document.getElementById('op_bordure_type_droit').value = borderRightStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        if(document.getElementById(element+i).style.borderBottomStyle){
            let borderBottomStyle = document.getElementById(element+i).style.borderBottomStyle;
            document.getElementById('op_bordure_type_bas').value = borderBottomStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        if(document.getElementById(element+i).style.borderLeftStyle){
            let borderLeftStyle = document.getElementById(element+i).style.borderLeftStyle;
            document.getElementById('op_bordure_type_gauche').value = borderLeftStyle;//.substring(borderTopLeftRadius.search('%'),0);
        }
        

        // partie bordure arrondi
        if(document.getElementById(element+i).style.borderTopLeftRadius){
            let borderTopLeftRadius = document.getElementById(element+i).style.borderTopLeftRadius;
            let borderTopLeftRadiusH = borderTopLeftRadius.substring(borderTopLeftRadius.search('%'),0); // On recupere la valeur pour axe horizotal
            let borderTopLeftRadiusV = borderTopLeftRadius.substring(borderTopLeftRadiusH.length+2); // on isole la valeur qui est apres la valuer de l'axe horizontal
            borderTopLeftRadiusV = borderTopLeftRadiusV.substring(borderTopLeftRadiusV.search('%'),0); // On recupere la valeur pour axe vertical
            
            document.getElementById('op_bordure_hg_h').value = borderTopLeftRadiusH;

            if(borderTopLeftRadiusV){
                document.getElementById('op_bordure_hg_v').value = borderTopLeftRadiusV;
            }else{document.getElementById('op_bordure_hg_v').value = 0}
        }

        if(document.getElementById(element+i).style.borderTopRightRadius){
            let borderTopRightRadius = document.getElementById(element+i).style.borderTopRightRadius;
            let borderTopRightRadiusH = borderTopRightRadius.substring(borderTopRightRadius.search('%'),0); // On recupere la valeur pour axe horizotal
            let borderTopRightRadiusV = borderTopRightRadius.substring(borderTopRightRadiusH.length+2); // on isole la valeur qui est apres la valuer de l'axe horizontal
            borderTopRightRadiusV = borderTopRightRadiusV.substring(borderTopRightRadiusV.search('%'),0); // On recupere la valeur pour axe vertical
            
            document.getElementById('op_bordure_hd_h').value = borderTopRightRadiusH;

            if(borderTopRightRadiusV){
                document.getElementById('op_bordure_hd_v').value = borderTopRightRadiusV;
            }else{document.getElementById('op_bordure_hd_v').value = 0}

        }

        if(document.getElementById(element+i).style.borderBottomLeftRadius){
            let borderBottomLeftRadius = document.getElementById(element+i).style.borderBottomLeftRadius;
            let borderBottomLeftRadiusH = borderBottomLeftRadius.substring(borderBottomLeftRadius.search('%'),0); // On recupere la valeur pour axe horizotal
            let borderBottomLeftRadiusV = borderBottomLeftRadius.substring(borderBottomLeftRadiusH.length+2); // on isole la valeur qui est apres la valuer de l'axe horizontal
            borderBottomLeftRadiusV = borderBottomLeftRadiusV.substring(borderBottomLeftRadiusV.search('%'),0); // On recupere la valeur pour axe vertical
            
            document.getElementById('op_bordure_bg_h').value = borderBottomLeftRadiusH;

            if(borderBottomLeftRadiusV){
                document.getElementById('op_bordure_bg_v').value = borderBottomLeftRadiusV;
            }else{document.getElementById('op_bordure_bg_v').value = 0}
        }

        if(document.getElementById(element+i).style.borderBottomRightRadius){
            let borderBottomRightRadius = document.getElementById(element+i).style.borderBottomRightRadius;
            let borderBottomRightRadiusH = borderBottomRightRadius.substring(borderBottomRightRadius.search('%'),0); // On recupere la valeur pour axe horizotal
            let borderBottomRightRadiusV = borderBottomRightRadius.substring(borderBottomRightRadiusH.length+2); // on isole la valeur qui est apres la valuer de l'axe horizontal
            borderBottomRightRadiusV = borderBottomRightRadiusV.substring(borderBottomRightRadiusV.search('%'),0); // On recupere la valeur pour axe vertical
            
            document.getElementById('op_bordure_bd_h').value = borderBottomRightRadiusH;

            if(borderBottomRightRadiusV){
                document.getElementById('op_bordure_bd_v').value = borderBottomRightRadiusV;
            }else{document.getElementById('op_bordure_bd_v').value = 0}
        }
        
    }

    if(parcour_menu == 3){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = '';
        document.getElementById('bordure').innerHTML = '';
        document.getElementById('position').innerHTML = op_position;
        document.getElementById('autre').innerHTML = '';

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

    if(parcour_menu == 4){
        // Affichage du module souhaiter
        document.getElementById('contenue').innerHTML = '';
        document.getElementById('bordure').innerHTML = '';
        document.getElementById('position').innerHTML = '';
        document.getElementById('autre').innerHTML = op_autre;

        if(document.getElementById(element+i).style.backgroundColor){
            
            let textColor = document.getElementById(element+i).style.backgroundColor;
            //console.log(textColor);

            let couleur = CouleurBorder(textColor); // traitement des donnée de la variable borderColor + convertiseur RGB en HEX
            //console.log(couleur);


            document.getElementById('op_backgrouwn_couleur').value = couleur;//.substring(0,border.length-8) // voir pour la modification de couleur de la border
        }
 
        if(document.getElementById(element+i).style.opacity){
            let opacity = document.getElementById(element+i).style.opacity;
            document.getElementById('op_opacite').value = opacity;//.substring(opacity.search('%'),0);
        }

    }

    inter = setInterval(op_update_element,250,i,nom_element,element,stock_divnb);
}




function op_update_element(i,nom_element,element,divnb){ // modifier pour chaque composant car il y a un risque de conflie de fonction    
    // permet d'afficher les modification
    if(parcour_menu == 1){ // Module Contenue

        if(nom_element == 'IMAGE' || nom_element == 'VIDEO'){
            // Modifiaction possible pour les element IMAGE et VIDEO
            if(document.getElementById("switch")){ // c'est une balise tempom pour récuperer les information en php pour js
                if(document.getElementById("switch").src){
                    if(document.getElementById("switch").src != document.getElementById(element+i).src){
                        document.getElementById(element+i).src = document.getElementById("switch").src;
                    }
                }
            }
  
            if(document.getElementById('op_taille_width').value){
                document.getElementById(element+i).style.width = document.getElementById('op_taille_width').value;
            }else{document.getElementById(element+i).style.width = null}
            

        }else if(nom_element == 'BOUTON'){
            if(document.getElementById('op_contenue').value){
                document.getElementById(element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier
            }
            // Modifiaction possible pour les element IMAGE et VIDEO
            if(document.getElementById("switch")){ // c'est une balise tempom pour récuperer les information en php pour js
                if(document.getElementById("switch").src){
                    document.getElementById(element+i).setAttribute("onclick","window.open(`"+document.getElementById("switch").src+"`)");
                    document.getElementById('op_lien').value = document.getElementById("switch").src;
                }
            }

            if(document.getElementById('op_lien').value){
                let lien = document.getElementById('op_lien').value;
                document.getElementById(element+i).setAttribute("onclick","window.open(`"+lien+"`)");
            }

        }else if(nom_element == 'TITRE' || nom_element == 'TEXT' || nom_element == 'LIGNE'){

            // Modifiaction possible pour les element TITRE TEXTE et LIGNE
            // Le contenue de la balise
            document.getElementById(element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier

            // la taille du text
            if(document.getElementById('op_taille').value){
                document.getElementById(element+i).style.fontSize = document.getElementById('op_taille').value +"px"; // pour afficher la taille modifier
            }else{document.getElementById(element+i).style.fontSize = null}

            // Alignement du text
            if(document.querySelector('input[name=align]:checked').value){
                document.getElementById(element+i).style.textAlign = document.querySelector('input[name=align]:checked').value; // pour afficher les modificaton fait sur l'alignement du titre
            }

            if(document.getElementById('op_taille_width').value){
                document.getElementById(element+i).style.width = document.getElementById('op_taille_width').value +"px";
            }else{document.getElementById(element+i).style.width = null}

            if(document.getElementById('op_taille_height').value){
                document.getElementById(element+i).style.height = document.getElementById('op_taille_height').value +"px";
            }else{document.getElementById(element+i).style.height = null}

            if(gras == 1){
                document.getElementById(element+i).style.fontWeight = 'bold';
            }else if(gras == 0){document.getElementById(element+i).style.fontWeight = null}
        
            if(italique == 1){
                document.getElementById(element+i).style.fontStyle = 'italic';
            }else if(italique == 0){document.getElementById(element+i).style.fontStyle = null}
        
            if(ligne == 1){
                document.getElementById(element+i).style.textDecoration = 'underline';
            }else if(ligne == 0){document.getElementById(element+i).style.textDecoration = null}
        
            if(document.getElementById('op_text_couleur').value != '#000000'){
                document.getElementById(element+i).style.color = document.getElementById('op_text_couleur').value;
            }else{document.getElementById(element+i).style.color = null}


            // On verrive si c'est une ligne, si oui on donne dans 'trai_'+element+i le contenue pour qu'il puisse etre modifier en meme temps
            if (nom_element == 'LIGNE') {

                document.getElementById('trai_'+element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier

            }


        }else if(nom_element == 'MAP'){
            
            if(document.getElementById('op_taille_width').value){
                document.getElementById(element+i).style.width = document.getElementById('op_taille_width').value +"px";
            }else{document.getElementById(element+i).style.width = null}

            if(document.getElementById('op_taille_height').value){
                document.getElementById(element+i).style.height = document.getElementById('op_taille_height').value +"px";
            }else{document.getElementById(element+i).style.height = null}

        }else if(nom_element == 'RSS'){
            // Alignement du text
            if(document.querySelector('input[name=align]:checked').value){
                document.getElementById(element+i).style.textAlign = document.querySelector('input[name=align]:checked').value; // pour afficher les modificaton fait sur l'alignement du titre
            }

        }else if(nom_element == 'LIENRSS'){
            // Le contenue de la balise
            document.getElementById(element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier

            document.getElementById('trai_'+element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier

            // Alignement du text
            if(document.querySelector('input[name=align]:checked').value){
                document.getElementById(element+i).style.textAlign = document.querySelector('input[name=align]:checked').value; // pour afficher les modificaton fait sur l'alignement du titre
            }

        }else if(nom_element == 'ARTICLE'){
            let nom_categorie = categorie_traitement_nom(element+i);
            
            if(nom_categorie != document.getElementById('select_categorie').value){
                document.getElementById(element+i).innerHTML = 'categorie selectionner : '+document.getElementById('select_categorie').value;
            }

            if(document.querySelector('input[name=align]:checked').value){
                document.getElementById(element+i).style.textAlign = document.querySelector('input[name=align]:checked').value; // pour afficher les modificaton fait sur l'alignement du titre
            }

        }else if(nom_element == 'HTML'){
            
            document.getElementById(element+i).innerHTML = document.getElementById('op_html').value;

            document.getElementById(element+i+'css').innerHTML = document.getElementById('op_css').value;

        }else if(nom_element == 'DIV'){
            
            if(document.getElementById("switch")){ // c'est une balise tempom pour récuperer les information en php pour js
                if(document.getElementById("switch").src){
                    if(document.getElementById("switch").src != document.getElementById('idiv'+divnb).style.backgroundImage){
                        document.getElementById('idiv'+divnb).style.backgroundImage = 'url('+document.getElementById("switch").src+')';
                        document.getElementById('idiv'+divnb).style.backgroundSize = 'cover';
                    }
                }
            }

        }

    

    }

    if(parcour_menu == 2){ // Module Bordure
        
        if(document.getElementById('op_bordure').value){
            document.getElementById(element+i).style.border = document.getElementById('op_bordure').value +"px "+document.getElementById('op_bordure_type').value+" "+document.getElementById('op_border_couleur').value; // document.getElementById('op_border_couleur').value = borderColor
        }else{document.getElementById(element+i).style.border = null}
        
        // Partie Bordure séparer
        if(document.getElementById('op_bordure_haut').value){
            document.getElementById(element+i).style.borderTop = document.getElementById('op_bordure_haut').value +"px "+document.getElementById('op_bordure_type_haut').value+" "+document.getElementById('op_border_couleur_haut').value;
        }//else{document.getElementById(element+i).style.borderTop = null}

        if(document.getElementById('op_bordure_droit').value){
            document.getElementById(element+i).style.borderRight = document.getElementById('op_bordure_droit').value +"px "+document.getElementById('op_bordure_type_droit').value+" "+document.getElementById('op_border_couleur_droit').value;
        }//else{document.getElementById(element+i).style.borderRight = null}

        if(document.getElementById('op_bordure_bas').value){
            document.getElementById(element+i).style.borderBottom = document.getElementById('op_bordure_bas').value +"px "+document.getElementById('op_bordure_type_bas').value+" "+document.getElementById('op_border_couleur_bas').value;
        }//else{document.getElementById(element+i).style.borderBottom = null}

        if(document.getElementById('op_bordure_gauche').value){
            document.getElementById(element+i).style.borderLeft = document.getElementById('op_bordure_gauche').value +"px "+document.getElementById('op_bordure_type_gauche').value+" "+document.getElementById('op_border_couleur_gauche').value;
        }//else{document.getElementById(element+i).style.borderLeft = null}    
        

        if(document.getElementById('op_bordure').value){ // Style pour tout les coté de la bordure
            // Different Type de bordure    
                document.getElementById(element+i).style.borderStyle = document.getElementById('op_bordure_type').value;
        }//else{document.getElementById(element+i).style.borderStyle = null}


        if(document.getElementById('op_bordure_haut').value){// Style pour tout les coté TOP de la bordure
            // Different Type de bordure    
                document.getElementById(element+i).style.borderTopStyle = document.getElementById('op_bordure_type_haut').value;
        }//else{document.getElementById(element+i).style.borderTopStyle = null}

        if(document.getElementById('op_bordure_droit').value){ // Style pour tout les coté RIGHT de la bordure
            // Different Type de bordure    
                document.getElementById(element+i).style.borderRightStyle = document.getElementById('op_bordure_type_droit').value;
        }//else{document.getElementById(element+i).style.borderRightStyle = null}

        if(document.getElementById('op_bordure_bas').value){ // Style pour tout les coté BOTTOM de la bordure
            // Different Type de bordure    
                document.getElementById(element+i).style.borderBottomStyle = document.getElementById('op_bordure_type_bas').value;
        }//else{document.getElementById(element+i).style.borderBottomStyle = null}

        if(document.getElementById('op_bordure_gauche').value){ // Style pour tout les coté LEFT de la bordure
            // Different Type de bordure    
                document.getElementById(element+i).style.borderLeftStyle = document.getElementById('op_bordure_type_gauche').value;
        }//else{document.getElementById(element+i).style.borderLeftStyle = null}

        


        // Partie bordure arrondie
        if(document.getElementById('op_bordure_hg_h').value != '0' && document.getElementById('op_bordure_hg_v').value != '0'){
            
            document.getElementById(element+i).style.borderTopLeftRadius = document.getElementById('op_bordure_hg_h').value+'%'+document.getElementById('op_bordure_hg_v').value+'%';
        }else{document.getElementById(element+i).style.borderTopLeftRadius = null}
        
        if(document.getElementById('op_bordure_hd_h').value != '0' && document.getElementById('op_bordure_hd_v').value != '0'){
            
            document.getElementById(element+i).style.borderTopRightRadius = document.getElementById('op_bordure_hd_h').value+'%'+document.getElementById('op_bordure_hd_v').value+'%';
        }else{document.getElementById(element+i).style.borderTopRightRadius = null}
        
        if(document.getElementById('op_bordure_bg_h').value != '0' && document.getElementById('op_bordure_bg_v').value != '0'){
            
            document.getElementById(element+i).style.borderBottomLeftRadius = document.getElementById('op_bordure_bg_h').value+'%'+document.getElementById('op_bordure_bg_v').value+'%';
        }else{document.getElementById(element+i).style.borderBottomLeftRadius = null}
        
        if(document.getElementById('op_bordure_bd_h').value != '0' && document.getElementById('op_bordure_bd_v').value != '0'){
            
            document.getElementById(element+i).style.borderBottomRightRadius = document.getElementById('op_bordure_bd_h').value+'%'+document.getElementById('op_bordure_bd_v').value+'%';
        }else{document.getElementById(element+i).style.borderBottomRightRadius = null}

        document.getElementById('af_op_bordure_hg_h').innerHTML = document.getElementById('op_bordure_hg_h').value+'%';
        document.getElementById('af_op_bordure_hd_h').innerHTML = document.getElementById('op_bordure_hd_h').value+'%';
        document.getElementById('af_op_bordure_bg_h').innerHTML = document.getElementById('op_bordure_bg_h').value+'%';
        document.getElementById('af_op_bordure_bd_h').innerHTML = document.getElementById('op_bordure_bd_h').value+'%';

        document.getElementById('af_op_bordure_hg_v').innerHTML = document.getElementById('op_bordure_hg_v').value+'%';
        document.getElementById('af_op_bordure_hd_v').innerHTML = document.getElementById('op_bordure_hd_v').value+'%';
        document.getElementById('af_op_bordure_bg_v').innerHTML = document.getElementById('op_bordure_bg_v').value+'%';
        document.getElementById('af_op_bordure_bd_v').innerHTML = document.getElementById('op_bordure_bd_v').value+'%';
    }

    if(parcour_menu == 3){ // Module Position

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

    if(parcour_menu == 4){ // Module autre

        if(onoff == 0){
            if(nom_element != 'DIV'){
                if(document.getElementById('idiv'+divnb)){

                    if(document.getElementById('idiv'+divnb).style.backgroundColor){
                        
                        if(document.getElementById('op_opacite_couleur').value != '255'){
                            let opaciteCouleur = xdecimal(document.getElementById('op_opacite_couleur').value);

                            document.getElementById(element+i).style.backgroundColor = document.getElementById('op_backgrouwn_couleur').value+opaciteCouleur;
            
                        }else{document.getElementById(element+i).style.backgroundColor = document.getElementById('op_backgrouwn_couleur').value;}
                        
                    }

                }
                if(document.getElementById('op_backgrouwn_couleur').value){

                    if(document.getElementById('op_opacite_couleur').value != '255'){
                        let opaciteCouleur = xdecimal(document.getElementById('op_opacite_couleur').value);

                        document.getElementById(element+i).style.backgroundColor = document.getElementById('op_backgrouwn_couleur').value+opaciteCouleur;
        
                    }else{document.getElementById(element+i).style.backgroundColor = document.getElementById('op_backgrouwn_couleur').value;}

                }else{document.getElementById(element+i).style.backgroundColor = null}

            }else{

                if(document.getElementById('op_opacite_couleur').value != '255'){
                    
                    let opaciteCouleur = xdecimal(document.getElementById('op_opacite_couleur').value);
                    //console.log(document.getElementById('op_opacite_couleur').value);
                    //console.log(document.getElementById('op_backgrouwn_couleur').value);
                    document.getElementById(element+i).style.backgroundColor = document.getElementById('op_backgrouwn_couleur').value+opaciteCouleur;
    
                }else if(document.getElementById('op_backgrouwn_couleur').value != '#ffffff'){
    
                    document.getElementById(element+i).style.backgroundColor = document.getElementById('op_backgrouwn_couleur').value;
    
                }else{document.getElementById(element+i).style.backgroundColor = null}
            }
        
        
        }else{
            document.getElementById(element+i).style.backgroundColor = null
        }
        if(document.getElementById('op_opacite').value != '100'){
            document.getElementById(element+i).style.opacity = document.getElementById('op_opacite').value+'%';
        }else{document.getElementById(element+i).style.opacity = null}
    
        document.getElementById('af_op_opacite_couleur').innerHTML = document.getElementById('op_opacite_couleur').value;
        document.getElementById('af_op_opacite').innerHTML = document.getElementById('op_opacite').value+'%';
        
        
    }

}
