<?php 
    session_start();
    include('connectionBDD.php');
    $id = $_GET['id'];
    
    // récuperer info du fichier pour pouvoir le suprimer
    $requete = "SELECT * FROM `page` WHERE id=".$id."";
    $exec_requete = mysqli_query($db,$requete);
    $reponse      = mysqli_fetch_array($exec_requete);
    echo "supression des donnée en cours d'execution <br>";
    echo $reponse['auteur']."<br>";
    echo $reponse['date']."<br>";
    echo $reponse['titre']."<br>";
    echo $reponse['Structure']."<br>";
    echo $reponse['Chemain']."<br>";
    
    unlink('.'.$reponse['Chemain']); // rajoue du '.' au debut pour trouver le ficher correspondans 
    //sinon il ne le trouvera pas et la supression ne pouras pas ce faire correctement

    // Supression des donnée ddns la base de donnée
    $requete2 = "DELETE FROM `page` WHERE id=".$id."";
    $exec_requete2 = mysqli_query($db,$requete2);
    $reponse2      = mysqli_fetch_array($exec_requete2);
    header('Location: ../index.php?page');
    mysqli_close($db); // fermer la connexion

    

?>