<?php
session_start();
if(isset($_POST['titre']) && isset($_POST['HTML']) && isset($_POST['CSS']) && isset($_POST['id']))
{
    // connexion à la base de données
    include('connectionBDD.php');
    
    // on applique les deux fonctions mysqli_real_escape_string et htmlspecialchars
    // pour éliminer toute attaque de type injection SQL et XSS
    $titre = mysqli_real_escape_string($db,htmlspecialchars($_POST['titre']));
    // a voir  $textarea = mysqli_real_escape_string($db,htmlspecialchars($_POST['textarea']));
    $HTML = $_POST['HTML'];
    $CSS = $_POST['CSS'];
    $id = $_POST['id'];
    if($titre !== "" && $HTML !== "" && $CSS !== "")
    {   
        $requete = "UPDATE `article` SET `auteur`='admin',`date`=now(),`titre`='".$titre."',`HTML`='".$HTML."',`CSS`='".$CSS."' WHERE id=".$id."";
        $exec_requete = mysqli_query($db,$requete);
        $reponse      = mysqli_fetch_array($exec_requete);

        if($requete){
            header('Location: ../modifier_article.php?id=9&&succes');
        }

        
    }
    else
    {
       header('Location: ../moditier_article.php?erreur=2'); // utilisateur ou mot de passe vide
    }
}
else
{
   header('Location: ../moditier_article.php?erreur=1');
}
mysqli_close($db); // fermer la connexion
?>