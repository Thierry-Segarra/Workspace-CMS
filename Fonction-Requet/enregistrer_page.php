<?php

echo '<br>############# Enregistrement Modification ###############<br>';
echo '<br>############# Partie Page ###############<br>';

$titre = $_POST['titre'];
$div = $_POST['div'];
if(isset($_POST['composans'])){
$composans = $_POST['composans'];
$nom_composans = $_POST['nom_composans'];
}
$HTML = $_POST['HTML'];
//$HTML = htmlspecialchars($HTML, ENT_QUOTES);
echo $HTML;

if(isset($_POST['Modif'])){
    echo '<br>############# Partie Table Structure Modifier ###############<br>';

    $nom_file = $titre.".php";
        $texte = $HTML;

        // création du fichier
        $f = fopen("../Page/".$nom_file, "r+");
        // écriture
        ftruncate($f, 0);
        fputs($f, $texte );
        // fermeture
        fclose($f);

        $Table_Structure = [];
        for($i = 0; $i< count($div);$i++){
            //array_push($Table_Structure, $div[$i]);
            $tablediv = [];
            $tablecompo = [];
            if(isset($composans)){
                for($j = 0; $j< count($composans[$i]);$j++){
                    $verifnb_div_comp = substr($composans[$i][$j], 3, strlen('comp')-3);
                    $verifnb_div = substr($div[$i],4);  
                    if($verifnb_div_comp == $verifnb_div){
                        // mettre le nom du composans dans un tableau
                        $tablenom = [
                            $composans[$i][$j] => $nom_composans[$i][$j]
                        ];
                        // ajoute le nom de composans a sont composans
                        array_push($tablecompo, $tablenom);
                        //array_push($tablediv[$i], $tablecompo);
                        
                    }
                };
            }
            $tablenbdiv = [
                $div[$i] => $tablecompo,
            ];
            // ajoute le composans a sa div
            array_push($tablediv, $tablenbdiv);
            // Ajoute le tableau de la div qui est composer de ces composans qui eu meme composer de leur nom , à la table Structure
            array_push($Table_Structure, $tablediv);
        }
        //print_r($Table_Structure);
    
    
        // Pour transformer la table en donnée
        $Structure = serialize($Table_Structure);
        //echo "<br>". $Structure . "<br><br><br>";
    
        // Pour retransformer les donnée en table
        $test = unserialize($Structure);
        //var_dump($test);
         
        echo '<br>';
        echo '<br>############# Partie Base de donnée ###############<br>';
        echo '<br>';
    
    
        include('../Fonction-Requet/connectionBDD.php');
        $Chemain = "./Page/".$titre.".php";

        $requete = "UPDATE `page` SET `Structure` = '".$Structure."' WHERE `Chemain` = '".$Chemain."'";
        $exec_requete = mysqli_query($db,$requete);
        if($exec_requete){
            echo 'REQUETE REUSSIS';
        }
        echo '<br>';
        echo $Chemain;
        echo '<br>';
        //echo $requete;
        header('Location: ../index.php?page');


}else{
    echo '<br>############# Enregistrement Nouveau ###############<br>';
    echo '<br>############# Partie Table Structure ###############<br>';

    $nom_file = $titre.".php";
        $texte = $HTML;

        // création du fichier
        $f = fopen("../Page/".$nom_file, "w+");
        // écriture
        fputs($f, $texte );
        // fermeture
        fclose($f);
        $Table_Structure = [];

    for($i = 0; $i< count($div);$i++){
        //array_push($Table_Structure, $div[$i]);
        $tablediv = [];
        $tablecompo = [];
        if(isset($composans)){
            for($j = 0; $j< count($composans[$i]);$j++){
                $verifnb_div_comp = substr($composans[$i][$j], 3, strlen('comp')-3);
                $verifnb_div = substr($div[$i],4);  
                if($verifnb_div_comp == $verifnb_div){
                    // mettre le nom du composans dans un tableau
                    $tablenom = [
                        $composans[$i][$j] => $nom_composans[$i][$j]
                    ];
                    // ajoute le nom de composans a sont composans
                    array_push($tablecompo, $tablenom);
                    //array_push($tablediv[$i], $tablecompo);
                    
                }
            };
        }
        $tablenbdiv = [
            $div[$i] => $tablecompo,
        ];
        // ajoute le composans a sa div
        array_push($tablediv, $tablenbdiv);
        // Ajoute le tableau de la div qui est composer de ces composans qui eu meme composer de leur nom , à la table Structure
        array_push($Table_Structure, $tablediv);
    }
    //print_r($Table_Structure);


    // Pour transformer la table en donnée
    $Structure = serialize($Table_Structure);
    echo "<br>". $Structure . "<br><br><br>";

    // Pour retransformer les donnée en table
    $test = unserialize($Structure);
    var_dump($test);

    echo '<br>############# Partie Base de donnée ###############<br>';



    include('../Fonction-Requet/connectionBDD.php');
    $Chemain = "./Page/".$titre.".php";

    $requete = "INSERT INTO `page`(`auteur`, `date`, `titre`, `Structure`, `Chemain`) VALUES ('admin',now(),'".$titre."','".$Structure."','".$Chemain."')";
    $exec_requete = mysqli_query($db,$requete);
    if($exec_requete){
        echo 'REQUETE REUSSIS';
    }
    echo '<br>';
    echo $Chemain;
    echo '<br>';
    echo $requete;
    header('Location: ../index.php?page');
};


?>