<?php 
echo '<h1 class="titre">Article</h1>'.
'<div>'.
    '<a class="boutton" href="./Menu-Page/creation_article.php">ajouter article</a>'.
    '<div id="new-article"></div>'.
    '<br>'.
    '<ul class="ligne">'.
        '<li class="L1">Titre</li>'.
        '<li class="L2">Auteur/Autrice</li>'.
        '<li class="L3">Date</li>'.
    '</ul>';
include("./Fonction-Requet/afficher-list-article.php");
echo '</div>';

?>
