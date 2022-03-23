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
    $text = stristr($text,'http'); // on s'avance jusqu'a sont url pour pas que pour la prochaine recherche si tombe sur le meme element

    // on isole l'url
    $url = stristr($text,'div',true); 
    $url = substr($url, 0, -5);

    fluxRSS($url,$nb); // on transfère url et le numero de son composant
}

function fluxRSS($url,$nb){
    $resultat = '';
    //$url =  ; //"https://www.tomshardware.fr/tag/processeurs/feed/"; /* insérer ici l'adresse du flux RSS de votre choix */
    if(simplexml_load_file($url) == TRUE){
        echo 'marche';    
    $rss = simplexml_load_file($url);
    
        foreach ($rss->channel->item as $item){
            $datetime = date_create($item->pubDate);
            $date = date_format($datetime, 'd M Y, H\hi');
            $resultat = $resultat.'<div><a  href="'.$item->link.'">'.$item->title.'<br></a> ('.$date.')</div>';}
        
            // on tranfère dans une fonction en JS pour mettre les reponse dans la baliser conserné a l'aire d'une fonction
            ?>
            <script>addresultat(`<?php echo $resultat ?>`,`<?php echo $nb ?>`);</script>
            <?php
    }
    
}
?>