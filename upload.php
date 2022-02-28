<?php
$nomOrigine = $_FILES['monfichier']['name'];
$elementsChemin = pathinfo($nomOrigine);
$extensionFichier = $elementsChemin['extension'];
$extensionsAutorisees = array("png", "jpg", "gif", "pdf");
if (!(in_array($extensionFichier, $extensionsAutorisees))) {
    echo "Le fichier n'a pas l'extension attendue";
} else {    
    // Copie dans le repertoire du script avec un nom
    // incluant l'heure a la seconde pres 
    $repertoireDestination = dirname(__FILE__)."/image"."/";
    $nomDestination = $_FILES['monfichier']['name'];


    $taille_max    = 104857600;
    $taille_fichier = filesize($_FILES['monfichier']['tmp_name']);
    if ($taille_fichier < $taille_max){

        include("connect.php");
        $requete1 = "INSERT INTO `document`(`nom`,`date`) VALUES ('".$nomDestination."','".date("YmdHis")."')";
        $exec_requete1 = mysqli_query($db,$requete1);

        $requete2 = "SELECT * FROM `document` WHERE `nom` ='".$nomDestination."' AND `date` ='".date("YmdHis")."'";
        $exec_requete2 = mysqli_query($db,$requete2);
        $reponse2      = mysqli_fetch_array($exec_requete2);
        
        $nomfichier = $reponse2['id'].$nomDestination;

        move_uploaded_file($_FILES["monfichier"]["tmp_name"],$repertoireDestination.$nomfichier);


        $requete3 = "UPDATE `document` SET `fichier_original`= '"."image/".$nomfichier."' WHERE `id`='".$reponse2["id"]."'"; // https://comptesiteweb.000webhostapp.com/
        $exec_requete3 = mysqli_query($db,$requete3);

        header('location:index.php?iv');


    } else {
        echo "Le fichier n'a pas été uploadé (trop gros ?) ou ".
                "Le déplacement du fichier temporaire a échoué".
                " vérifiez l'existence du répertoire ".$repertoireDestination;
    }
}
?>
