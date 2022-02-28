<?php 
echo '<h1 class="titre">MEDIA</h1>'.
'<div>'.
    '<button class="categorie_media" onclick="media_categorie_Image()">IMAGE</button>'.
    '<button class="categorie_media" onclick="media_categorie_Video()">VIDEO</button>'.
    '<div class="affiche_media_liste" id="upload_media_liste">';
        include("./Fonction-Requet/upload_image.php");
        echo '</div>';
        include("./Fonction-Requet/media_image.php");
echo '</div></div>';

?>
