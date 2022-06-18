<?php
include('../Fonction/connectionBDD.php');
$titre = $_POST['titre'];
$id = $_POST['id'];

    $requete = "UPDATE `categorie` SET `nom` = '".$titre."' WHERE `id` = '".$id."'";
    $exec_requete = mysqli_query($db,$requete);
    if($exec_requete){
        echo 'REQUETE REUSSIS';
    }
    //echo $requete;
    header('Location: ../../../index.php?parametre=1');
?>