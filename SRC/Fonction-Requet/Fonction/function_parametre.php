<script>
    function parametre_categorie_catego(){
        categorie_parametre = 0;
        document.getElementById('upload_media_liste').innerHTML= `<?php include('./SRC/Fonction-Requet/Parametre/parametre_newcategorie.php')?>`; // Form pour crée une nouvelle catégorie
        document.getElementById('affiche_media_liste').innerHTML= `<?php include('./SRC/Fonction-Requet/Parametre/parametre_categorie.php') ?>`; // Afficher tout les catégories pour les modifier, renomer ou suprimer
    }

    function parametre_categorie_template(){
        categorie_parametre = 1;
        document.getElementById('upload_media_liste').innerHTML= `<?php include('./SRC/Fonction-Requet/Parametre/parametre_menutemplate.php')?>`; // Form pour crée une nouvelle catégorie
        document.getElementById('affiche_media_liste').innerHTML= `<?php include('./SRC/Fonction-Requet/Parametre/parametre_template.php') ?>`; // Afficher tout les catégories pour les modifier, renomer ou suprimer
    }

    function categorie_template(){ // permet d'affichier la catégorie dans laquelle l'utilisateur été avans le rechargement de la page
        
        if(categorie_parametre == 0){ // CATEGORIE
            document.getElementById('upload_media_liste').innerHTML= `<?php include('./SRC/Fonction-Requet/Parametre/parametre_newcategorie.php')?>`; // Form pour crée une nouvelle catégorie
        document.getElementById('affiche_media_liste').innerHTML= `<?php include('./SRC/Fonction-Requet/Parametre/parametre_categorie.php') ?>`; // Afficher tout les catégories pour les modifier, renomer ou suprimer
        }
        if(categorie_parametre == 1){ // TEMPLATE
            document.getElementById('upload_media_liste').innerHTML= `<?php include('./SRC/Fonction-Requet/Parametre/parametre_newcategorie.php')?>`; // Form pour crée une nouvelle catégorie
        document.getElementById('affiche_media_liste').innerHTML= `<?php include('./SRC/Fonction-Requet/Parametre/parametre_template.php') ?>`; // Afficher tout les template pour les modifier, renomer ou suprimer
        }
    }

    function suprim_template(id){ // suprimer la vidéo ou ouvrir la vidéo
        if(mode_supression == 1){ // suprimer
            if ( confirm( "Voulez vous suprimer cette video" ) ) {
                categorie_media = 1;
                // suprime (true)
            window.location = "./SRC/Fonction-Requet/Suprimer/suprimer_video.php?id="+id;
            }
        }else if(mode_supression == 0){ // ouvrir vidéo
                window.open("https://youtu.be/"+document.getElementById("video"+id).name);
        }
        
    }
</script>