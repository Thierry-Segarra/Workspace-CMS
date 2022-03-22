<?php
function flux_RSS($RSS)
$url = $RSS; //"https://www.tomshardware.fr/tag/processeurs/feed/"; /* insérer ici l'adresse du flux RSS de votre choix */
$rss = simplexml_load_file($url);
foreach ($rss->channel->item as $item){
 $datetime = date_create($item->pubDate);
 $date = date_format($datetime, 'd M Y, H\hi');
 echo '<div class="actuespace"><a  href="'.$item->link.'">'.$item->title.'<br></a> ('.$date.')</div>';
}
?>