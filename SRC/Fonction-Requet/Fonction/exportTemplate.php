<?php
include('../SRC/Fonction-Requet/Fonction/connectionBDD.php');

$titre = $_POST['titre'];
$id = $_POST['id'];
$table = $_POST['table'];

$nom_file = $titre.".json";

$contenue;

function arrayToObject($array) {

    $object = json_encode($array);
    return $object;
}


$requete = "SELECT Structure,Chemain FROM page WHERE id=16 ";
    $exec_requete = mysqli_query($db,$requete);
    while ($row = mysqli_fetch_assoc($exec_requete)){

        

        // print_r($row);
        $chemain = $row['Chemain'];
        // $html = include('.'.$chemain);
        
        $ressource = fopen('.'.$chemain, 'rb');
        $traitement = fread($ressource, filesize('.'.$chemain));
        $html = htmlentities($traitement, ENT_SUBSTITUTE);

        $Structure = unserialize($row['Structure']);

        $tableau = array('Structure' => $Structure,'HTML' => $html);
        // print_r($tableau);
         $contenue = arrayToObject($tableau);


        echo $nom_file;

         AjouterJS($titre,$contenue,$db);

        
        // <!-- reponse = reponse + '<option id=categorie'+'<?php echo $row['id'] '+'>'+' echo $row['nom'] '+'</option>'; -->
        
    };

    function AjouterJS($titre,$contenue,$db){

        // création du fichier
        $chemainjs = "../../Template/".$titre."";
         $f = fopen($chemainjs, "w+");
        // écriture
        ftruncate($f, 0);
        fputs($f, $contenue);
         // fermeture
        fclose($f);

        $requete = "INSERT INTO `template`(`nom`, `chemain`) VALUES ('".$nom_file."','".$chemainjs."') ";
        $exec_requete = mysqli_query($db,$requete);
        header('Location: ../../index.php');
    }



?>