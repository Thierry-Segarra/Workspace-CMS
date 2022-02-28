<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Segarra Portfolio.com</title>
        <link rel="stylesheet" href="Style.css">
    </head>
    <body class="bodd">
        <section class="menu">
        <ul class="list">
            <li class="souslist"><p class="titre">Back Office</p></li>
            <li class="souslist"><button onclick="B1()" class="bouton">Tableau de bort</button></li>
            <li class="souslist"><button onclick="B2()" class="bouton">Article</button></li>
            <li class="souslist"><button onclick="B3()" class="bouton">media</button></li>
            <li class="souslist"><button class="bouton">Paramètre</button></li>
        </ul>
        </section>
        <section class="panneau" id="info">
        
        </section>
    </body>
    <!-- PARTI SCRIPT ET INCLUDE PHP -->
    <?php include('Fonction-Requet/connectionBDD.php'); ?>
    <script>
        var mode_supimage = 0;
        /* src="Fonction-Requet/menu.js" Bouton B1*/ var linkB1 = `<?php include("Menu-Page/tableau-de-bord.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B2*/ var linkB2 = `<?php include("Menu-Page/article.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B2*/ var linkB3 = `<?php include("Menu-Page/media.php") ?>`;
        function sup(id){
            if ( confirm( "Voulez vous suprimer cette article" ) ) {
                // suprime (true)
               window.location = "./Fonction-Requet/suprimer_article.php?id="+id;
            } else {
                // rien (false)
            }
        }
        function mode_sup(){
            if(mode_supimage == 0){
                mode_supimage = 1;
                document.getElementById("modesup").innerHTML= "Mode Supression : ON"; 
            }else{
                mode_supimage = 0;
                document.getElementById("modesup").innerHTML= "Mode Supression : OFF"; 
            }
        }
        function suprim_image(id){
            if(mode_supimage == 1){
            if ( confirm( "Voulez vous suprimer cette image" ) ) {
                // suprime (true)
               window.location = "./Fonction-Requet/suprimer_image.php?id="+id;
            } else {
                // rien (false)
            }
            }
        }

        function media_categorie_Image(){
            document.getElementById("upload_media_liste").innerHTML= `<?php include("./Fonction-Requet/upload_image.php")?>`; 
            document.getElementById("affiche_media_liste").innerHTML= `<?php include("./Fonction-Requet/media_image.php") ?>`; 
        }
        function media_categorie_Video(){
            document.getElementById("upload_media_liste").innerHTML= `<?php include("./Fonction-Requet/upload_video.php")?>`; 
            document.getElementById("affiche_media_liste").innerHTML= `<?php include("./Fonction-Requet/media_video.php") ?>`; 
        }

    </script>
    <script type="text/javascript" src="Fonction-Requet/menu.js">// Pour switch entre les menu gace au fonction qui sont dans ce fichier</script>
    <?php include('Fonction-Requet/lienCheck.php'); // Permet de lier les lien avec le menu pour garder un menu ouver apres une modification ?>
</html>