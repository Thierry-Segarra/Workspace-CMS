<?php 
    session_start();
    include('../Fonction/connectionBDD.php');
    $id = $_GET['id'];
    
    // récuperer info du fichier pour pouvoir le suprimer
    $requete = "SELECT * FROM `article` WHERE id=".$id."";
    $exec_requete = mysqli_query($db,$requete);
    $reponse      = mysqli_fetch_array($exec_requete);
    
    unlink('.'.$reponse['Chemain']); // rajoue du '.' au debut pour trouver le ficher correspondans 
    //sinon il ne le trouvera pas et la supression ne pouras pas ce faire correctement

    // Supression des donnée ddns la base de donnée
    $requete2 = "DELETE FROM `article` WHERE id=".$id."";
    $exec_requete2 = mysqli_query($db,$requete2);
    header('Location: ../../../index.php?article');
    mysqli_close($db); // fermer la connexion

    

?>