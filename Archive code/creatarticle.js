function aper(){
    document.getElementById("vue").innerHTML = document.getElementById("textarea").value;
}
var lock = 0;
function add_article(){
    if(lock == 1){
        lock = 0;document.getElementById("new-article").innerHTML= '';
        document.getElementById("new-article").setAttribute("class","");
    }
    else if(lock == 0){
    lock = 1;
    document.getElementById("new-article").innerHTML= list; // include("Fonction-Requet/addarticle.php")
    document.getElementById("new-article").setAttribute("class","ligne");
    };
};