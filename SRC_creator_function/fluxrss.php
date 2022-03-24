<?php
// Permet de verifier si le site existe
function validerLien($lien,$nb)
{
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
		fluxRSS($lien,$nb);// on transfère url et le numero de son composant
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
                document.getElementById('rssdiv'+nb).innerHTML = resultat;
            }
        </script>
    <?php 
}

while(strpos($text, 'rssdiv') !== false){
    $text = stristr($text,'rssdiv'); // on recherche si il y a rssdiv dans le text

    $nb = substr($text, 6,2); // Pour récuperer le numerot de la div et de sont composant
    //$text = stristr($text,'http'); // on s'avance jusqu'a sont url pour pas que pour la prochaine recherche si tombe sur le meme element
    $text = substr($text, 6+strlen($nb));
    $url = stristr($text,'div',true);
    // on isole l'url
    if(stripos($url,'http')>0){
        $url = stristr($url,'http');
        $url = substr($url, 0, -5);
        validerLien($url,$nb);
    }

    
}

function fluxRSS($url,$nb){
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
                $resultat = $resultat.'<div><a  href="'.$item->link.'">'.$item->title.'<br></a> ('.$date.')</div><br>';
            }
            
            // on tranfère dans une fonction en JS pour mettre les reponse dans la baliser conserné a l'aire d'une fonction
            ?>
            <script>addresultat(`<?php echo $resultat ?>`,`<?php echo $nb ?>`);</script>
            <?php
        }
    }
    
    
}
?>