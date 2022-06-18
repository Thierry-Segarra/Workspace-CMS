<script>
    // initialisation des variable
    var idiv = 1; // permet de faire une difference entre les div créé
    var compo = 1;// permet de faire une difference entre les composant créé
    var inter = null;// permet d'initialiser et de stoper le op_update()

    
    // initialisation du tableau de structure
    const tablediv = [];


    <?php include("../SRC/SRC_creator_function/modification_page_html.php") ?> // permet d'afficher l'HTML de l'page
    // Initialise une affiche par defaut
    
</script>

<!--  Partie Modification d'une page -->
<script type="text/javascript" src="../SRC/SRC_creator_function/modification_table.js"></script><!--  Pour modifier un la page -->

<!-- Structure -->
<script type="text/javascript" src="../SRC/SRC_creator_function/structure_menu.js"></script> <!-- Pour afficher les different element dans la structure -->

<!-- Partie affichage option -->
<script>
    // option sans selection (aucune option séléctionner)
    var op_menu = '<?php include("../SRC/Option_menu/op_menu.php") ?>';
    // Les option dans le menu option
    var op_menu_element = '<?php include("../SRC/Option_menu/op_menu_element.php") ?>'; // option pour les element (text, titre, bouton, image, ligne)
    var op_menu_div = '<?php include("../SRC/Option_menu/op_menu_div.php") ?>'; // option pour les element (text, titre, bouton, image, ligne)

    // Affiche le menu de Modification avancée
    var adv_op_ligne_liste = '<?php include("../SRC/Option_menu/adv_op_ligne_liste.php") ?>';
    var adv_op_style_rss = '<?php include("../SRC/Option_menu/adv_op_style_rss.php") ?>';

    var adv_op_ligne_article = '<?php include("../SRC/Option_menu/adv_op_ligne_article.php") ?>';
    // media
    var adv_op_media_image = '<?php include("../SRC/Option_menu/adv_op_media_image.php") ?>';
    var adv_op_media_video = '<?php include("../SRC/Option_menu/adv_op_media_video.php") ?>';
    var adv_op_media_contenue = '<?php include("../SRC/Option_menu/adv_op_media_contenue.php") ?>';

    // partie module du menu
    //var op_contenue = '<?php //include("../SRC/Option_menu/composant_menu/contenue.php") ?>'; menu qui ne sert plus
    var op_bordure = '<?php include("../SRC/Option_menu/composant_menu/bordure.php") ?>';
    var op_position = '<?php include("../SRC/Option_menu/composant_menu/position.php") ?>';
    var op_autre = '<?php include("../SRC/Option_menu/composant_menu/autre.php") ?>';

    // autre module
    <?php include("../SRC/SRC_creator_function/list_categorie_article.php") ?>
    var op_article_categorie = article_categorie();
    var list_article_categorie = liste_article_categorie();
    console.log(list_article_categorie);

</script>



<!-- Création de la div -->
<script type="text/javascript" src="../SRC/SRC_creator_function/div-creation.js"></script> <!-- Pour crée une div -->
<!-- Composans dans une div -->

<script type="text/javascript" src="../SRC/SRC_creator_function/Option_Element.js"></script> <!-- Pour modifier le css d'un titre, text, image, bouton, liste-->

<script type="text/javascript" src="../SRC/SRC_creator_function/composans/bouton.js"></script> <!-- Pour crée une bouton -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/image.js"></script> <!-- Pour crée une image -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/titre.js"></script> <!-- Pour crée une titre -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/text.js"></script> <!-- Pour crée une texte -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/liste.js"></script> <!-- Pour crée une liste -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/video.js"></script> <!-- Pour crée une video -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/ligne_liste.js"></script> <!-- Pour crée une ligne dans une liste -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/map.js"></script> <!-- Pour crée une map -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/html.js"></script> <!-- Pour crée un HTML et CSS -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/fluxRSS.js"></script> <!-- Pour crée un flux RSS -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/listearticle.js"></script> <!-- Pour crée une liste des article -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/lien_fluxrss.js"></script> <!-- Pour ajouter un ou des liens pour un flux RSS -->
<script type="text/javascript" src="../SRC/SRC_creator_function/composans/ligne_article.js"></script> <!-- Pour crée un flux RSS -->


<!-- Fonction disponible pour les modifications -->
<script type="text/javascript" src="../SRC/SRC_creator_function/updo_comp.js"></script> <!-- Pour monté ou decendre un composant dans une div -->
<script type="text/javascript" src="../SRC/SRC_creator_function/updo_div.js"></script> <!-- Pour monté ou decendre une div dans la structure -->
<script type="text/javascript" src="../SRC/SRC_creator_function/traitement_ligneliste.js"></script> <!-- Permet de traiter l'HTML de l'page pour récuperer les ligne de la liste a modifer -->
<script type="text/javascript" src="../SRC/SRC_creator_function/Option_Element_Fonction.js"></script> <!-- Permet de differencier le code de modifiacation au code de traitement de donnée des modification (RGB en HEX, Supprimer un ellement ...) -->

<!-- Autre Fonctionnalité-->


<!-- Partie enregistrement && Quitter -->
<?php
    if(isset($_GET['Modification'])){ // Pour vérifier si c'est une modification ou une création
    ?>
        <script type="text/javascript" src="../SRC/SRC_creator_function/enregistrement_modification_page.js"></script> <!-- Pour enregistrer la structure et la page -->
        <?php    
    }else{
        ?>
        <script type="text/javascript" src="../SRC/SRC_creator_function/enregistrement_page.js"></script> <!-- Pour enregistrer la structure et la page -->
        <?php 
    }
?>

<script type="text/javascript" src="../SRC/SRC_creator_function/quitter.js"></script> <!-- Pour quitter la page snas sauvegarder -->

