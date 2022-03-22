function up_div(dv){
    //dv = numero de la div
    // i = numero du composant
    let index = tablediv.indexOf("idiv"+dv);
    //console.log(index);
    let up = tablediv[index];
    let change;
    if(index-1 >= 0){
        change = tablediv[index-1];
        tablediv[index-1]=up;
        tablediv[index]=change;
        //console.log(tablediv);
        affiche_div();

    }
}
function down_div(dv){
    let index = tablediv.indexOf("idiv"+dv);
    //console.log(index);
    let down = tablediv[index];
    let change;
    if(index+1 < tablediv.length){
        change = tablediv[index+1];
        tablediv[index+1]=down;
        tablediv[index]=change;
        //console.log(tablediv);
        affiche_div();

    }
}
function affiche_div(){
    for(let i=0;i < tablediv.length;i++){
        //console.log(tablediv[i]);
        document.getElementById('tampon').innerHTML = document.getElementById('tampon').innerHTML +'<div class="builddiv" id='+tablediv[i]+'>'+document.getElementById(tablediv[i]).innerHTML +'</div>';

        if(i == tablediv.length-1){
            if(document.querySelector('article')){
                document.getElementById('article').innerHTML = document.getElementById('tampon').innerHTML;
            }else if(document.querySelector('page')){
                document.getElementById('page').innerHTML = document.getElementById('tampon').innerHTML;
            }
            document.getElementById('tampon').innerHTML = "";
            affiche_structure();
            
        }
    };
    

}