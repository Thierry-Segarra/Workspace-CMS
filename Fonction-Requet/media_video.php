<?php
$requete = "SELECT * FROM media WHERE `type` = 'VIDEO' ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<button class="media_bouton" onclick = "suprim_video('.$row["id"].')"><img id="video'.$row["id"].'" name="'.$row["nom"].'" src="http://img.youtube.com/vi/'.$row["nom"].'/0.jpg" width="240" alt="Imposible de récuperer la miniature"/></button>';
};
?>