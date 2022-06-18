<?php
if (isset($_FILES['monfichier'])) {
    include("../Fonction/connectionBDD.php");
    $myFile = $_FILES['monfichier'];
    $fileCount = count($myFile["name"]);
    

    for ($i = 0; $i < $fileCount; $i++) {


        $nomOrigine =  $myFile["name"][$i];//$_FILES['monfichier']['name'];
        $elementsChemin = pathinfo($nomOrigine);
        $extensionFichier = $elementsChemin['extension'];
        $extensionsAutorisees = array("png", "jpg", "gif");
        if (!(in_array($extensionFichier, $extensionsAutorisees))) {
            echo "Le fichier n'a pas l'extension attendue";
        } else {    
            // Copie dans le repertoire du script avec un nom
            // incluant l'heure a la seconde pres 
            $repertoireDestination = "../../../Image"."/";
            $nomDestination = $myFile["name"][$i];//$_FILES['monfichier']['name'];
            echo $nomDestination;

            $taille_max    = 104857600;
            $taille_fichier = $myFile["size"][$i]; //filesize($_FILES['monfichier']['tmp_name']);
            if ($taille_fichier < $taille_max){

                $date = date("YmdHis");

                $requete1 = "INSERT INTO `media`(`nom`,`type`,`date`) VALUES ('".$date.$nomDestination."','IMAGE','".$date."')";
                $exec_requete1 = mysqli_query($db,$requete1);

                $nomfichier = $date.$nomDestination;

                move_uploaded_file($myFile["tmp_name"][$i],$repertoireDestination.$nomfichier);

                header('location:../../../index.php?media=0'); // redirige vers la page media


            } else {
                echo "Le fichier n'a pas été uploadé (trop gros ?) ou ".
                     "Le déplacement du fichier temporaire a échoué".
                     " vérifiez l'existence du répertoire ".$repertoireDestination;
            }
        }


    }
}
?>
