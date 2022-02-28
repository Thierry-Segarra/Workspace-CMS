<!DOCTYPE html>
<html lang="fr">
<?php include('Fonction-Requet/connectionBDD.php');
        $id = $_GET['id'];
        $requete = "SELECT * FROM article where id = ".$id."";
        $exec_requete = mysqli_query($db,$requete);
        $rep = mysqli_fetch_assoc($exec_requete);
        echo '
        <head>
        <meta charset="UTF-8">
        <title>'.$rep['titre'].'</title>
        <link rel="stylesheet" href="Style.css">
        </head>
        ';
        echo $rep['CSS'];
        echo $rep['HTML'];
    ?>
    
</html>