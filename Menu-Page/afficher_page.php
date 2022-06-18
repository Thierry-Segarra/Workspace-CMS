<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>WORKSPACE</title>
        <link rel="stylesheet" href="../Style.css">
    </head>

    <?php 
    if (isset($_GET['page'])) {   
        $page = $_GET['page'];
        include('.'.$page);
    }
    ?>

</html>
<?php include("../SRC/SRC_creator_function/fluxrss.php");// fichier pour le flux RSS ?>
<?php include("../SRC/SRC_creator_function/listearticle.php");// fichier pour afficher les articles ?>
