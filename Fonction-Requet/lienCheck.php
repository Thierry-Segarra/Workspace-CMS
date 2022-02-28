<?php
    if(isset($_GET['tableau-bord'])){
        echo '<script type="text/javascript">B1()</script>';
        // Pour aller dans le menu "Tableau de Bord"
    }
    else if(isset($_GET['article'])){
        echo '<script type="text/javascript">B2()</script>';
        // Pour aller dans le menu "Article"
    }
    else {
        echo '<script type="text/javascript">B1()</script>';
    }
?>