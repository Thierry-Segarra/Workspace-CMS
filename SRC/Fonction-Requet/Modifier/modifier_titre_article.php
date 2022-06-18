<?php
include('../Fonction/connectionBDD.php');
$titre = $_POST['titre'];
$id = $_POST['id'];

    $requete = "SELECT * FROM `article` WHERE id='".$id."'";
    $exec_requete = mysqli_query($db,$requete);
    $reponse      = mysqli_fetch_array($exec_requete);

    rename('../../Article/'.$reponse['titre'].'.php', '../../Article/'.$titre.".php");
    
    $requete = "UPDATE `article` SET `titre` = '".$titre."', `Chemain` = './Article/".$titre.".php' WHERE `id` = '".$id."'";
    $exec_requete = mysqli_query($db,$requete);
    if($exec_requete){
        
        echo 'REQUETE REUSSIS';
    }
    
    //echo $requete;
    header('Location: ../../../index.php?article');
?>