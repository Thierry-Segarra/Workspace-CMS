<?php
if (isset($_POST['urlvideo'])) {   
    $URL = $_POST['urlvideo'];
    echo $URL;
    if(stristr($URL, 'https://www.youtube.com')) {
        $URL = stristr($URL, 'watch?v=');
        $URL = substr($URL, 8); // nombre de caractère dans watch?v=
        echo '<br>'.$URL;
        echo '<br>'.stristr($URL, '&ab_channel', true);

        ADD_Video_bdd($URL);
    }
    if(stristr($URL, 'https://youtu.be/')) {
        $URL = stristr($URL, '.be/');
        $URL = substr($URL, 4); // nombre de caractère dans .be/
        echo '<br>'.$URL;
        echo '<br>'.stristr($URL, '&ab_channel', true);

        ADD_Video_bdd($URL);
    }
}
function ADD_Video_bdd($URL){

                $date = date("YmdHis");
                include("connectionBDD.php");
                $requete1 = "INSERT INTO `media`(`nom`,`type`,`date`) VALUES ('".$URL."','VIDEO','".$date."')";
                $exec_requete1 = mysqli_query($db,$requete1);
                header('location:../index.php?media'); // redirige vers la page media

}
?>
