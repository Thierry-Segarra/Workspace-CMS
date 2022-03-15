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