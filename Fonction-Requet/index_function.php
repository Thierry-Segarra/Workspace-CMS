<script>
        var mode_supression = 0;// Pour changer de mode entre le mode supression ou regarder l'element
        var categorie_media = 0; // Pour differencier les menu entre les images, vidéo, et doccument
        var categorie_parametre = 0; // Pour differencier les menu
        var description = []; // Pour avoir la description des pages ou des articles
        // description[id][0] c'est pour avoir sa description
        // description[id][1] c'est pour avoir sa catégorie
        var liste_categorie = ''; // le resultat et fait avec la fonction qui ce trouve dans le fichier menu.js

        /* src="Fonction-Requet/menu.js" Bouton B1*/ 
        var linkB1 = `<?php include("Menu-Page/tableau-de-bord.php") ?>`;

        /* src="Fonction-Requet/menu.js" Bouton B2*/ 
        var linkB2 = `<?php include("Menu-Page/article.php") ?>`;

        /* src="Fonction-Requet/menu.js" Bouton B3*/ 
        var linkB3 = `<?php include("Menu-Page/media.php") ?>`;

        /* src="Fonction-Requet/menu.js" Bouton B4*/
        var linkB4 = `<?php include("Menu-Page/page.php") ?>`;

        /* src="Fonction-Requet/menu.js" Bouton B5*/ 
        var linkB5 = `<?php include("Menu-Page/parametre.php") ?>`;

        // Permet de suprimer un article
        function sup_art(id){
            if ( confirm( "Voulez vous suprimer cette article" ) ) {
                // suprime (true)
               window.location = "./Fonction-Requet/suprimer_article.php?id="+id;
            } else {
                // rien (false)
            }
        }
        function sup_pag(id){
            if ( confirm( "Voulez vous suprimer cette page" ) ) {
                // suprime (true)
               window.location = "./Fonction-Requet/suprimer_page.php?id="+id;
            } else {
                // rien (false)
            }
        }

        function sup_categorie(id){
            if(id != '1'){ // id 1 est la catégorie de base nommé Non-défini
                if ( confirm( "Voulez vous suprimer cette categorie" ) ) {
                    // suprime (true)
                window.location = "./Fonction-Requet/suprimer_categorie.php?id="+id;
                } else {
                    // rien (false)
                }
            }else{
                alert('Cette catégorie ne peut pas etre suprimer') // Pour signaler a l'utilisatuer que l'id 1 ne peut pas être suprimer
            }
        }

        function param_art_pag(id,nb){
            // Permet de récuperer les informations de la page ou de l'article pour pouvoir les modifier
            if(nb == 2){ // Pour la PAGE
                if(document.getElementById('btligneid'+id).innerHTML == ''){
                    document.getElementById('btligneid'+id).style.visibility = 'visible';
                    document.getElementById('btligneid'+id).innerHTML = '<a class="boutton" href="./Menu-Page/creation_page.php?Modification='+id+'">modifier le conteue</a><br><br><div class="L1"><form class="modification" action="Fonction-Requet/modifier_titre_page.php" method="POST"><span>Changer le titre : </span><input type="text" name="titre" value="'+description[id][2]+'" placeholder="Changer le titre" required><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input class="modification" type="submit" value="Modifier Titre"></form><form class="modification" action="Fonction-Requet/modifier_description_page.php" method="POST"><span>Modifier la description : </span><input type="text" name="description" value="'+description[id][0]+'" placeholder="Changer la description"></input><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Description"></form><form class="modification" action="Fonction-Requet/modifier_categorie_page.php" method="POST"><span>Changer de categorie : </span><select name="categorie">'+liste_categorie+'</select><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Categorie"></form></div><button class="boutton" onclick="sup_pag('+id+')"">suprimer</button>';

                    document.getElementById('categorie'+description[id][1]).setAttribute('selected','selected');
                    document.getElementById('bt_fleche'+id).innerHTML = '↑';
                }else{
                    document.getElementById('btligneid'+id).style.visibility = 'hidden';
                    document.getElementById('btligneid'+id).innerHTML = '';
                    document.getElementById('bt_fleche'+id).innerHTML = '↓';
                }
            }else if(nb == 1){ // Pour l'ARTICLE
                if(document.getElementById('btligneid'+id).innerHTML == ''){
                    document.getElementById('btligneid'+id).style.visibility = 'visible';
                    document.getElementById('btligneid'+id).innerHTML = '<a class="boutton" href="./Menu-Page/creation_article.php?Modification='+id+'">modifier le conteue</a><br><br><div class="L1"><form class="modification" action="Fonction-Requet/modifier_titre_article.php" method="POST"><span>Changer le titre : </span><input type="text"  name="titre" value="'+description[id][2]+'" placeholder="Changer le titre" required><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Titre"></form><form class="modification" action="Fonction-Requet/modifier_description_article.php" method="POST"><span>Modifier la description : </span><input type="text" name="description" value="'+description[id][0]+'" placeholder="Changer la description"><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Description"></form><form class="modification" action="Fonction-Requet/modifier_categorie_article.php" method="POST"><span>Changer de categorie : </span><select name="categorie">'+liste_categorie+'</select><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Categorie"></form></div><button class="boutton" onclick="sup_art('+id+')">suprimer</button>';
                    document.getElementById('categorie'+description[id][1]).setAttribute('selected','selected');
                    document.getElementById('bt_fleche'+id).innerHTML = '↑';
                }else{
                    document.getElementById('btligneid'+id).style.visibility = 'hidden';
                    document.getElementById('btligneid'+id).innerHTML = '';
                    document.getElementById('bt_fleche'+id).innerHTML = '↓';
                }
            }
            

        }
        function description_dbb(nb){
            // Permet de récurer les information de la page ou de l'article dans la base de données
            if(nb == 1){ // Rechercher information article
                let reponse = [];
                <?php
                $requete = "SELECT * FROM article ";
                $exec_requete = mysqli_query($db,$requete);

                while ($row = mysqli_fetch_assoc($exec_requete)){

                    ?> 
                    reponse.push('<?php echo $row['id'] ?>');
                    reponse['<?php echo $row['id'] ?>'] = [];
                    reponse['<?php echo $row['id'] ?>'].push('<?php echo $row['description'] ?>');
                    reponse['<?php echo $row['id'] ?>'].push('<?php echo $row['categorie'] ?>');
                    reponse['<?php echo $row['id'] ?>'].push('<?php echo $row['titre'] ?>');
                    // Permet de mettre les reponse PHP de la bdd dans un tableau en JS
                    <?php
                };
                ?>
                return reponse;

            }else if(nb == 2){// Rechercher information page
                let reponse = [];
                <?php
                $requete = "SELECT * FROM `page` ";
                $exec_requete = mysqli_query($db,$requete);

                while ($row = mysqli_fetch_assoc($exec_requete)){

                    ?> 
                    reponse.push('<?php echo $row['id'] ?>');
                    reponse['<?php echo $row['id'] ?>'] = [];
                    reponse['<?php echo $row['id'] ?>'].push('<?php echo $row['description'] ?>');
                    reponse['<?php echo $row['id'] ?>'].push('<?php echo $row['categorie'] ?>');
                    reponse['<?php echo $row['id'] ?>'].push('<?php echo $row['titre'] ?>');
                    // Permet de mettre les reponse PHP de la bdd dans un tableau en JS
                    <?php
                };
                ?>
                return reponse;
            }
        }

        function categorie_dbb(){
            // Permet de récurer les information de la catégorie dans la base de données
                let reponse = '';
                <?php
                $requete = "SELECT * FROM categorie ";
                $exec_requete = mysqli_query($db,$requete);

                while ($row = mysqli_fetch_assoc($exec_requete)){

                    ?>
                    reponse = reponse + '<option id=categorie'+'<?php echo $row['id'] ?>'+'>'+'<?php echo $row['nom'] ?>'+'</option>';
                    <?php
                };
                ?>
                return reponse;
        }

        function param_categorie(id){
            // Permet de récuperer les informations de la catégorie pour pouvoir les modifier
            if(document.getElementById('btligneid'+id).innerHTML == ''){
                document.getElementById('btligneid'+id).style.visibility = 'visible';
                document.getElementById('btligneid'+id).innerHTML = '<div class="L1"><form action="Fonction-Requet/modifier_titre_categorie.php" method="POST"><span>Changer le titre : </span><input type="text" name="titre" value="" placeholder="Changer le titre" required><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Titre"></form></div><button class="boutton" onclick="sup_categorie('+id+')"">suprimer</button>';
                document.getElementById('bt_fleche'+id).innerHTML = '↑';
            }else{
                document.getElementById('btligneid'+id).style.visibility = 'hidden';
                document.getElementById('btligneid'+id).innerHTML = '';
                document.getElementById('bt_fleche'+id).innerHTML = '↓';
            }
        }

        
        
    </script>