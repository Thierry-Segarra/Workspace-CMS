<script>
    function parametre_categorie_cate_pag_art(){
        categorie_parametre = 0;
        document.getElementById("upload_media_liste").innerHTML= `<?php include("./Fonction-Requet/parametre_newcategorie.php")?>`; 
        document.getElementById("affiche_media_liste").innerHTML= `<?php include("./Fonction-Requet/parametre_categorie.php") ?>`; 
    }
    /*
    function media_categorie_Video(){
        categorie_media = 1;
        document.getElementById("upload_media_liste").innerHTML= `<?php //include("./Fonction-Requet/upload_video.php")?>`; 
        document.getElementById("affiche_media_liste").innerHTML= `<?php //include("./Fonction-Requet/media_video.php") ?>`; 
    }
    function media_categorie_Doc(){
        categorie_media = 2;
        document.getElementById("upload_media_liste").innerHTML= `<?php //include("./Fonction-Requet/upload_doc.php")?>`; 
        document.getElementById("affiche_media_liste").innerHTML= `<?php// include("./Fonction-Requet/media_doc.php") ?>`; 
    }
    */

</script>