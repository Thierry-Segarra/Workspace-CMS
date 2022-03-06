<script>
function mode_sup(){
            if(mode_supimage == 0){
                mode_supimage = 1;
                document.getElementById("modesup").innerHTML= "Mode Supression : ON"; 
            }else{
                mode_supimage = 0;
                document.getElementById("modesup").innerHTML= "Mode Supression : OFF"; 
            }
        }
        function suprim_image(id){
            if(mode_supimage == 1){
                if ( confirm( "Voulez vous suprimer cette image" ) ) {
                    categorie_media = 0;
                    // suprime (true)
                window.location = "./Fonction-Requet/suprimer_image.php?id="+id;
                } else {
                    // rien (false)
                }
            }
        }

        function suprim_video(id){
            if(mode_supimage == 1){
                if ( confirm( "Voulez vous suprimer cette video" ) ) {
                    categorie_media = 1;
                    // suprime (true)
                window.location = "./Fonction-Requet/suprimer_video.php?id="+id;
                } else {
                    
                }
            }else if(mode_supimage == 0){
                    window.open("https://youtu.be/"+document.getElementById("video"+id).name);
            }
            
        }

        function media_categorie_Image(){
            categorie_media = 0;
            document.getElementById("upload_media_liste").innerHTML= `<?php include("./Fonction-Requet/upload_image.php")?>`; 
            document.getElementById("affiche_media_liste").innerHTML= `<?php include("./Fonction-Requet/media_image.php") ?>`; 
        }
        function media_categorie_Video(){
            categorie_media = 1;
            document.getElementById("upload_media_liste").innerHTML= `<?php include("./Fonction-Requet/upload_video.php")?>`; 
            document.getElementById("affiche_media_liste").innerHTML= `<?php include("./Fonction-Requet/media_video.php") ?>`; 
        }


        function categorie(){
            if(categorie_media == 0){ // IMAGE
                document.getElementById("upload_media_liste").innerHTML= `<?php include("./Fonction-Requet/upload_image.php")?>`; 
                document.getElementById("affiche_media_liste").innerHTML= `<?php include("./Fonction-Requet/media_image.php") ?>`; 
            }
            if(categorie_media == 1){ // VIDEO
                document.getElementById("upload_media_liste").innerHTML= `<?php include("./Fonction-Requet/upload_video.php")?>`; 
                document.getElementById("affiche_media_liste").innerHTML= `<?php include("./Fonction-Requet/media_video.php") ?>`;
            } 
        }
</script>