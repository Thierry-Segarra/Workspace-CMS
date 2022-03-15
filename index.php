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
            <li class="souslist"><button onclick="B4()" class="bouton">Page</button></li>
            <li class="souslist"><button onclick="B2()" class="bouton">Article</button></li>
            <li class="souslist"><button onclick="" class="bouton">Formulaire</button></li>
            <li class="souslist"><button onclick="B3()" class="bouton">Media</button></li>
            <li class="souslist"><button onclick="" class="bouton">Paramètre</button></li>
        </ul>
        </section>
        <section class="panneau" id="info">
        
        </section>
    </body>
    <!-- PARTI SCRIPT ET INCLUDE PHP -->
    <?php include('Fonction-Requet/connectionBDD.php'); ?>
    <script>
        var mode_supression = 0;
        var categorie_media = 0;
        /* src="Fonction-Requet/menu.js" Bouton B1*/ var linkB1 = `<?php include("Menu-Page/tableau-de-bord.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B2*/ var linkB2 = `<?php include("Menu-Page/article.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B3*/ var linkB3 = `<?php include("Menu-Page/media.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B4*/ var linkB4 = `<?php include("Menu-Page/page.php") ?>`;

        // Permet de suprimer un article
        function sup(id){
            if ( confirm( "Voulez vous suprimer cette article" ) ) {
                // suprime (true)
               window.location = "./Fonction-Requet/suprimer_article.php?id="+id;
            } else {
                // rien (false)
            }
        }
        
    </script>
    <?php include('Fonction-Requet/function_media.php'); // Fonction: upload, supression, changement de catégorie ?>
    <script type="text/javascript" src="Fonction-Requet/menu.js">// Pour switch entre les menu gace au fonction qui sont dans ce fichier</script>
    <?php include('Fonction-Requet/lienCheck.php'); // Permet de lier les lien avec le menu pour garder un menu ouver apres une modification ?>
</html>