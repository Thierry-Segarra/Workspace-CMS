function media_image(nom){
    document.getElementById('switch').src = '../Image/'+nom;
}

function media_video(nom){
document.getElementById('switch').src = 'https://www.youtube.com/embed/'+nom;
}


//  Parcour dans le menu
function option_defaul(){

document.getElementById('bt_contenue').innerHTML = '↓';
document.getElementById('bt_bordure').innerHTML = '↓';
document.getElementById('bt_position').innerHTML = '↓';
parcour_menu = 0;

document.getElementById('text').innerHTML = '';
document.getElementById('contenue').innerHTML = '';
document.getElementById('bordure').innerHTML = '';
document.getElementById('position').innerHTML = '';

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
}
}


//  convertir RGB en Hexa

function CouleurBorder(Color){
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

return Color;
}

function ConvertRGBtoHex(red, green, blue) {
return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

function ColorToHex(color) {
var hexadecimal = color.toString(16);
return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}


function suprime_element(dv,i,comp,element){
console.log(comp);
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