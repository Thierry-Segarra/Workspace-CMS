<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Segarra Portfolio.com</title>
        <link rel="stylesheet" href="Style.css">
    </head>
    

    <body>
    <?php include('Fonction-Requet/connectionBDD.php');
        $id = $_GET['id'];
        $requete = "SELECT * FROM article where id = ".$id."";
        $exec_requete = mysqli_query($db,$requete);
        $rep = mysqli_fetch_assoc($exec_requete);
    ?>
    
    <section class="menucreat">
    <br>
    <button onclick="location = './index.php?article'">Retour Back Office</button>
    <form  action="Fonction-Requet/update_article.php" method="POST">
        
        
        <input type="submit" value="Modifier">
        <p>Titre</p>
        <input type="text" name="titre" value="<?php echo $rep["titre"]; ?>" require></input>
        <p>HTML</p>
        <textarea class="zonehtml" name="HTML" id="zonehtml" value=""><?php echo $rep["HTML"]; ?></textarea>
        <p>CSS</p>
        <textarea class="zonehtml" name="CSS" id="zonecss" value=""><?php echo $rep["CSS"] ?></textarea>
        
        <!-- c'est invisible et sert pour enregister les modification -->
        <input style="visibility: hidden" name="id" value="<?php echo $id; ?>"></input>
    </form>
    </section>

    <section class="apercreat" id="apercu">
    <?php echo $rep["HTML"].$rep["CSS"]; ?>
    </section>
    </body>
    <script>
        //sa marche aussi masi il faut quiter la zone ou l'on ecrit pour qu'il puisse ce modifier
        //document.getElementsByName("HTML")[0].addEventListener('change', apercreat);
        //document.getElementsByName("CSS")[0].addEventListener('change', apercreat);

        function apercreat(){
            document.getElementById("apercu").innerHTML = document.getElementById("zonehtml").value + document.getElementById("zonecss").value;
        }
        setInterval(apercreat, 100);
    </script>
</html>