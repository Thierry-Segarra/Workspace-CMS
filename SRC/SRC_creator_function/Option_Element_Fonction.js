function media_image(nom){
    document.getElementById('switch').src = '../Image/'+nom;
}

function media_video(nom){
document.getElementById('switch').src = 'https://www.youtube.com/embed/'+nom;
}

function media_contenue(nom){
    document.getElementById('switch').src = '../Document/'+nom;
}
// Partie Element
//  Parcour dans le menu
function option_defaul(){

document.getElementById('bt_contenue').innerHTML = '↓';
document.getElementById('bt_bordure').innerHTML = '↓';
document.getElementById('bt_position').innerHTML = '↓';
document.getElementById('bt_autre').innerHTML = '↓';
parcour_menu = 0;

document.getElementById('contenue').innerHTML = '';
document.getElementById('bordure').innerHTML = '';
document.getElementById('position').innerHTML = '';
document.getElementById('autre').innerHTML = '';

}
function option_contenue(){
    if(parcour_menu == 1){
        option_defaul();
    }else{
        parcour_menu = 1;
        option_element(stock_i,stock_nom_element,stock_element,stock_divnb,stock_compnb);

        document.getElementById('bt_contenue').innerHTML = '↑';
        document.getElementById('bt_bordure').innerHTML = '↓';
        document.getElementById('bt_position').innerHTML = '↓';
        document.getElementById('bt_autre').innerHTML = '↓';

    }
}

function option_bordure(){
    if(parcour_menu == 2){
        option_defaul();
    }else{
        parcour_menu = 2;
        option_element(stock_i,stock_nom_element,stock_element);

        document.getElementById('bt_contenue').innerHTML = '↓';
        document.getElementById('bt_bordure').innerHTML = '↑';
        document.getElementById('bt_position').innerHTML = '↓';
        document.getElementById('bt_autre').innerHTML = '↓';

    }
}

function option_position(){
    if(parcour_menu == 3){
        option_defaul();
    }else{
        parcour_menu = 3;
        option_element(stock_i,stock_nom_element,stock_element);

        document.getElementById('bt_contenue').innerHTML = '↓';
        document.getElementById('bt_bordure').innerHTML = '↓';
        document.getElementById('bt_position').innerHTML = '↑';
        document.getElementById('bt_autre').innerHTML = '↓';
    }
}

function option_autre(){
    if(parcour_menu == 4){
        option_defaul();
    }else{
        parcour_menu = 4;
        option_element(stock_i,stock_nom_element,stock_element);
    
        document.getElementById('bt_contenue').innerHTML = '↓';
        document.getElementById('bt_bordure').innerHTML = '↓';
        document.getElementById('bt_position').innerHTML = '↓';
        document.getElementById('bt_autre').innerHTML = '↑';
    }
}


// Partie Div

//  Parcour dans le menu
function option_defaul_div(){

    document.getElementById('bt_contenue').innerHTML = '↓';
    document.getElementById('bt_bordure').innerHTML = '↓';
    document.getElementById('bt_position').innerHTML = '↓';
    document.getElementById('bt_autre').innerHTML = '↓';
    parcour_menu = 0;
    
    document.getElementById('contenue').innerHTML = '';
    document.getElementById('bordure').innerHTML = '';
    document.getElementById('position').innerHTML = '';
    document.getElementById('autre').innerHTML = '';
    
    }
    function option_contenue_div(){
        if(parcour_menu == 1){
            option_defaul_div();
        }else{
            parcour_menu = 1;
            option_div(stock_divnb);
    
            document.getElementById('bt_contenue').innerHTML = '↑';
            document.getElementById('bt_bordure').innerHTML = '↓';
            document.getElementById('bt_position').innerHTML = '↓';
            document.getElementById('bt_autre').innerHTML = '↓';
    
        }
    }
    
    function option_bordure_div(){
        if(parcour_menu == 2){
            option_defaul_div();
        }else{
            parcour_menu = 2;
            option_div(stock_divnb);
    
            document.getElementById('bt_contenue').innerHTML = '↓';
            document.getElementById('bt_bordure').innerHTML = '↑';
            document.getElementById('bt_position').innerHTML = '↓';
            document.getElementById('bt_autre').innerHTML = '↓';
    
        }
    }
    
    function option_position_div(){
        if(parcour_menu == 3){
            option_defaul_div();
        }else{
            parcour_menu = 3;
            option_div(stock_divnb);
    
            document.getElementById('bt_contenue').innerHTML = '↓';
            document.getElementById('bt_bordure').innerHTML = '↓';
            document.getElementById('bt_position').innerHTML = '↑';
            document.getElementById('bt_autre').innerHTML = '↓';
        }
    }
    
    function option_autre_div(){
        if(parcour_menu == 4){
            option_defaul_div();
        }else{
            parcour_menu = 4;
            option_div(stock_divnb);
        
            document.getElementById('bt_contenue').innerHTML = '↓';
            document.getElementById('bt_bordure').innerHTML = '↓';
            document.getElementById('bt_position').innerHTML = '↓';
            document.getElementById('bt_autre').innerHTML = '↑';
        }
    }
    



//  convertir RGB en Hexa

function CouleurBorder(Color){
    if(Color.indexOf("rgb(") != -1){
        // Ce traitement permet d'enlever rgb( 
        Color = Color.substring(Color.search('rgb')+4);
        // donnes a la variable red le premier numerot qui vois jusqu'a la virgule
        let red = Color.substring(Color.search(','),0);

        // On enlève jusqu'a la première virgule
        Color = Color.substring(Color.search(',')+2);
        // donnes a la variable green les premier numerot qui vois jusqu'a la virgule
        let green = Color.substring(Color.search(','),0);

        // On enlève jusqu'a la première virgule
        Color = Color.substring(Color.search(',')+2);
        // donnes a la variable red le premier numerot qui vois jusqu'a la parenthèse
        let blue = Color.substring(0,Color.length - 1);

        // On convertie les varaible ne numerot et on le traite pour qu'il puisse nous donnée la donnée en HEXA
        Color = ConvertRGBtoHex(Number(red), Number(green), Number(blue));
    }else{
        // Ce traitement permet d'enlever rgba( 
            Color = Color.substring(Color.search('rgba')+5);
            // donnes a la variable red le premier numerot qui vois jusqu'a la virgule
            let red = Color.substring(Color.search(','),0);
    
            // On enlève jusqu'a la première virgule
            Color = Color.substring(Color.search(',')+2);
            // donnes a la variable green les premier numerot qui vois jusqu'a la virgule
            let green = Color.substring(Color.search(','),0);
    
            // On enlève jusqu'a la première virgule
            Color = Color.substring(Color.search(',')+2);
            // donnes a la variable red le premier numerot qui vois jusqu'a la virgule
            let blue = Color.substring(Color.search(','),0);

            Color = Color.substring(Color.search(',')+2);
            // donnes a la variable red le premier numerot qui vois jusqu'a la parenthèse
            let opacit = Color.substring(0,Color.length - 1);
    
            // On convertie les varaible ne numerot et on le traite pour qu'il puisse nous donnée la donnée en HEXA
            Color = ConvertRGBtoHex(Number(red), Number(green), Number(blue));
            //console.log(Color);
            //console.log(Math.round(Number(opacit)*255));
            document.getElementById('op_opacite_couleur').value = Math.round(Number(opacit)*255);
    }
return Color;
}

function ConvertRGBtoHex(red, green, blue) {
return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

function ColorToHex(color) {
var hexadecimal = color.toString(16);
return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function xdecimal(decimal)
{
    let convert;
    convert = (decimal-0).toString(16);
    return convert;
}


function suprime_element(dv,i,comp,element){
//console.log(comp);
Fermer_op_avancee(); // pour fermer automatiquement la fenetre des option menu avancée (là ou il y a les ligne de liste etc)

delete tablediv["idiv"+dv][comp]; // suprimer les elements du compsans
tablediv["idiv"+dv].splice(tablediv["idiv"+dv].indexOf(comp),1); // suprimer de composans du tableau

document.getElementById("menu_option").innerHTML = op_menu; // pour remettre a vide le menu
// Suprimer tout les Bouton Option
document.getElementById(element+i).remove();
document.getElementById('idnomcomp'+i).remove();
document.getElementById('id_op'+i).remove();
document.getElementById('id_sup'+i).remove();
document.getElementById('id_br'+i).remove();
document.getElementById('up'+i).remove();
document.getElementById('down'+i).remove();
document.getElementById(comp).remove();

boucle_composans(dv)
}

function text_gras(){
    if(gras == 0){
        gras = 1
    }else {gras = 0}

}

function text_italique(){
    if(italique == 0){
        italique = 1
    }else {italique = 0}
}

function text_ligne(){
    if(ligne == 0){
        ligne = 1
    }else {ligne = 0}
}

function adresse(lieux){
    lieux = lieux.substring(lieux.search('&q=')+3);
    lieux = lieux.substring(lieux.search('&t'),0);
    if(lieux.indexOf("+(") != -1){
        lieux = lieux.substring(lieux.indexOf("+("),0);
    }
    //console.log(lieux);
    return lieux;
}

function apercu_map(div,element){
    document.getElementById(div).innerHTML = '<iframe id="'+element+'"width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q='+document.getElementById('op_adresse_map').value+'&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>';
}

function lien(url){
    url = url.substring(url.search("window.open")+13);
    url = url.substring(url.indexOf("`")+1,0);
    //console.log(url);
    return url;
}

function couleur_onoff(){
    if(onoff == 0){
        onoff = 1;
        document.getElementById('op_onoff_couleur').innerHTML= 'OFF';
    }else{
        onoff = 0;
        document.getElementById('op_onoff_couleur').innerHTML= 'ON';
    }

}

function categorie_traitement(element){
    text = document.getElementById(element).innerHTML;
    text = text.substring(text.search(':')+2);
    let lock = 0;
    if(text != 'Tout'){
        for (let i = 0; i < list_article_categorie.length; i++){
            if(lock == 0){
                console.log(i);
                if(list_article_categorie[i] == text){
                    console.log(list_article_categorie[text][0]);
                    let option_element ='list_categorie'+list_article_categorie[text][0];
                    lock = 1;
                    return option_element;
                }
            }
        }
        if(lock == 0){
            let option_element ='list_categorie0';
            alert('categorie "'+text+'" introuvable, il sera modifier par la categorie "Tout"')
            lock = 1;
            return option_element;
        }
    }else{
        let option_element ='list_categorie0';
        return option_element;
    }
    //console.log(text);
    
}
function categorie_traitement_nom(element){
    text = document.getElementById(element).innerHTML;
    text = text.substring(text.search(':')+2);
    return text;
    //console.log(text);
    
}

function modif_op_article_categorie(option,categorie){
    debut = option.substring(0,option.search(categorie)+categorie.length+1);
    fin = option.substring(option.search(categorie)+categorie.length+1);
    option = debut + ' selected' + fin;
    return option
}