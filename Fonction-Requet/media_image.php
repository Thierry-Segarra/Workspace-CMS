<?php
echo '<div id="affiche_media_liste">';
            $requete = "SELECT * FROM media WHERE `type` = 'IMAGE' ";
            $exec_requete = mysqli_query($db,$requete);
            while ($row = mysqli_fetch_assoc($exec_requete)){
                echo '<button class="media_bouton" onclick = "suprim_image('.$row["id"].')"><img class="media_size_affiche" src="Image/'.$row['nom'].'" ></button>';
            };
?>
