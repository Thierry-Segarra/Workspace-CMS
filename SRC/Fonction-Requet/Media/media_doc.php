<?php
echo '<div id="affiche_media_liste">';
            $requete = "SELECT * FROM media WHERE `type` = 'DOCUMENT' ";
            $exec_requete = mysqli_query($db,$requete);
            while ($row = mysqli_fetch_assoc($exec_requete)){
                echo '<button class="media_bouton" onclick = "suprim_doc('.$row["id"].')"><p id="pdf'.$row['id'].'" name="'.$row['nom'].'">Voire PDF : '.$row['nom'].'| | |'.$row['id'].'</p></button>';
            };
?>
