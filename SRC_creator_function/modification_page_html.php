<?php
if(isset($_GET['Modification'])){
    $id_article = $_GET['Modification']; // récuperer l'id de l'article a modifier
    // Pour pouvoir récuperer le titre, la table Structure et le chemain de l'article pour l'implementé dans la balise article

    include('../Fonction-Requet/connectionBDD.php');
    
    // récuperer info du fichier pour pouvoir le suprimer
    $requete = "SELECT * FROM `page` WHERE id=".$id_article."";
    $exec_requete = mysqli_query($db,$requete);
    $reponse      = mysqli_fetch_array($exec_requete);
    
    $traitement = unserialize($reponse['Structure']);
    //echo 'tablediv = ['.$tablediv.'];';
    
    ?>
    var traitement = '<?php echo json_encode($traitement); ?>'; // récupère la table php en string js
    var html = `<?php include(".".$reponse["Chemain"]); ?>`; // récuperer le chemain de l'article pour ensuite l'afficher dans la balise < page >
    var nom_article = '<?php echo $reponse["titre"] ?>'; // récupère le titre pour pas le remarquer l'or de l'enregistrement des modification
    <?php
}else{ ?> var html =``; <?php }; 
?>