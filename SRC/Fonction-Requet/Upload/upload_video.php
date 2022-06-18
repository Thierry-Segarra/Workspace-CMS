<?php
echo '<p>UPLOAD VIDEO</p>'.
        '<button id="modesup" onclick="mode_sup()">Mode Supression : OFF</button>'.
        '<form enctype="multipart/form-data" action="./SRC/Fonction-Requet/Upload/upload_video_form.php" method="post">'.
            'URL de la vidéo <input type="text" name="urlvideo" />'.
            '<input type="submit" />'.
        '</form>'.
        '</div>';
?>