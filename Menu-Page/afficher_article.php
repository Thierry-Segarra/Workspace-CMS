<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>WORKSPACE</title>
        <link rel="stylesheet" href="../Style.css">
    </head>
    <body class="article">
    <?php 
    if (isset($_GET['article'])) {   
        $article = $_GET['article'];
        include('.'.$article);
    }
    ?>
    </body>

</html>
<?php include("../SRC/SRC_creator_function/fluxrss.php");// fichier pour le flux RSS ?>