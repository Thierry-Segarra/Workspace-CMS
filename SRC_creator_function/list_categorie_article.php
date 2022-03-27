function article_categorie(){
<?php
    $categorie = '<option id"list_categorie0" value="Tout">Tout</option>';
    $requete = "SELECT * FROM `categorie`";
    $exec_requete = mysqli_query($db,$requete);
    while ($row = mysqli_fetch_assoc($exec_requete)){
        $categorie = $categorie . '<option id"list_categorie'.$row['id'].'" value="'.$row['nom'].'">'.$row['nom'].'</option>';
    };
    
?>
var result = '<?php echo $categorie?>';
return result;
};

function liste_article_categorie(){
    var list = [];
<?php
    $liste = [];
    $requete = "SELECT * FROM `categorie`";
    $exec_requete = mysqli_query($db,$requete);
    while ($row = mysqli_fetch_assoc($exec_requete)){
        // mettre il faudra mettre un tableu pour mettre l'id et son nom en js
        ?>
        list.push('<?php echo $row['nom'] ?>');
        list['<?php echo $row['nom'] ?>'] = [];
        list['<?php echo $row['nom'] ?>'].push('<?php echo $row['id'] ?>');
        <?php
    };
    
?>
return list;
};