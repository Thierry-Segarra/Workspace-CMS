<?php
    if (isset($_FILES['file'])) {
        include("Fonction-Requet/connectionBDD.php");
        $myFile = $_FILES['file'];
        $fileCount = count($myFile["name"]);
        

        for ($i = 0; $i < $fileCount; $i++) {
        ?>
        <script> 
            var myFile = "<?php echo $myFile["name"][$i] ?>";
            var extension = myFile.split('.').pop();

            if(extension == 'png'){
            <?php 
                $requete1 = "INSERT INTO `media`(`type`,`nom`) VALUES ('IMAGE','".$myFile["name"][$i]."')";
                $exec_requete1 = mysqli_query($db,$requete1);
                //header('Location: ../index.php?media');
                echo '<p>Image</p>';
            ?>
            }
            else if(extension == 'mp4'){
            <?php 
                $requete1 = "INSERT INTO `media`(`type`,`nom`) VALUES ('VIDEO','".$myFile["name"][$i]."')";
                $exec_requete1 = mysqli_query($db,$requete1);
                //header('Location: ../index.php?media');
                echo '<p>Vidéo</p>';
            ?>
            }
        </script>
        <?php

        }
    }
?>