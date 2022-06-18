<?php
echo '<p>UPLOAD IMAGE</p>'.
        '<button id="modesup" onclick="mode_sup()">Mode Supression : OFF</button>'.
        '<form enctype="multipart/form-data" action="./SRC/Fonction-Requet/Upload/upload_image_form.php" method="post">'.
            '<input type="hidden" name="MAX_FILE_SIZE" value="104857600"/>'.
            'Transfère le fichier <input type="file" name="monfichier[]" multiple/>'.
            '<input type="submit" />'.
        '</form>'.
        '</div>';
?>