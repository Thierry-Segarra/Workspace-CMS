function quitter(){
    if ( confirm( "Voulez vous quitter cette article" ) ) {
        // suprime (true)
       window.location = "../index.php";
    } else {
        // rien (false)
    }
}