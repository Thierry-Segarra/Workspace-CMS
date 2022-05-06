<?php
include('../Fonction-Requet/connectionBDD.php');
$titre = $_POST['titre'];
$id = $_POST['id'];

    $requete = "SELECT * FROM `page` WHERE id='".$id."'";
    $exec_requete = mysqli_query($db,$requete);
    $reponse      = mysqli_fetch_array($exec_requete);

    rename('../page/'.$reponse['titre'].'.php', '../page/'.$titre.".php");

    $requete = "UPDATE `page` SET `titre` = '".$titre."', `Chemain` = './Page/".$titre.".php' WHERE `id` = '".$id."'";
    $exec_requete = mysqli_query($db,$requete);
    if($exec_requete){
        echo 'REQUETE REUSSIS';
    }
    //echo $requete;
    header('Location: ../index.php?page');
?>