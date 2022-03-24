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
<?php include("../SRC_creator_function/fluxrss.php");// fichier pour le flux RSS ?>

<?php

$fichier = $page;
$text = file_get_contents('.'.$fichier);
$text =  htmlspecialchars($text);

while(strpos($text, 'listearticlediv') !== false){
    $text = stristr($text,'listearticlediv'); // on recherche si il y a rssdiv dans le text

    $nb = substr($text, 15,2); // Pour récuperer le numerot de la div et de sont composant
    //$text = stristr($text,'http'); // on s'avance jusqu'a sont url pour pas que pour la prochaine recherche si tombe sur le meme element
    $text = substr($text, 15+strlen($nb));
    $text = stristr($text,'categorie selectionner : ');
    $text = substr($text, strlen('categorie selectionner : '));
    $nbcategorie = strpos($text,'div')-5; // -5 pour evité un probleme de traitement
    $categorie = substr($text, 0,$nbcategorie);
    /*
    echo $nb;
    echo '<br><br>';
    echo $text;
    echo '<br><br>';
    echo $categorie;
    echo '<br><br>';
    */
    if($categorie == 'Tout'){
        include('../Fonction-Requet/connectionBDD.php');
        
        // récuperer info du fichier pour pouvoir le suprimer
        $requete = "SELECT * FROM `article`";
        $exec_requete = mysqli_query($db,$requete);
        while ($row = mysqli_fetch_assoc($exec_requete)){
            echo '<br><br>';
            echo $row["titre"];
        };
    }else{
        include('../Fonction-Requet/connectionBDD.php');
        
        // récuperer info du fichier pour pouvoir le suprimer
        $requete = "SELECT * FROM `article` WHERE categorie = '".$categorie."'";
        $exec_requete = mysqli_query($db,$requete);
        while ($row = mysqli_fetch_assoc($exec_requete)){
            echo '<br><br>';
            echo $row["titre"];
        };
    }

    
}
?>