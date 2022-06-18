<?php
include('../Fonction/connectionBDD.php');
$categorie = $_POST['categorie'];
$id = $_POST['id'];

$requete = "SELECT * FROM `categorie` WHERE nom='".$categorie."'";
$exec_requete = mysqli_query($db,$requete);
$reponse      = mysqli_fetch_array($exec_requete);
// Pour récuperer l'id du nom de la categorie

    $requete = "UPDATE article SET `categorie` = '".$reponse['id']."' WHERE `id` = '".$id."'";
    $exec_requete = mysqli_query($db,$requete);
    if($exec_requete){
        echo 'REQUETE REUSSIS';
    }
    //echo $requete;
    header('Location: ../../../index.php?article');
?>