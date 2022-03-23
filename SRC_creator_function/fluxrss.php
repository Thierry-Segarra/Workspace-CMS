<script>
    // on met en haut la fonction pour mettre le contenue car sinon la fonction ne marcheras pas
    function addresultat(resultat,nb){
        document.getElementById('rssdiv'+nb).innerHTML = resultat;
    }
</script>

<?php
if(isset($article)){
$fichier = $article;
}else if(isset($page)){
$fichier = $page;
}
$text = file_get_contents('.'.$fichier);
$text =  htmlspecialchars($text);

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
        
        fluxRSS($url,$nb); // on transfère url et le numero de son composant
    }

    
}

function fluxRSS($url,$nb){
    $resultat = '';
    //$url =  ; //"https://www.tomshardware.fr/tag/processeurs/feed/"; /* insérer ici l'adresse du flux RSS de votre choix */

    $context  = stream_context_create(array('http' => array('header' => 'Accept: application/xml')));
    //$url = 'http://api.ean.com/ean-services/rs/hotel/v3/list?cid=55505&minorRev=12&apiKey=2hkhej72gxyas3ky6hhjtsga&locale=en_US&currencyCode=USD&customerIpAddress=10.184.2.9&customerSessionId=&xml=<HotelListRequest><arrivalDate>01/22/2012</arrivalDate><departureDate>01/24/2012</departureDate><RoomGroup><Room><numberOfAdults>1</numberOfAdults><numberOfChildren>1</numberOfChildren><childAges>4</childAges></Room></RoomGroup><city>Amsterdam</city><countryCode>NL</countryCode><supplierCacheTolerance>MED</supplierCacheTolerance></HotelListRequest> ';

    if(file_get_contents($url, false, $context)){
        $xml = file_get_contents($url, false, $context);
        $verif = htmlspecialchars($xml);
        if(stripos($verif,'?xml version=')>0){
            $xml = simplexml_load_string($xml);
            
            foreach ($xml->channel->item as $item){
                $datetime = date_create($item->pubDate);
                $date = date_format($datetime, 'd M Y, H\hi');
                $resultat = $resultat.'<div><a  href="'.$item->link.'">'.$item->title.'<br></a> ('.$date.')</div>';
            }
            
            // on tranfère dans une fonction en JS pour mettre les reponse dans la baliser conserné a l'aire d'une fonction
            ?>
            <script>addresultat(`<?php echo $resultat ?>`,`<?php echo $nb ?>`);</script>
            <?php
        }
    }
    
    
}
?>