<script>
    // initialisation des variable
    var idiv = 1; // permet de faire une difference entre les div créé
    var compo = 1;// permet de faire une difference entre les composant créé
    var inter = null;// permet d'initialiser et de stoper le op_update()

    
    // initialisation du tableau de structure
    const tablediv = [];


    <?php include("../SRC_creator_function/modification_article_html.php") ?> // permet d'afficher l'HTML de l'article
    // Initialise une affiche par defaut
    
</script>

<!--  Partie Modification d'un article -->
<script type="text/javascript" src="../SRC_creator_function/modification_article_table.js"></script><!--  Pour modifier un l'article -->

<!-- Structure -->
<script type="text/javascript" src="../SRC_creator_function/structure_menu.js"></script> <!-- Pour afficher les different element dans la structure -->

<!-- Partie affichage option -->
<script>
    // option sans selection (aucune option séléctionner)
    var op_menu = '<?php include("../Option_menu/op_menu.php") ?>';
    // Les option dans le menu option
    var op_menu_element = '<?php include("../Option_menu/op_menu_element.php") ?>'; // option pour les element (text, titre, bouton, image, ligne)


    // Affiche le menu de Modification avancée
    var adv_op_ligne_liste = '<?php include("../Option_menu/adv_op_ligne_liste.php") ?>';
    // media
    var adv_op_media_image = '<?php include("../Option_menu/adv_op_media_image.php") ?>';
    var adv_op_media_video = '<?php include("../Option_menu/adv_op_media_video.php") ?>';

    
    // partie module du menu
    var op_contenue = '<?php include("../Option_menu/composant_menu/contenue.php") ?>';
    var op_bordure = '<?php include("../Option_menu/composant_menu/bordure.php") ?>';
    var op_position = '<?php include("../Option_menu/composant_menu/position.php") ?>';
    var op_autre = '<?php include("../Option_menu/composant_menu/autre.php") ?>';


</script>



<!-- Création de la div -->
<script type="text/javascript" src="../SRC_creator_function/div-creation.js"></script> <!-- Pour crée une div -->
<!-- Composans dans une div -->

<script type="text/javascript" src="../SRC_creator_function/Option_Element.js"></script> <!-- Pour modifier le css d'un titre, text, image, bouton, liste-->


<script type="text/javascript" src="../SRC_creator_function/composans/bouton.js"></script> <!-- Pour crée une liste -->
<script type="text/javascript" src="../SRC_creator_function/composans/image.js"></script> <!-- Pour crée une liste -->
<script type="text/javascript" src="../SRC_creator_function/composans/titre.js"></script> <!-- Pour crée une liste -->
<script type="text/javascript" src="../SRC_creator_function/composans/text.js"></script> <!-- Pour crée une liste -->
<script type="text/javascript" src="../SRC_creator_function/composans/liste.js"></script> <!-- Pour crée une liste -->
<script type="text/javascript" src="../SRC_creator_function/composans/video.js"></script> <!-- Pour crée une liste -->
<script type="text/javascript" src="../SRC_creator_function/composans/ligne-liste.js"></script> <!-- Pour crée une ligne dans une liste -->

<!-- Fonction disponible pour les modifications -->
<script type="text/javascript" src="../SRC_creator_function/updo_comp.js"></script> <!-- Pour monté ou decendre un composant dans une div -->
<script type="text/javascript" src="../SRC_creator_function/updo_div.js"></script> <!-- Pour monté ou decendre une div dans la structure -->
<script type="text/javascript" src="../SRC_creator_function/traitement_ligneliste.js"></script> <!-- Permet de traiter l'HTML de l'article pour récuperer les ligne de la liste a modifer -->
<script type="text/javascript" src="../SRC_creator_function/Option_Element_Fonction.js"></script> <!-- Permet de differencier le code de modifiacation au code de traitement de donnée des modification (RGB en HEX, Supprimer un ellement ...) -->


<!-- Partie enregistrement && Quitter -->
<?php
    if(isset($_GET['Modification'])){ // Pour vérifier si c'est une modification ou une création
    ?>
        <script type="text/javascript" src="../SRC_creator_function/enregistrement_modification.js"></script> <!-- Pour enregistrer la structure et l'article -->
        <?php    
    }else{
        ?>
        <script type="text/javascript" src="../SRC_creator_function/enregistrement.js"></script> <!-- Pour enregistrer la structure et l'article -->
        <?php 
    }
?>

<script type="text/javascript" src="../SRC_creator_function/quitter.js"></script> <!-- Pour quitter l'article snas sauvegarder -->

