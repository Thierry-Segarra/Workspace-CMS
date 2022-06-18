<?php
$db_username = 'root';
$db_password = '';
$db_name     = 'workspace_bdd'; // nom de la base de donnée
$db_host     = 'localhost';
$db = mysqli_connect($db_host, $db_username, $db_password,$db_name)// connection a la base de donnée
        or die('could not connect to database');// sinon message d'erreur
?>