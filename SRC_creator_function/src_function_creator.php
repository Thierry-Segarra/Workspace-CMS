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

    // Les option de chaque composans
    var op_menu_titre = '<?php include("../Option_menu/op_menu_titre.php") ?>';
    var op_menu_text = '<?php include("../Option_menu/op_menu_text.php") ?>';
    var op_menu_bouton = '<?php include("../Option_menu/op_menu_bouton.php") ?>';
    var op_menu_image = '<?php include("../Option_menu/op_menu_image.php") ?>';
    var op_menu_liste = '<?php include("../Option_menu/op_menu_liste.php") ?>';
    var op_menu_ligne_liste = '<?php include("../Option_menu/op_menu_ligne_liste.php") ?>';


    var adv_op_ligne_liste = '<?php include("../Option_menu/adv_op_ligne_liste.php") ?>';

</script>



<!-- Création de la div -->
<script type="text/javascript" src="../SRC_creator_function/div-creation.js"></script> <!-- Pour crée une div -->
<!-- Composans dans une div -->
<script type="text/javascript" src="../SRC_creator_function/titre-creation.js"></script> <!-- Pour crée un titre -->
<script type="text/javascript" src="../SRC_creator_function/text-creation.js"></script> <!-- Pour crée un text --> 
<script type="text/javascript" src="../SRC_creator_function/bouton-creation.js"></script> <!-- Pour crée un bouton --> 
<script type="text/javascript" src="../SRC_creator_function/image-creation.js"></script> <!-- Pour crée une image -->
<script type="text/javascript" src="../SRC_creator_function/liste-creation.js"></script> <!-- Pour crée une liste -->
<script type="text/javascript" src="../SRC_creator_function/ligne-liste-creation.js"></script> <!-- Pour crée une ligne dans une liste -->

<script type="text/javascript" src="../SRC_creator_function/updo_comp.js"></script> <!-- Pour monté ou decendre un composant dans une div -->
<script type="text/javascript" src="../SRC_creator_function/updo_div.js"></script> <!-- Pour monté ou decendre une div dans la structure -->

<script type="text/javascript" src="../SRC_creator_function/traitement_ligneliste.js"></script> <!-- Permet de traiter l'HTML du l'article pour récuperer les ligne de la liste a modifer -->



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

