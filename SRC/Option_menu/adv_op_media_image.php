<?php
include("../SRC/Fonction-Requet/Fonction/connectionBDD.php");

echo '<div class="option_ligne"><p id="switch"></p><div class="media_liste">';
    

$requete = "SELECT * FROM media WHERE `type` = 'IMAGE' ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<button id="media_image'.$row['id'].'" onclick="media_image(`'.$row['nom'].'`)"><img class="media_size" src="../Image/'.$row['nom'].'" ></button>';

};

echo '</div>'.'</div>';
?>