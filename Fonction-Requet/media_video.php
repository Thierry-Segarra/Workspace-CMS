<?php
echo '<div id="affiche_media_liste">';
$requete = "SELECT * FROM media WHERE `type` = 'VIDEO' ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<button class="media_bouton" onclick = "suprim_image('.$row["id"].')"> <img src="http://img.youtube.com/vi/'.$row["nom"].'/0.jpg" width="240" alt="Vidéo Youtube" class="video"/></button>';
};
?>