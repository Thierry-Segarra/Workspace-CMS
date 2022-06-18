<?php
$requete = "SELECT * FROM categorie ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<ul class="ligne" id="ligneid'.$row["id"].'"><li class="L1">'.$row["nom"].'</li><button id="bt_fleche'.$row["id"].'" onclick="param_categorie('.$row["id"].')" class="boutton">↓</button></ul><div class="ligneparam" id="btligneid'.$row["id"].'"></div>';
};
?>