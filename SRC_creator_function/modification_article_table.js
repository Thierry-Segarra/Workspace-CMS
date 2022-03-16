var divtable = 0;
var comptable = 0;
function modif_table_structure(){
    //console.log('Traitement en cours ...');

    while(traitement.indexOf('idiv') != -1){
        var idiv = traitement.indexOf('idiv'); // chercher le premier element qui commence par idiv

        traitement = traitement.substring(idiv+4); // suprimer les caratère qui sont devans le premier ellement trouver plus l'element trouver 

        //pour que les caractère qui suit est un numerot de la div
        var idivt = traitement.indexOf('"'); // on cherche le caractère qui suit le numerot

        divtable = traitement.substring(0,idivt); // on isole le numero grace au caractère  "  qui défini la limit
        //console.log('idiv : '+divtable);

        // intégrer dans la table "idiv"+le numero de la div
        let comdiv = "idiv"+divtable; // ex: idiv1
        tablediv.push(comdiv);
        tablediv[comdiv]= []; 

        while(traitement.indexOf('div'+divtable+"comp") != -1){
            var comp = traitement.indexOf('div'+divtable+"comp"); // chercher le premier element qui commence par 'div'+divtable+"comp"

            traitement = traitement.substring(comp+7+idivt); // suprimer les caratère qui sont devans le premier ellement trouver plus l'element trouver 
            //pour que les caractère qui suit est un numerot du composans

            var compt = traitement.indexOf('"'); // on cherche le caractère qui suit le numerot

            comptable = traitement.substring(0,compt); // on isole le numero grace au caractère  "  qui défini la limit
            //console.log('composans : '+comptable);


            var nom = traitement.indexOf('":"'); // chercher le premier element qui commence par ":" pour avoir les caractère du test en premier

            traitement = traitement.substring(nom+3); // suprimer les caratère qui sont devans le premier ellement trouver plus l'element trouver 
            //pour que les caractère qui suit est le nom du composans
            var nomt = traitement.indexOf('"}'); // on cherche le caractère qui suit le nom du composans

            var nomtable = traitement.substring(0,nomt); // on isole le nom grace au caractère "} qui défini la limit
            //console.log('nom : '+nomtable);

            // intégrer dans la table "idiv"+le numero de la div
            tablediv["idiv"+divtable].push("div"+divtable+"comp"+comptable);
            tablediv["idiv"+divtable]["div"+divtable+"comp"+comptable] = nomtable; // ajouter a divcomp un nom
            
        }
    };
    //console.log('Traitement Terminer');
    //console.log(tablediv);
}