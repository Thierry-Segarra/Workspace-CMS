<?php
if (isset($_FILES['monfichier'])) {
    include("connectionBDD.php");
    $myFile = $_FILES['monfichier'];
    $fileCount = count($myFile["name"]);
    

    for ($i = 0; $i < $fileCount; $i++) {


        $nomOrigine =  $myFile["name"][$i];//$_FILES['monfichier']['name'];
        $elementsChemin = pathinfo($nomOrigine);
        $extensionFichier = $elementsChemin['extension'];
        $extensionsAutorisees = array("png", "jpg", "gif", "pdf");
        if (!(in_array($extensionFichier, $extensionsAutorisees))) {
            echo "Le fichier n'a pas l'extension attendue";
        } else {    
            // Copie dans le repertoire du script avec un nom
            // incluant l'heure a la seconde pres 
            $repertoireDestination = dirname(__FILE__)."/Image"."/";
            $nomDestination = $myFile["name"][$i];//$_FILES['monfichier']['name'];
            echo $nomDestination;

            $taille_max    = 104857600;
            $taille_fichier = $myFile["size"][$i]; //filesize($_FILES['monfichier']['tmp_name']);
            if ($taille_fichier < $taille_max){

                $date = date("YmdHis");

                include("Fonction-Requet/connectionBDD.php");
                $requete1 = "INSERT INTO `media`(`nom`,`type`,`date`) VALUES ('".$nomDestination."','IMAGE','".$date."')";
                $exec_requete1 = mysqli_query($db,$requete1);

                move_uploaded_file($myFile["tmp_name"][$i],$repertoireDestination.$myFile["name"][$i]);

                header('location:index.php?media'); // redirige vers la page media


            } else {
                echo "Le fichier n'a pas été uploadé (trop gros ?) ou ".
                     "Le déplacement du fichier temporaire a échoué".
                     " vérifiez l'existence du répertoire ".$repertoireDestination;
            }
        }


    }
}
?>
