function up_comp(dv,i){
    //dv = numero de la div
    // i = numero du composant
    let index = tablediv["idiv"+dv].indexOf(i);
    let up = tablediv["idiv"+dv][index];
    let change;
    if(index-1 >= 0){
        change = tablediv["idiv"+dv][index-1];
        tablediv["idiv"+dv][index-1]=up;
        tablediv["idiv"+dv][index]=change;
        console.log(tablediv["idiv"+dv]);
        //document.getElementById('tampon').innerHTML = document.getElementById('idiv'+dv).innerHTML 
        //document.getElementById('idiv'+dv).innerHTML = '<button onclick="addTitreDiv('+dv+')">titre</button><button onclick="addTextDiv('+dv+')">text</button><button onclick="addBoutonDiv('+dv+')">bouton</button><button onclick="addImageDiv('+dv+')">image</button><button onclick="suprime_Div('+dv+')">suprimer</button>';
        affiche_comp(dv);
        /*
        tablecompo.forEach(element => {
            document.getElementById('idiv'+dv).innerHTML = document.getElementById(element).innerHTML
        });
        */ 

    }
}
function down_comp(dv,i){
    let index = tablediv["idiv"+dv].indexOf(i);
    let down = tablediv["idiv"+dv][index];
    let change;
    if(index+1 < tablediv["idiv"+dv].length){
        change = tablediv["idiv"+dv][index+1];
        tablediv["idiv"+dv][index+1]=down;
        tablediv["idiv"+dv][index]=change;
        console.log(tablediv["idiv"+dv]);
        //document.getElementById('tampon').innerHTML = document.getElementById('idiv'+dv).innerHTML 
        //document.getElementById('idiv'+dv).innerHTML = '<button onclick="addTitreDiv('+dv+')">titre</button><button onclick="addTextDiv('+dv+')">text</button><button onclick="addBoutonDiv('+dv+')">bouton</button><button onclick="addImageDiv('+dv+')">image</button><button onclick="suprime_Div('+dv+')">suprimer</button>';
        affiche_comp(dv);
        /*
        tablecompo.forEach(element => {
            document.getElementById('idiv'+dv).innerHTML = document.getElementById(element).innerHTML
        });
        */ 

    }
}
function affiche_comp(dv){
    for(let i=0;i < tablediv["idiv"+dv].length;i++){
        document.getElementById('tampon').innerHTML = document.getElementById('tampon').innerHTML +'<div id='+tablediv["idiv"+dv][i]+'>'+document.getElementById(tablediv["idiv"+dv][i]).innerHTML +'</div>';
        console.log(tablediv["idiv"+dv][i]);
        if(i == tablediv["idiv"+dv].length-1){
            document.getElementById('idiv'+dv).innerHTML = document.getElementById('tampon').innerHTML;
            document.getElementById('tampon').innerHTML = "";
            boucle_composans(dv)
        }
    };
    

}