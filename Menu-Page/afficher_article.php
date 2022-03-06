<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>WORKSPACE</title>
        <link rel="stylesheet" href="../Style.css">
    </head>

    <?php 
    if (isset($_GET['article'])) {   
        $article = $_GET['article'];
        include('.'.$article);
    }
    ?>

</html>