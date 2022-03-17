<?php
include('../Fonction-Requet/connectionBDD.php');
$description = $_POST['description'];
$id = $_POST['id'];

    $requete = "UPDATE `page` SET `description` = '".$description."' WHERE `id` = '".$id."'";
    $exec_requete = mysqli_query($db,$requete);
    if($exec_requete){
        echo 'REQUETE REUSSIS';
    }
    //echo $requete;
    header('Location: ../index.php?page');
?>