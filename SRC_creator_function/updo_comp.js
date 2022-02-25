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



// up down pour la ligne dans une ligne


function ligne_up(i,comp,nbcomp,divnb){
    // i = numero de de la div et du composans
    // comp = numero du composans
    // nbcomp = numero de la list
    // divnb = numero de la div
      // console.log('i : '+i);
      // console.log('comp : '+comp);
      // console.log('nbcomp : '+nbcomp);
      // console.log('divnb : '+divnb);
   
       let av_ligne = '';
       let ligne_deplacer = '';
   
       var list = document.getElementById("apercu").innerHTML
       list = list.substring(list.search('<ul id="listdiv'+i));
       list = list.substring(0,list.search('</ul>')+5);
       // contenue avant la ligne à monté
       var avant_ligne = list.substring(list.search('<ul id="listdiv'+i)+('<ul id="listdiv'+i+'">').length);
       avant_ligne = avant_ligne.substring(0,avant_ligne.search('<li id="lignelistdiv'+comp));
   
       // isoloer la ligne a monté
       var ligne_selec = list.substring(list.search('<li id="lignelistdiv'+comp));
       ligne_selec = ligne_selec.substring(0,ligne_selec.search('</li>')+5);
       
       // contenue apres la ligne à monté
       var apres_ligne = list.substring(list.search(ligne_selec)+ligne_selec.length);
       apres_ligne = apres_ligne.substring(0,apres_ligne.search('</ul>'));
       /*
       console.log('##########');
       console.log('LISTE : '+list);
       console.log('|');
       console.log('AVANT : '+avant_ligne);
       console.log('|');
       console.log('SELECTIONER : '+ligne_selec);
       console.log('|');
       console.log('APRES : '+apres_ligne);
       console.log('##########');
       */
   
       if(avant_ligne != ''){
           traitement = avant_ligne;
           while(traitement.search('<li id="lignelistdiv')!=-1){ // On veut récuperer le dernier element de la variable avant_ligne donc pas de if
               ligne_deplacer = traitement;
               reste = traitement.substring(traitement.search('</li>')+5);
               av_ligne = av_ligne + traitement.substring(0,traitement.search(reste));
               traitement = traitement.substring(traitement.search('</li>')+5);
               if(traitement == ''){
                   document.getElementById('listdiv'+i).innerHTML = av_ligne+ligne_selec+ligne_deplacer+apres_ligne;
                   document.getElementById("list_composans").innerHTML = '';
                   traitement_ligneliste(i,divnb,nbcomp)
               }
           }
       }
   
   
   }
   
   
   function ligne_down(i,comp,nbcomp,divnb){
       // i = numero de de la div et du composans
       // comp = numero du composans
       // nbcomp = numero de la list
       // divnb = numero de la div
         // console.log('i : '+i);
         // console.log('comp : '+comp);
         // console.log('nbcomp : '+nbcomp);
         // console.log('divnb : '+divnb);
      
          let av_ligne = '';
      
          var list = document.getElementById("apercu").innerHTML
          list = list.substring(list.search('<ul id="listdiv'+i));
          list = list.substring(0,list.search('</ul>')+5);
          // contenue avant la ligne à monté
          var avant_ligne = list.substring(list.search('<ul id="listdiv'+i)+('<ul id="listdiv'+i+'">').length);
          avant_ligne = avant_ligne.substring(0,avant_ligne.search('<li id="lignelistdiv'+comp));
      
          // isoloer la ligne a monté
          var ligne_selec = list.substring(list.search('<li id="lignelistdiv'+comp));
          ligne_selec = ligne_selec.substring(0,ligne_selec.search('</li>')+5);
          
          // contenue apres la ligne à monté
          var apres_ligne = list.substring(list.search(ligne_selec)+ligne_selec.length);
          console.log('APRES : '+ligne_selec);
          apres_ligne = apres_ligne.substring(0,apres_ligne.search('</ul>'));
          
          console.log('##########');
          console.log('LISTE : '+list);
          console.log('|');
          console.log('AVANT : '+avant_ligne);
          console.log('|');
          console.log('SELECTIONER : '+ligne_selec);
          console.log('|');
          console.log('APRES : '+apres_ligne);
          console.log('##########');
          
          if(apres_ligne != ''){
              traitement = apres_ligne;
              if(traitement.search('<li id="lignelistdiv')!=-1){ // On veut récuperer le premier element de la variable apres_ligne donc pas de while
   
                  reste = traitement.substring(traitement.search('</li>')+5);
                  av_ligne = av_ligne + traitement.substring(0,traitement.search(reste));
                  traitement = traitement.substring(traitement.search('</li>')+5);
                   if(av_ligne == ''){av_ligne = apres_ligne}
                   // affiche le résultat
                   document.getElementById('listdiv'+i).innerHTML = avant_ligne+av_ligne+ligne_selec+traitement;
                   document.getElementById("list_composans").innerHTML = '';
                   traitement_ligneliste(i,divnb,nbcomp)
   
              }
          }
      
      
      }