<?php 
echo'<br>'.
    '<ul class="ligne">'.
        '<li class="L1">Nom de la catégorie</li>'.
    '</ul><br>';
include("./SRC/Fonction-Requet/Afficher/afficher-paramlist-categorie.php"); // Requette SQL pour récureper tout les carégorie plus le menu de modification
echo '</div>';

?>
