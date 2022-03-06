<?php
$requete = "SELECT * FROM article ";
$exec_requete = mysqli_query($db,$requete);
while ($row = mysqli_fetch_assoc($exec_requete)){
    echo '<ul class="ligne" id="test"><li class="L1"><a href="./Menu-Page/afficher_article.php?article='.$row["Chemain"].'">'.$row["titre"].'</a></li> <li class="L2">'.$row["auteur"].'</li> <li class="L3">'.$row["date"].'</li><a class="boutton" href="./Menu-Page/creation_article.php?Modification='.$row["id"].'">modifier</a><button class="boutton" onclick="sup('.$row["id"].')"">suprimer</button></ul>';
};
?>