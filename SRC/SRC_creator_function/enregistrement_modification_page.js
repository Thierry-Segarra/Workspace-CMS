// faire un form qui envois :
// le titre de l'article
// l'article (div et composans)
// et la structure (le tableaudiv)
function enregistrer(){

    document.getElementById("affichage_avance").innerHTML = '<form action="../SRC/Fonction-Requet/Fonction/enregistrer_page.php" method="post" id="enregistre"></form>';

    document.getElementById('affichage_avance').style.visibility = 'visible';
    document.getElementById("affichage_avance").innerHTML = document.getElementById("affichage_avance").innerHTML + '<br><br>Enregistrement en Cours...<br><br><br>';
    document.getElementById("affichage_avance").innerHTML = document.getElementById("affichage_avance").innerHTML + "nom de l'article : " +nom_article+'<br><br>';
    document.getElementById("affichage_avance").innerHTML = document.getElementById("affichage_avance").innerHTML + 'Traitement du tableau Structure 0%<br><br>';
    document.getElementById("affichage_avance").innerHTML = document.getElementById("affichage_avance").innerHTML + 'Nombre de Div :'+tablediv.length+'<br><br>';
    

    let contenue = '<input type="text" name="titre" value='+nom_article+'><br>';
    for(let i = 0; i < tablediv.length;i++){
    //console.log(tablediv[i]); // savoir la div
    contenue = contenue + '<input type="text" name="div['+i+']" value="'+tablediv[i]+'"><br>'
    let table = tablediv[tablediv[i]] // permet de dire a la table de récureper les element de i de la table

    document.getElementById("affichage_avance").innerHTML = document.getElementById("affichage_avance").innerHTML + 'Nombre de Composans par div :'+table.length+'<br><br>';
            

    for(let j = 0; j < table.length;j++){
        //console.log(table[j]); // savoir le composans dans la div
        let table_nom = table[table[j]]
        //console.log(table_nom); // savoir le nom du composans dans la div
       
        contenue = contenue + '<input type="text" name="composans['+i+']['+j+']" value="'+table[j]+'"><br>'
        contenue = contenue + '<input type="text" name="nom_composans['+i+']['+j+']" value="'+table_nom+'"><br>'

        
    }
    //console.log(contenue)
    
    }
    function encodeHTMLEntities() {
        return String(document.querySelector('page').innerHTML).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    var HTML = encodeHTMLEntities();
    console.log(HTML);
    //console.log(HTML)
    //console.log(HTML)
    contenue = contenue + '<input type="text" name="HTML" value="'+HTML+'"><br>'
    contenue = contenue + '<input type="text" name="Modif" value="modif"><br>'
    document.getElementById('enregistre').innerHTML = contenue;
    //console.log(document.getElementById('enregistre'));

    document.getElementById("affichage_avance").innerHTML = document.getElementById("affichage_avance").innerHTML + 'Traitement du tableau Structure 100%<br>';
    document.getElementById('affichage_avance').scrollTop = 1000;

    document.getElementById('enregistre').submit()
    
}