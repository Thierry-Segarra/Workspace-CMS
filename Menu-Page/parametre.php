<?php 
echo '<h1 class="titre">PARAMETRE</h1>'.
'<div>'.
    '<button class="categorie_media" onclick="parametre_categorie_catego()">CATEGORIE</button>'. // catégorie de la parametre CATEROGIE pour la page et les article
    '<button class="categorie_media" onclick="parametre_categorie_template()">TEMPLATE</button>'.
    //'<button class="categorie_media" onclick="media_categorie_Video()">VIDEO</button>'.
    //'<button class="categorie_media" onclick="media_categorie_Doc()">DOCUMENT</button>'.
    '<div class="affiche_media_liste" id="upload_media_liste">'.
    '<p>SELECTIONNER UN PARAMETRE POUR VOIR SON CONTENUE</p>'.
    '</div><div id="affiche_media_liste">'.
    '</div>'.
    '</div>';

?>
