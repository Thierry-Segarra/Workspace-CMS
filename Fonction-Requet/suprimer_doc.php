<?php 
    session_start();
    include('connectionBDD.php');
    $id = $_GET['id'];
    
    // récuperer info du fichier pour pouvoir le suprimer
    $requete = "SELECT * FROM `media` WHERE id=".$id."";
    $exec_requete = mysqli_query($db,$requete);
    $reponse      = mysqli_fetch_array($exec_requete);
    
    unlink('../Document/'.$reponse['nom']); // rajoue du '.' au debut pour trouver le ficher correspondans 
    //sinon il ne le trouvera pas la supression du fichier ne pouras pas ce faire correctement mais la supressino dans la base de données se fera quand meme


    // Supression des donnée ddns la base de donnée
    $requete2 = "DELETE FROM `media` WHERE id=".$id."";
    $exec_requete2 = mysqli_query($db,$requete2);
    header('Location: ../index.php?media=2'); // on change le numerot pour retourner directement dans la catégorie là ou nous étion
    mysqli_close($db); // fermer la connexion

    

?>