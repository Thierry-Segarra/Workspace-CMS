<?php 

echo '<p>Taille de la bordure</p>'.
'<input name="op_bordure" id="op_bordure" type="text"  placeholder="0 par defaut" value="">px'.
'<div>'.
    '<br>'.
    '<label for="couleur">Couleur de la bordure</label>'.
    '<br><br>'.
    '<input type="color" id="op_border_couleur" name="couleur" value="#000000">'.
    '<br><br>'.
    '<p>Bordure séparer</p>'.
    '<label for="op_bordure_haut">Haut</label>'.'<br>'.
    '<input name="op_bordure_haut" id="op_bordure_haut" type="text"  placeholder="0 par defaut" value="">px'.'<br>'.

    '<label for="op_bordure_droit">Droit</label>'.'<br>'.
    '<input name="op_bordure_droit" id="op_bordure_droit" type="text"  placeholder="0 par defaut" value="">px'.'<br>'.

    '<label for="op_bordure_bas">Bas</label>'.'<br>'.
    '<input name="op_bordure_bas" id="op_bordure_bas" type="text"  placeholder="0 par defaut" value="">px'.'<br>'.

    '<label for="op_bordure_gauche">Gauche</label>'.'<br>'.
    '<input name="op_bordure_gauche" id="op_bordure_gauche" type="text"  placeholder="0 par defaut" value="">px'.'<br>'.

    '<p>Type de bordure</p>'.

    '<select id="op_bordure_type">'.
        '<option value="solid">Solid</option>'.
        '<option value="dotted">Dotted</option>'.
        '<option value="dashed">Dashed</option>'.
        '<option value="double">Double</option>'.
    '</select>'.

    '<p>Bordure arrondi</p>'.

    '<label for="op_bordure_hg">Bordure Haut Gauche</label>'.'<br>'.
    '<input type="range" id="op_bordure_hg" name="op_bordure_hg" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_hg">0%</span>'.'<br>'.

    '<label for="op_bordure_hd">Bordure Haut Droit</label>'.'<br>'.
    '<input type="range" id="op_bordure_hd" name="op_bordure_hd" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_hd">0%</span>'.'<br>'.
    
    '<label for="op_bordure_bg">Bordure Bas Gauche</label>'.'<br>'.
    '<input type="range" id="op_bordure_bg" name="op_bordure_bg" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_bg">0%</span>'.'<br>'.

    '<label for="op_bordure_bd">Bordure Bas Droit</label>'.'<br>'.
    '<input type="range" id="op_bordure_bd" name="op_bordure_bd" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_bd">0%</sapn>'.'<br>'.
    

'</div>'.
'<br><br>';


?>