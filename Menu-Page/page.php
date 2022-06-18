<?php 
echo '<h1 class="titre">Page</h1>'.
'<div>'.
    '<a class="boutton" href="./Menu-Page/creation_page.php">ajouter une page</a>'.
    '<div id="new-article"></div>'.
    '<br>'.
    '<ul class="ligne">'.
        '<li class="L1">Titre</li>'.
        '<li class="L2">Auteur/Autrice</li>'.
        '<li class="L3">Date</li>'.
    '</ul>';
include("./SRC/Fonction-Requet/Afficher/afficher-list-page.php"); // Affiche tout les pages avec le menu pour modifier, suprimer, renommer le titre, changer le commentaire et changer de catégorie
echo '</div>';

?>
