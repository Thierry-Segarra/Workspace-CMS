<?php 
    session_start();
    include('connectionBDD.php');
    $id = $_GET['id'];
    
    // récuperer info du fichier pour pouvoir le suprimer
    $requete = "SELECT * FROM `media` WHERE id=".$id."";
    $exec_requete = mysqli_query($db,$requete);
    $reponse      = mysqli_fetch_array($exec_requete);
    echo "supression des donnée en cours d'execution <br>";
    echo $reponse['nom']."<br>";
    echo $reponse['date']."<br>";
    

    // Supression des donnée ddns la base de donnée
    $requete2 = "DELETE FROM `media` WHERE id=".$id."";
    $exec_requete2 = mysqli_query($db,$requete2);
    //$reponse2      = mysqli_fetch_array($exec_requete2);
    header('Location: ../index.php?media=1'); // on change le numerot pour retourner directement dans la catégorie là ou nous étion
    mysqli_close($db); // fermer la connexion

    

?>