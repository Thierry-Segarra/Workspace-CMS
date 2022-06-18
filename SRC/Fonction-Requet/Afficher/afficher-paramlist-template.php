<?php
$requete = "SELECT * FROM template ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<button class="media_bouton" onclick = "suprim_template('.$row["id"].')"></button>';
};
?>