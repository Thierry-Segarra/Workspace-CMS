<?php
include("../Fonction-Requet/connectionBDD.php");

echo '<div class="option_ligne"><p id="switch"></p><div class="media_liste">';
    

$requete = "SELECT * FROM media WHERE `type` = 'VIDEO' ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<button id="media_image'.$row['id'].'" onclick="media_video(`'.$row['nom'].'`)"><img  class="media_size" src="http://img.youtube.com/vi/'.$row["nom"].'/0.jpg" alt="Imposible de récuperer la miniature"/></button>';

};

echo '</div>'.'</div>';
?>