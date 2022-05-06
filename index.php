<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Workspace</title>
        <link rel="stylesheet" href="Style.css">
    </head>
    <body class="bodd">
        <section class="menu">
        <ul class="list">
            <li class="souslist"><p class="titre">Back Office</p></li>
            <li class="souslist"><button onclick="B1()" class="bouton">Tableau de bord</button></li>
            <li class="souslist"><button onclick="B4()" class="bouton">Page</button></li>
            <li class="souslist"><button onclick="B2()" class="bouton">Article</button></li>
            <!--<li class="souslist"><button onclick="" class="bouton">Formulaire</button></li> -->
            <li class="souslist"><button onclick="B3()" class="bouton">Media</button></li>
            <li class="souslist"><button onclick="B5()" class="bouton">Paramètre</button></li>
        </ul>
        </section>
        <section class="panneau" id="info">
        
        </section>
    </body>
    <!-- PARTI SCRIPT ET INCLUDE PHP -->
    <?php include('Fonction-Requet/connectionBDD.php'); // connection à la base de donnée ?> 

    <?php include('Fonction-Requet/index_function.php'); // Ce fichier est constituer de plusieur fontion comme la supression de l'article et de page, il a aussi le changement de menu ?>
    
    <?php include('Fonction-Requet/function_media.php'); // Fonction: upload, supression, changement de catégorie ?>
    <?php include('Fonction-Requet/function_parametre.php'); // Fonction pour els parametre: cathégorie ?>
    <script type="text/javascript" src="Fonction-Requet/menu.js">// Pour switch entre les menu gace au fonction qui sont dans ce fichier</script>
    <?php include('Fonction-Requet/lienCheck.php'); // Permet de lier les lien avec le menu pour garder un menu ouver apres une modification ?>
</html>