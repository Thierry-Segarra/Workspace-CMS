<?php
if (isset($_POST['nomcategorie'])) {   
    $nom = $_POST['nomcategorie'];
    //$date = date("YmdHis");
    include("connectionBDD.php");
    $requete1 = "INSERT INTO `categorie`(`nom`) VALUES ('".$nom."')";
    $exec_requete1 = mysqli_query($db,$requete1);
    header('location:../index.php?parametre=1'); // redirige vers la page media
}
?>