<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>WORKSPACE</title>
        <link rel="stylesheet" href="../Style.css">
    </head>

    <?php 
    if (isset($_GET['page'])) {   
        $page = $_GET['page'];
        include('.'.$page);
    }
    ?>

</html>
<script>
    function RSS(url){
        <?php
        $url = ?>url<?php ; //"https://www.tomshardware.fr/tag/processeurs/feed/"; /* insérer ici l'adresse du flux RSS de votre choix */
        ?>
        <?php
        $rss = simplexml_load_file($url);
        foreach ($rss->channel->item as $item){
        $datetime = date_create($item->pubDate);
        $date = date_format($datetime, 'd M Y, H\hi');?>
        let rss = <?php echo '<div class="actuespace"><a  href="'.$item->link.'">'.$item->title.'<br></a> ('.$date.')</div>';}?>
    }
</script>