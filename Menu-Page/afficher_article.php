<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>WORKSPACE</title>
        <link rel="stylesheet" href="../Style.css">
    </head>
    <body class="article">
    <?php 
    if (isset($_GET['article'])) {   
        $article = $_GET['article'];
        include('.'.$article);
    }
    ?>
    </body>

</html>
<?php
$text = file_get_contents('.'.$article);
$text =  htmlspecialchars($text);
echo $text;
echo '<br><br>';
echo 'traitement : ';
$text = stristr($text,'rssdiv');
$text = stristr($text,'http');
$text = stristr($text,'rss',true);
$text = substr($text, 0, -5);
echo $text;
fluxRSS($text);
function fluxRSS($url){
//$url =  ; //"https://www.tomshardware.fr/tag/processeurs/feed/"; /* insérer ici l'adresse du flux RSS de votre choix */
$rss = simplexml_load_file($url);
foreach ($rss->channel->item as $item){
$datetime = date_create($item->pubDate);
$date = date_format($datetime, 'd M Y, H\hi');
echo '<div class="actuespace"><a  href="'.$item->link.'">'.$item->title.'<br></a> ('.$date.')</div>';}
}
?>