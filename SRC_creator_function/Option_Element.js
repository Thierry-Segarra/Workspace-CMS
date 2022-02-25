function option_element(i,nom_element,element){

    if(nom_element == 'LIGNE'){
        document.getElementById("option_compossan").innerHTML = op_menu_element; // Permet d'afficher les options disponible à cette element
        document.getElementById("menu_option").innerHTML = op_menu; // pour eviter un conflie avec les paramettre
    }else{
        Fermer_op_avancee(); // pour fermer automatiquement la fenetre des option menu avancée (là ou il y a les ligne de liste etc)
        document.getElementById("menu_option").innerHTML = op_menu_element; // Permet d'affichet les option disponible à cette element
    }
    // Information pour differentier les element comme le nom de l'element
    document.getElementById("nom_element").innerHTML = 'OPTION '+nom_element;

    

    if(nom_element == 'IMAGE'){
        // option pour modifier le contenue et la taille d'une image
        document.getElementById("taille").innerHTML = '<p>lien de l`image</p><input name="op_src" id="op_src" type="text"  placeholder="../Image/imagedefaut.png" value="">';
        console.log('IMAGE');
    }else{
        // option pour modifier le contenue et la taille d'un text
        document.getElementById("taille").innerHTML = '<p>contenue</p><input name="op_contenue" id="op_contenue" placeholder="Saisir votre titre" type="text" value=""><p>taille</p><input name="op_taille" id="op_taille" type="text" placeholder="18.72 par defaut" value="">px';

        document.getElementById('op_contenue').value = document.getElementById(element+i).innerHTML; // Permet de selectionné le contenue a modifier
        
        if(document.getElementById(element+i).style.fontSize){
            let fontsize = document.getElementById(element+i).style.fontSize;
            document.getElementById('op_taille').value = fontsize.substring(0,fontsize.length-2);
        }
    }

    if(document.getElementById(element+i).style.width){
        let width = document.getElementById(element+i).style.width;
        document.getElementById('op_taille_width').value = width.substring(0,width.length-2);
    }

    if(document.getElementById(element+i).style.height){
        let height = document.getElementById(element+i).style.height;
        document.getElementById('op_taille_height').value = height.substring(0,height.length-2)
    }    

    if(document.getElementById(element+i).style.border){
        let border = document.getElementById(element+i).style.border;
        document.getElementById('op_bordure').value = border.substring(0,border.length-14) // voir pour la modification de couleur de la border
    }

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
    
    inter = setInterval(op_update_element,250,i,nom_element,element); // permet de changer les ellement en eem temps que l'on ecrit

    /* MARCHE A MOITIER
    document.getElementsByName('op_contenue')[0].addEventListener('change', function (){
        document.getElementById('tidiv'+i).innerHTML = document.getElementById('op_contenue').value;
        
    });
    */

}




function op_update_element(i,nom_element,element){ // modifier pour chaque composant car il y a un risque de conflie de fonction
    // permet d'afficher les modification
    
    // la taille de la balise
    if(nom_element == 'IMAGE'){
        document.getElementById('imadiv'+i).src = document.getElementById('op_src').value; // pour afficher le contenue modifier

    }else{

        // Le contenue de la balise
        document.getElementById(element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier

        // la taille du text
        document.getElementById(element+i).style.fontSize = document.getElementById('op_taille').value +"px"; // pour afficher la taille modifier

        // Modification contenue dans liste des ligne dans une liste
        if (nom_element == 'LIGNE') {
            document.getElementById('trai_'+element+i).innerHTML = document.getElementById('op_contenue').value; // pour afficher le contenue modifier
        }
    }

    document.getElementById(element+i).style.width = document.getElementById('op_taille_width').value +"px";
    document.getElementById(element+i).style.height = document.getElementById('op_taille_height').value +"px";

    // Alignement du text
    document.getElementById(element+i).style.textAlign = document.querySelector('input[name=align]:checked').value; // pour afficher les modificaton fait sur l'alignement du titre

    // Bordure
    document.getElementById(element+i).style.border = document.getElementById('op_bordure').value +"px solid black";
    
    // Partie Marging
    document.getElementById(element+i).style.marginTop = document.getElementById('op_marge_haut').value;// +"px";
    document.getElementById(element+i).style.marginRight = document.getElementById('op_marge_droit').value;// +"px";
    document.getElementById(element+i).style.marginBottom = document.getElementById('op_marge_bas').value;// +"px";
    document.getElementById(element+i).style.marginLeft = document.getElementById('op_marge_gauche').value;// +"px";

    // Partie Padding
    document.getElementById(element+i).style.paddingTop = document.getElementById('op_padding_haut').value;// +"px";
    document.getElementById(element+i).style.paddingRight = document.getElementById('op_padding_droit').value;// +"px";
    document.getElementById(element+i).style.paddingBottom = document.getElementById('op_padding_bas').value;// +"px";
    document.getElementById(element+i).style.paddingLeft = document.getElementById('op_padding_gauche').value;// +"px";

}