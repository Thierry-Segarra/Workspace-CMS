// faire un form qui envois :
// le titre de l'article
// l'article (div et composans)
// et la structure (le tableaudiv)
function enregistrer(){
    var nom_article = prompt("Titre de cette article");
    if(nom_article != null){
    let contenue = '<input type="text" name="titre" value='+nom_article+'><br>';
    for(let i = 0; i < tablediv.length;i++){
    console.log(tablediv[i]); // savoir la div
    contenue = contenue + '<input type="text" name="div['+i+']" value="'+tablediv[i]+'"><br>'
    let table = tablediv[tablediv[i]] // permet de dire a la table de récureper les element de i de la table
    for(let j = 0; j < table.length;j++){
        console.log(table[j]); // savoir le composans dans la div
        let table_nom = table[table[j]]
        console.log(table_nom); // savoir le nom du composans dans la div
       
        contenue = contenue + '<input type="text" name="composans['+i+']['+j+']" value="'+table[j]+'"><br>'
        contenue = contenue + '<input type="text" name="nom_composans['+i+']['+j+']" value="'+table_nom+'"><br>'

        
    }
    console.log(contenue)
    
    }
    let HTML = "'"+document.querySelector('article').innerHTML+"'";
    console.log(HTML)
    contenue = contenue + '<input type="text" name="HTML" value='+HTML+'><br>'
    document.getElementById('enregistre').innerHTML = contenue;
    console.log(document.getElementById('enregistre'));
    document.getElementById('enregistre').submit()
    }
}