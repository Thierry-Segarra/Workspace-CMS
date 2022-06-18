<script>
    function mode_sup(){ // pour change de mode entre regarder un element ou suprimer l'element
        if(mode_supression == 0){
            mode_supression = 1;
            document.getElementById("modesup").innerHTML= "Mode Supression : ON"; 
        }else{
            mode_supression = 0;
            document.getElementById("modesup").innerHTML= "Mode Supression : OFF"; 
        }
    }

    function suprim_image(id){ // suprimer l'image ou ouvrir une page pour regarder l'image
        if(mode_supression == 1){ // suprimer
            if ( confirm( "Voulez vous suprimer cette image" ) ) {
                categorie_media = 0;
                // suprime (true)
            window.location = "./SRC/Fonction-Requet/Suprimer/suprimer_image.php?id="+id;
            }
        }else if(mode_supression == 0){ // ouvrir image
                window.open(document.getElementById("img"+id).attributes.src.value); // il y a deja /Image/
        }
    }

    function suprim_video(id){ // suprimer la vidéo ou ouvrir la vidéo
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

    function suprim_doc(id){ // suprimer le document ou ouvrir une page pour regarder le document
        if(mode_supression == 1){ // suprimer
            if ( confirm( "Voulez vous suprimer cette video" ) ) {
                categorie_media = 2;
                // suprime (true)
            window.location = "./SRC/Fonction-Requet/Suprimer/suprimer_doc.php?id="+id;
            }
        }else if(mode_supression == 0){// ouvrir document
                window.open("Document/"+document.getElementById("pdf"+id).attributes.name.value);
        }
        
    }
    // Permer de changer de munu entre les images, les vidéos et les documents
    function media_categorie_Image(){
        categorie_media = 0;
        document.getElementById("upload_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Upload/upload_image.php")?>`; // Form pour upload un/des images
        document.getElementById("affiche_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Media/media_image.php") ?>`; // Affiche toute les images
    }
    function media_categorie_Video(){
        categorie_media = 1;
        document.getElementById("upload_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Upload/upload_video.php")?>`; // Form pour upload un vidéo
        document.getElementById("affiche_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Media/media_video.php") ?>`; // Affiche toute les vidéo
    }
    function media_categorie_Doc(){
        categorie_media = 2;
        document.getElementById("upload_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Upload/upload_doc.php")?>`; // Form pour upload un/des document
        document.getElementById("affiche_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Media/media_doc.php") ?>`; // Affiche tout les documents
    }

    // Cette fonction est appeler dans le fichier liencheck.php
    function categorie(){ // permet d'affichier la catégorie dans laquelle l'utilisateur été avans le rechargement de la page
        
        if(categorie_media == 0){ // IMAGE
            document.getElementById("upload_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Upload/upload_image.php")?>`; // Form pour upload un/des images
            document.getElementById("affiche_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Media/media_image.php") ?>`; // Affiche toute les images
        }
        if(categorie_media == 1){ // VIDEO
            document.getElementById("upload_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Upload/upload_video.php")?>`; // Form pour upload un vidéo
            document.getElementById("affiche_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Media/media_video.php") ?>`;// Affiche toute les vidéo
        }
        if(categorie_media == 2){ // DOCUMENT
            document.getElementById("upload_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Upload/upload_doc.php")?>`; // Form pour upload un/des document
            document.getElementById("affiche_media_liste").innerHTML= `<?php include("./SRC/Fonction-Requet/Media/media_doc.php") ?>`; // Affiche tout les documents
        } 
    }
</script>