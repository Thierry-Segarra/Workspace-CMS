<?php
include('../Fonction-Requet/connectionBDD.php');
$categorie = $_POST['categorie'];
$id = $_POST['id'];

$requete = "SELECT * FROM `categorie` WHERE nom='".$categorie."'";
$exec_requete = mysqli_query($db,$requete);
$reponse      = mysqli_fetch_array($exec_requete);
// Pour récuperer l'id du nom de la categorie

$requete2 = "UPDATE `page` SET `categorie` = '".$reponse['id']."' WHERE `id` = '".$id."'";
$exec_requete2 = mysqli_query($db,$requete2);
if($exec_requete2){
    echo 'REQUETE REUSSIS';
}
//echo $requete;
header('Location: ../index.php?page');
?>