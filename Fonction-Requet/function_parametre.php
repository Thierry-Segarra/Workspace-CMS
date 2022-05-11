<script>
    function parametre_categorie_catego(){
        categorie_parametre = 0;
        document.getElementById('upload_media_liste').innerHTML= `<?php include('./Fonction-Requet/parametre_newcategorie.php')?>`; // Form pour crée une nouvelle catégorie
        document.getElementById('affiche_media_liste').innerHTML= `<?php include('./Fonction-Requet/parametre_categorie.php') ?>`; // Afficher tout les catégories pour les modifier, renomer ou suprimer
    }

</script>