<?php
// Permet de verifier si le site existe
function validerLien($lien,$nb,$style){
    $ch = curl_init($lien);
    curl_setopt($ch, CURLOPT_FAILONERROR, true);
    curl_setopt($ch, CURLOPT_NOBODY, true);
        if (curl_exec($ch) === false) {
            // si non il envois un message d'erreur
            echo 'Lien invalide: ' . $lien . "<br>";
        }
        else
        { 
            // si oui faire la fonction qui permet d'appeler le flux RSS
            fluxRSS($lien,$nb,$style);// on transfère url et le numero de son composant
        }
    curl_close($ch);
}



if(isset($article)){
$fichier = $article;
}else if(isset($page)){
$fichier = $page;
}
$text = file_get_contents('.'.$fichier);
$text =  htmlspecialchars($text);

if(strpos($text, 'rssdiv') !== false){
    ?>
        <script>
            // on met en haut la fonction pour mettre le contenue car sinon la fonction ne marcheras pas
            function addresultat(resultat,nb){
                document.getElementById('rssliendiv'+nb).innerHTML = resultat;
                document.getElementById('rssliendiv'+nb).removeAttribute('style');
            }
        </script>
    <?php 
}

while(strpos($text, 'rssdiv') !== false){

    $text = htmlentities($text, ENT_QUOTES); // Cette ligne permet de convertire le html brut en ligne de code pour mieux le modifier
    $text = stristr($text,'rssdiv'); // on recherche si il y a rssdiv dans le text

    while(strpos($text, 'rssliendiv') !== false){ // tant qu'il y a plusieur fulx RSS

        $text = stristr($text,'rssliendiv'); // on recherche si il y a rssdiv dans le text
        
        // traitement pour récuperer l'id du composant lien RSS
        $nb = substr($text, 10); // 10 = la taille de 'rssliendiv'
        $nb = substr($nb,0,strpos($nb,'&')); // on isole le nombre
        // Pour récuperer le numerot de la div et de sont composant
        $text = substr($text, 10+strlen($nb)); // on elève la traitement au text de base pour pas refaire la meme recherche
        

        // traitement pour récuperer le style du composant lien RSS
        $style = $text;
        $style = substr($style,0,strpos($style,'gt;'));
        //$style = substr($nb,0,strpos($nb,'&')); // on isole le nombre
        
        if(strpos($style, 'style') !== false){
            $style = stristr($style,'style'); // on s'avance jusqu'a sont url pour pas que pour la prochaine recherche si tombe sur le meme element a 3 chiffre
            $style = stristr($style,'quot;');
            $style = substr($style, 5);
            $style = substr($style,0,strpos($style,'&')); // on isole le style
            

        }

        // on isole l'url
        $url = stristr($text,'gt;');
        $url = stristr($url,'lt;/p', true);
        $url = substr($url, 3);
        $url = substr($url,0,strpos($url,'&'));
        

        if(strpos($url, 'http') !== false){
            $text = stristr($text,'http'); // on s'avance jusqu'a sont url pour pas que pour la prochaine recherche si tombe sur le meme element a 3 chiffre
            $text = stristr($text,'lt;/p');
            $text = substr($text, 5);
            validerLien($url,$nb,$style); // on vérifie si le lien marche
        
        }else{
            echo 'Lien invalide: ' . $url . "<br>"; // si le lien marche mais que ce n'est pas un XML
        }
    }
}

function fluxRSS($url,$nb,$style){
    $resultat = '';
    //$url =  ; //"https://www.tomshardware.fr/tag/processeurs/feed/"; /* insérer ici l'adresse du flux RSS de votre choix */

    $context  = stream_context_create(array('http' => array('header' => 'Accept: application/xml')));

    if(file_get_contents($url, false, $context)){
        $xml = file_get_contents($url, false, $context);
        $verif = htmlspecialchars($xml);
        if(stripos($verif,'?xml version=')>0){
            $xml = simplexml_load_string($xml);
            
            foreach ($xml->channel->item as $item){
                $datetime = date_create($item->pubDate);
                $date = date_format($datetime, 'd M Y, H\hi');
                $resultat = $resultat.'<div style="'.$style.'" ><a  href="'.$item->link.'">'.$item->title.'<br></a> ('.$date.')</div><br>';
            }
            
            // on tranfère dans une fonction en JS pour mettre les reponse dans la baliser conserné a l'aire d'une fonction
            ?>
            <script>addresultat(`<?php echo $resultat ?>`,`<?php echo $nb ?>`);</script>
            <?php
        }else{
            echo 'Lien invalide: ' . $lien . "<br>"; // si le lien marche mais que ce n'est pas un XML
        }
    }
    
    
}
?>