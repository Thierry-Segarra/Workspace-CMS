<script>
        var mode_supression = 0;
        var categorie_media = 0;
        var categorie_parametre = 0;
        /* src="Fonction-Requet/menu.js" Bouton B1*/ var linkB1 = `<?php include("Menu-Page/tableau-de-bord.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B2*/ var linkB2 = `<?php include("Menu-Page/article.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B3*/ var linkB3 = `<?php include("Menu-Page/media.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B4*/ var linkB4 = `<?php include("Menu-Page/page.php") ?>`;
        /* src="Fonction-Requet/menu.js" Bouton B5*/ var linkB5 = `<?php include("Menu-Page/parametre.php") ?>`;

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

        function param_art_pag(id,nb){
            //console.log(document.getElementById('btligneid'+id).innerHTML);
            if(nb == 2){ // Pour la PAGE
                if(document.getElementById('btligneid'+id).innerHTML == ''){
                    let description = description_dbb(nb);
                    document.getElementById('btligneid'+id).style.visibility = 'visible';
                    document.getElementById('btligneid'+id).innerHTML = '<a class="boutton" href="./Menu-Page/creation_page.php?Modification='+id+'">modifier le conteue</a><br><br><div class="L1"><form action="Fonction-Requet/modifier_titre_page.php" method="POST"><span>Changer le titre : </span><input type="text" name="titre" value="" placeholder="Changer le titre" required><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Titre"></form><form action="Fonction-Requet/modifier_description_page.php" method="POST"><span>Modifier la description : </span><input type="text" name="description" value="'+description+'" placeholder="Changer la description"></input><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Description"></form></div><button class="boutton" onclick="sup_pag('+id+')"">suprimer</button>';
                    document.getElementById('bt_fleche'+id).innerHTML = '↑';
                }else{
                    document.getElementById('btligneid'+id).style.visibility = 'hidden';
                    document.getElementById('btligneid'+id).innerHTML = '';
                    document.getElementById('bt_fleche'+id).innerHTML = '↓';
                }
            }else if(nb == 1){ // Pour l'ARTICLE
                if(document.getElementById('btligneid'+id).innerHTML == ''){
                    let description = description_dbb(nb);
                    document.getElementById('btligneid'+id).style.visibility = 'visible';
                    document.getElementById('btligneid'+id).innerHTML = '<a class="boutton" href="./Menu-Page/creation_article.php?Modification='+id+'">modifier le conteue</a><br><br><div class="L1"><form action="Fonction-Requet/modifier_titre_article.php" method="POST"><span>Changer le titre : </span><input type="text"  name="titre" value="" placeholder="Changer le titre" required><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Titre"></form><form action="Fonction-Requet/modifier_description_article.php" method="POST"><span>Modifier la description : </span><input type="text" name="description" value="'+description+'" placeholder="Changer la description"><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Description"></form></div><button class="boutton" onclick="sup_art('+id+')">suprimer</button>';
                    document.getElementById('bt_fleche'+id).innerHTML = '↑';
                }else{
                    document.getElementById('btligneid'+id).style.visibility = 'hidden';
                    document.getElementById('btligneid'+id).innerHTML = '';
                    document.getElementById('bt_fleche'+id).innerHTML = '↓';
                }
            }
            

        }
        function description_dbb(nb){
            if(nb == 1){
                <?php
                $requete = "SELECT `description` FROM article ";
                $exec_requete = mysqli_query($db,$requete);
                $reponse      = mysqli_fetch_array($exec_requete);
                ?>
                let reponse = '<?php echo $reponse['description']; ?>';
                return reponse;
            }else if(nb == 2){
                <?php
                $requete = "SELECT `description` FROM `page` ";
                $exec_requete = mysqli_query($db,$requete);
                $reponse      = mysqli_fetch_array($exec_requete);
                ?>
                let reponse = '<?php echo $reponse['description']; ?>';
                return reponse;
            }
        }
        /*
        function param_art_pag(id,nb){
                if(document.getElementById('btligneid'+id).innerHTML == ''){
                    let description = description_dbb(nb);
                    document.getElementById('btligneid'+id).style.visibility = 'visible';
                    document.getElementById('btligneid'+id).innerHTML = '<a class="boutton" href="./Menu-Page/creation_page.php?Modification='+id+'">modifier le conteue</a><br><br><div class="L1"><form action="Fonction-Requet/modifier_titre_page.php" method="POST"><span>Changer le titre : </span><input type="text" name="titre" value="" placeholder="Changer le titre" required><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Titre"></form><form action="Fonction-Requet/modifier_description_page.php" method="POST"><span>Modifier la description : </span><input type="text" name="description" value="'+description+'" placeholder="Changer la description"></input><input type="text" name="id" value="'+id+'" style="visibility:collapse"><input type="submit" value="Modifier Description"></form></div><button class="boutton" onclick="sup_pag('+id+')"">suprimer</button>';
                    document.getElementById('bt_fleche'+id).innerHTML = '↑';
                }else{
                    document.getElementById('btligneid'+id).style.visibility = 'hidden';
                    document.getElementById('btligneid'+id).innerHTML = '';
                    document.getElementById('bt_fleche'+id).innerHTML = '↓';
                }
            }
          */  

        }
        
    </script>