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
        function sup_art(id){
            if ( confirm( "Voulez vous suprimer cette article" ) ) {
                // suprime (true)
               window.location = "./Fonction-Requet/suprimer_article.php?id="+id;
            } else {
                // rien (false)
            }
        }
        function sup_pag(id){
            if ( confirm( "Voulez vous suprimer cette page" ) ) {
                // suprime (true)
               window.location = "./Fonction-Requet/suprimer_page.php?id="+id;
            } else {
                // rien (false)
            }
        }

        function param_art_pag(id,nb){
            console.log('test');
            console.log(id);
            console.log(document.getElementById('btligneid'+id).innerHTML);
            if(nb == 2){ // Pour la PAGE
                if(document.getElementById('btligneid'+id).innerHTML == ''){
                    console.log('yes');
                    document.getElementById('btligneid'+id).style.visibility = 'visible';
                    document.getElementById('btligneid'+id).innerHTML = '<span>Changer le titre : </span><input type="text" value="" placeholder="Changer le titre"></input><span>Modifier la description : </span><input type="text" value="" placeholder="Changer la description"></input><a class="boutton" href="./Menu-Page/creation_page.php?Modification='+id+'">modifier le conteue</a><button class="boutton" onclick="sup_pag('+id+')"">suprimer</button>';
                    document.getElementById('bt_fleche'+id).innerHTML = '↑';
                }else{
                    console.log('no');
                    document.getElementById('btligneid'+id).style.visibility = 'hidden';
                    document.getElementById('btligneid'+id).innerHTML = '';
                    document.getElementById('bt_fleche'+id).innerHTML = '↓';
                }
            }else if(nb == 1){ // Pour l'ARTICLE
                if(document.getElementById('btligneid'+id).innerHTML == ''){
                    console.log('yes');
                    document.getElementById('btligneid'+id).style.visibility = 'visible';
                    document.getElementById('btligneid'+id).innerHTML = '<span>Changer le titre : </span><input type="text" value="" placeholder="Changer le titre"></input><span>Modifier la description : </span><input type="text" value="" placeholder="Changer la description"></input><a class="boutton" href="./Menu-Page/creation_article.php?Modification='+id+'">modifier le conteue</a><button class="boutton" onclick="sup_art('+id+')">suprimer</button>';
                    document.getElementById('bt_fleche'+id).innerHTML = '↑';
                }else{
                    console.log('no');
                    document.getElementById('btligneid'+id).style.visibility = 'hidden';
                    document.getElementById('btligneid'+id).innerHTML = '';
                    document.getElementById('bt_fleche'+id).innerHTML = '↓';
                }
            }
            

        }
        
    </script>
    <?php include('Fonction-Requet/function_media.php'); // Fonction: upload, supression, changement de catégorie ?>
    <script type="text/javascript" src="Fonction-Requet/menu.js">// Pour switch entre les menu gace au fonction qui sont dans ce fichier</script>
    <?php include('Fonction-Requet/lienCheck.php'); // Permet de lier les lien avec le menu pour garder un menu ouver apres une modification ?>
</html>