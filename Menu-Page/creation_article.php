<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Segarra Portfolio.com</title>
        <link rel="stylesheet" href="../Style.css">
    </head>
    <body>
    <?php include('../SRC_creator_function/src_function_creator.php');?>
    <section class="menucreat">
    <form action="../Fonction-Requet/enregistrer_article.php" method="post" id="enregistre">
    
    </form>
        <div id="entregistrer"></div>
        <div class="structure" id="structure">
        <button onclick="enregistrer()">Enregistrer</button><button onclick="quitter()">Quitter</button>
            
        <h1>Structure</h1>
        <button onclick="adddiv()">div</button>

        </div>
        <div class="option" id="menu_option">
        <h1>OPTION</h1>
        <p>aucun option à été selectionné</p>
        </div>
    </section>

    <section class="apercreat" name="apercu" id="apercu">
    <article id="article">
    </article>
    </section>

    <section name="bc_option">
    
    
    </section>

    <section id="tampon" style="visibility:collapse;position:absolut" >
    </section>
    </body>
    <script>

        
        /* event listener */
        //document.getElementsByName("HTML")[0].addEventListener('change', apercreat);
        function apercreat(){
            document.getElementById("zonehtml").value = document.getElementById("apercu").innerHTML;
        }
        //setInterval(apercreat, 100);

        if(html != ''){
            document.querySelector("article").innerHTML = html;
        }
    </script>

<?php
if(isset($_GET['Modification'])){ // Pour vérifier si c'est une modification ou une création
    echo '<script>modif_table_structure();idiv = Number(divtable)+1;compo = Number(comptable)+1;affiche_structure();</script>';
    
}
?>

</html>