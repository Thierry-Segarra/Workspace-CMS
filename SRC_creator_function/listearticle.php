<?php

$fichier = $page;
$text = file_get_contents('.'.$fichier);
$text =  htmlspecialchars($text);
if(strpos($text, 'listearticlediv') !== false){
    ?>
        <script>
            // on met en haut la fonction pour mettre le contenue car sinon la fonction ne marcheras pas
            function listearticleresultat(resultat,nb){
                document.getElementById('listearticlediv'+nb).innerHTML = resultat;
            }
        </script>
    <?php 
}

while(strpos($text, 'listearticlediv') !== false){
    $text = stristr($text,'listearticlediv'); // on recherche si il y a rssdiv dans le text

    $nb = substr($text, 15,2); // Pour récuperer le numerot de la div et de sont composant
    //$text = stristr($text,'http'); // on s'avance jusqu'a sont url pour pas que pour la prochaine recherche si tombe sur le meme element
    $text = substr($text, 15+strlen($nb));
    $text = stristr($text,'categorie selectionner : ');
    $text = substr($text, strlen('categorie selectionner : '));
    $nbcategorie = strpos($text,'div')-5; // -5 pour evité un probleme de traitement
    $categorie = substr($text, 0,$nbcategorie);
    if($categorie == 'Tout'){
        $resultat = '';
        include('../Fonction-Requet/connectionBDD.php');
        
        // récuperer info du fichier pour pouvoir le suprimer
        $requete = "SELECT * FROM `article`";
        $exec_requete = mysqli_query($db,$requete);
        while ($row = mysqli_fetch_assoc($exec_requete)){
            $resultat = $resultat . '<div><a  href="./afficher_article.php?article='.$row["Chemain"].'">'.$row["titre"].'</a><p>'.$row["description"].'</p></div><br>';
        };
        ?>
            <script>listearticleresultat(`<?php echo $resultat ?>`,`<?php echo $nb ?>`);</script>
        <?php
    }else{
        $resultat = '';
        include('../Fonction-Requet/connectionBDD.php');
        $requete = "SELECT * FROM `categorie` WHERE nom = '".$categorie."'";
        $exec_requete = mysqli_query($db,$requete);
        $reponse      = mysqli_fetch_array($exec_requete);
        // récuperer info du fichier pour pouvoir le suprimer
        $requete2 = "SELECT * FROM `article` WHERE categorie = '".$reponse['id']."'";
        $exec_requete2 = mysqli_query($db,$requete2);
        while ($row = mysqli_fetch_assoc($exec_requete2)){
            $resultat = $resultat . '<div><a  href="./afficher_article.php?article='.$row["Chemain"].'">'.$row["titre"].'</a><p>'.$row["description"].'</p></div><br>';
        };
        ?>
            <script>listearticleresultat(`<?php echo $resultat ?>`,`<?php echo $nb ?>`);</script>
        <?php
    }

    
}
?>