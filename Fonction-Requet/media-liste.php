<?php
$requete = "SELECT * FROM media ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<img class="media_size" src="Image/'.$row['nom'].'" >';
};
?>