<?php 
echo '<h1 class="titre">MEDIA</h1>'.
'<div>'.
    '<p>UPLOAD</p><button id="modesup" onclick="mode_sup()">Mode Supression : OFF</button>'.
    '<form enctype="multipart/form-data" action="upload.php" method="post">'.
            '<input type="hidden" name="MAX_FILE_SIZE" value="104857600"/>'.
            'Transfère le fichier <input type="file" name="monfichier[]" multiple/>'.
            '<input type="submit" />'.
        '</form>';
        include("./Fonction-Requet/media-liste.php");
echo '</div>';
?>
