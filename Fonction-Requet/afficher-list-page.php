<?php
$requete = "SELECT * FROM `page` ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<ul class="ligne" id="ligneid'.$row["id"].'"><li class="L1"><a href="./Menu-Page/afficher_page.php?page='.$row["Chemain"].'">'.$row["titre"].'</a></li> <li class="L2">'.$row["auteur"].'</li> <li class="L3">'.$row["date"].'</li><button id="bt_fleche'.$row["id"].'" class="boutton" onclick="param_art_pag('.$row["id"].',2)">↓</button></ul><div class="ligneparam" id="btligneid'.$row["id"].'"></div>';
};
?>