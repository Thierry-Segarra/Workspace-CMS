<?php
session_start();
if(isset($_POST['titre']) && isset($_POST['HTML']) && isset($_POST['CSS']))
{
    // connexion à la base de données
    include('connectionBDD.php');
    
    // on applique les deux fonctions mysqli_real_escape_string et htmlspecialchars
    // pour éliminer toute attaque de type injection SQL et XSS
    $titre = mysqli_real_escape_string($db,htmlspecialchars($_POST['titre']));
    // a voir  $textarea = mysqli_real_escape_string($db,htmlspecialchars($_POST['textarea']));
    $HTML = $_POST['HTML'];
    $CSS = $_POST['CSS'];
    
    if($titre !== "" && $HTML !== "" && $CSS !== "")
    {   
        $requete = "INSERT INTO `article`(`auteur`, `date`, `titre`, `HTML`, `CSS`) VALUES ('admin',now(),'".$titre."','".$HTML."','".$CSS."')";
        $exec_requete = mysqli_query($db,$requete);
        $reponse      = mysqli_fetch_array($exec_requete);
        header('Location: ../index.php?article');
    }
    else
    {
       header('Location: ../creation_articles.php?erreur=1'); // utilisateur ou mot de passe vide
    }
}
else
{
   header('Location: ../creation_article.php?erreur=1');
}
mysqli_close($db); // fermer la connexion
?>