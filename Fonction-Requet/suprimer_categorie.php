<?php 
    session_start();
    include('connectionBDD.php');
    $id = $_GET['id'];
    if($id != '1'){
    
    // récuperer info du fichier pour pouvoir le suprimer
    $requete = "SELECT * FROM `categorie` WHERE id=".$id."";
    $exec_requete = mysqli_query($db,$requete);
    $reponse      = mysqli_fetch_array($exec_requete);
    echo "supression des donnée en cours d'execution <br>";
    echo $reponse['nom']."<br>";
    

    // Supression des donnée ddns la base de donnée
    $requete2 = "DELETE FROM `categorie` WHERE id=".$id."";
    $exec_requete2 = mysqli_query($db,$requete2);
    $reponse2      = mysqli_fetch_array($exec_requete2);
    }
    header('Location: ../index.php?parametre=1'); // on change le numerot pour retourner directement dans la catégorie là ou nous étion
    mysqli_close($db); // fermer la connexion

    

?>