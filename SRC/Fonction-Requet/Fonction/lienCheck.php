<?php
    if(isset($_GET['tableau-bord'])){
        echo '<script type="text/javascript">B1()</script>';
        // Pour aller dans le menu "Tableau de Bord"
    }
    else if(isset($_GET['article'])){
        echo '<script type="text/javascript">B2()</script>';
        // Pour aller dans le menu "Article"
    }
    else if(isset($_GET['media'])){
        $media = $_GET['media']; // pour afficher le menu avant rechargement de la page
        echo '<script type="text/javascript">B3();categorie_media='.$media.';categorie();</script>';
        // Pour aller dans le menu "Media"
    }
    else if(isset($_GET['page'])){
        echo '<script type="text/javascript">B4()</script>';
        // Pour aller dans le menu "Page"
    }
    else if(isset($_GET['parametre'])){
        $parametre = $_GET['parametre'];
        echo '<script type="text/javascript">B5();categorie_parametre='.$parametre.';categorie_template();</script>';
        // Pour aller dans le menu "Parametre"
    }
    else{
        echo '<script type="text/javascript">B1()</script>';
    }
?>