<?php

$fichier = $page;
$text = file_get_contents('.'.$fichier);
$text =  htmlspecialchars($text);
while(strpos($text, 'articlelistediv') !== false){
    ?>
        <script>
            // on met en haut la fonction pour mettre le contenue car sinon la fonction ne marcheras pas
            function listearticleresultat(resultat,nb){
                document.getElementById('lignearticlelistediv'+nb).innerHTML = resultat;
                //document.getElementById('lignearticlelistediv'+nb).removeAttribute('style');
                document.getElementById('lignearticlelistediv'+nb).setAttribute('style', 'display: flex; flex-wrap: wrap; justify-content: space-between;');
            }
        </script>
    <?php 


    while(strpos($text, 'lignearticlelistediv') !== false){
        $text = htmlentities($text, ENT_QUOTES);
        $text = stristr($text,'lignearticlelistediv'); // on recherche si il y a rssdiv dans le text
        $nb = substr($text, 20); // Pour récuperer le numerot de la div et de sont composant
        $nb = substr($nb,0,strpos($nb,'&')); // on isole le nombre
        

        $text = substr($text, 20+strlen($nb));
        $style = $text;
        $style = substr($style,0,strpos($style,'gt;'));
        //$style = substr($nb,0,strpos($nb,'&')); // on isole le nombre
        
        if(strpos($style, 'style') !== false){
            $style = stristr($style,'style'); // on s'avance jusqu'a sont url pour pas que pour la prochaine recherche si tombe sur le meme element a 3 chiffre
            $style = stristr($style,'quot;');
            $style = substr($style, 5);
            $style = substr($style,0,strpos($style,'&')); // on isole le style
            //echo 'STYLE : '. $style;
        }

        $text = stristr($text,'categorie article : ');
        $text = substr($text, strlen('categorie article : '));
        $nbcategorie = strpos($text,'p');
        $categorie = substr($text, 0,$nbcategorie);
        $categorie = substr($categorie,0,strpos($categorie,'&'));
        $resultat = '';
        if($categorie == 'Tout'){
            
            include('../Fonction-Requet/connectionBDD.php');
            
            // récuperer info du fichier pour pouvoir le suprimer
            $requete = "SELECT * FROM `article`";
            $exec_requete = mysqli_query($db,$requete);
            while ($row = mysqli_fetch_assoc($exec_requete)){
                $resultat = $resultat . '<div  style = "'.$style.'"><a  href="./afficher_article.php?article='.$row["Chemain"].'">'.$row["titre"].'</a><p>'.$row["description"].'</p></div><br>';
            };
            ?>
                <script>listearticleresultat(`<?php echo $resultat ?>`,`<?php echo $nb ?>`);</script>
            <?php
        }else{
            include('../Fonction-Requet/connectionBDD.php');
            // récuperer info du fichier pour pouvoir le suprimer
            $requete2 = "SELECT * FROM `article` INNER JOIN `categorie` ON `categorie`.id = article.categorie WHERE categorie.nom = '".$categorie."'";
            $exec_requete2 = mysqli_query($db,$requete2); 
            while ($row = mysqli_fetch_assoc($exec_requete2)){
                $resultat = $resultat . '<div style = "'.$style.'"><a  href="./afficher_article.php?article='.$row["Chemain"].'">'.$row["titre"].'</a><p>'.$row["description"].'</p></div><br>';
            };
            ?>
                <script>listearticleresultat(`<?php echo $resultat ?>`,`<?php echo $nb ?>`);</script>
            <?php
        }
        
        
    }
}
?>