<?php 

echo '<p>Taille de la bordure</p>'.
'<input name="op_bordure" id="op_bordure" type="text"  placeholder="0 par defaut" value="">px'.
'<div>'.
    '<br>'.
    '<label for="couleur">Couleur de la bordure</label>'.
    '<br><br>'.
    '<input type="color" id="op_border_couleur" name="couleur" value="#000000">'.
    '<br><br>'.
    // partie border
    '<p>Type de bordure</p>'.

    '<select id="op_bordure_type">'.
        '<option value="solid">Solid</option>'.
        '<option value="dotted">Dotted</option>'.
        '<option value="dashed">Dashed</option>'.
        '<option value="double">Double</option>'.
    '</select>'.
    '<span>______________________________________________________________________</span>'.
    '<br><br>'.
    '<span>Bordure séparer</span>'.
    '<br>'.
    '<span>______________________________________________________________________</span>'.
    '<br><br>'.


    
    // partie border TOP
    '<label for="op_bordure_haut">Haut</label>'.'<br>'.
    '<input name="op_bordure_haut" id="op_bordure_haut" type="text"  placeholder="0 par defaut" value="">px'.'<br>'.

    '<label for="couleur">Couleur de la bordure Haut</label>'.
    '<br><br>'.
    '<input type="color" id="op_border_couleur_haut" name="couleur" value="#000000">'.
    '<p>Type de bordure Haut</p>'.

    '<select id="op_bordure_type_haut">'.
        '<option value="solid">Solid</option>'.
        '<option value="dotted">Dotted</option>'.
        '<option value="dashed">Dashed</option>'.
        '<option value="double">Double</option>'.
    '</select>'.
    '<br><br>'.
    '<span>______________________________________________________________________</span>'.
    '<br><br>'.
    // partie border RIGHT
    '<label for="op_bordure_droit">Droit</label>'.'<br>'.
    '<input name="op_bordure_droit" id="op_bordure_droit" type="text"  placeholder="0 par defaut" value="">px'.'<br>'.

    '<label for="couleur">Couleur de la bordure Droit</label>'.
    '<br><br>'.
    '<input type="color" id="op_border_couleur_droit" name="couleur" value="#000000">'.
    '<p>Type de bordure Droit</p>'.

    '<select id="op_bordure_type_droit">'.
        '<option value="solid">Solid</option>'.
        '<option value="dotted">Dotted</option>'.
        '<option value="dashed">Dashed</option>'.
        '<option value="double">Double</option>'.
    '</select>'.
    '<br><br>'.
    '<span>______________________________________________________________________</span>'.
    '<br><br>'.
    // partie border BOTTOM
    '<label for="op_bordure_bas">Bas</label>'.'<br>'.
    '<input name="op_bordure_bas" id="op_bordure_bas" type="text"  placeholder="0 par defaut" value="">px'.'<br>'.

    '<label for="couleur">Couleur de la bordure Bas</label>'.
    '<br><br>'.
    '<input type="color" id="op_border_couleur_bas" name="couleur" value="#000000">'.
    '<p>Type de bordure Bas</p>'.

    '<select id="op_bordure_type_bas">'.
        '<option value="solid">Solid</option>'.
        '<option value="dotted">Dotted</option>'.
        '<option value="dashed">Dashed</option>'.
        '<option value="double">Double</option>'.
    '</select>'.
    '<br><br>'.
    '<span>______________________________________________________________________</span>'.
    '<br><br>'.
    // partie border LEFT
    '<label for="op_bordure_gauche">Gauche</label>'.'<br>'.
    '<input name="op_bordure_gauche" id="op_bordure_gauche" type="text"  placeholder="0 par defaut" value="">px'.'<br>'.

    '<label for="couleur">Couleur de la bordure Gauche</label>'.
    '<br><br>'.
    '<input type="color" id="op_border_couleur_gauche" name="couleur" value="#000000">'.
    '<p>Type de bordure Gauche</p>'.

    '<select id="op_bordure_type_gauche">'.
        '<option value="solid">Solid</option>'.
        '<option value="dotted">Dotted</option>'.
        '<option value="dashed">Dashed</option>'.
        '<option value="double">Double</option>'.
    '</select>'.
    '<span>______________________________________________________________________</span>'.
    '<br><br>'.


    '<p>Bordure arrondi</p>'.

    '<label for="op_bordure_hg">Bordure Haut Gauche</label>'.'<br>'.
    '<span>Axe horizontal</span><input type="range" id="op_bordure_hg_h" name="op_bordure_hg" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_hg_h">0%</span>'.'<br>'.
    '<span>Axe vertical</span><input type="range" id="op_bordure_hg_v" name="op_bordure_hg" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_hg_v">0%</span>'.'<br><br>'.

    '<label for="op_bordure_hd">Bordure Haut Droit</label>'.'<br>'.
    '<span>Axe horizontal</span><input type="range" id="op_bordure_hd_h" name="op_bordure_hg" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_hd_h">0%</span>'.'<br>'.
    '<span>Axe vertical</span><input type="range" id="op_bordure_hd_v" name="op_bordure_hg" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_hd_v">0%</span>'.'<br><br>'.
    
    '<label for="op_bordure_bg">Bordure Bas Gauche</label>'.'<br>'.
    '<span>Axe horizontal</span><input type="range" id="op_bordure_bg_h" name="op_bordure_bg" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_bg_h">0%</span>'.'<br>'.
    '<span>Axe vertical</span><input type="range" id="op_bordure_bg_v" name="op_bordure_bg" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_bg_v">0%</span>'.'<br><br>'.

    '<label for="op_bordure_bd">Bordure Bas Droit</label>'.'<br>'.
    '<span>Axe horizontal</span><input type="range" id="op_bordure_bd_h" name="op_bordure_bd" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_bd_h">0%</span>'.'<br>'.
    '<span>Axe vertical</span><input type="range" id="op_bordure_bd_v" name="op_bordure_bd" min="0" max="100" value="0" step="1">'.'<span id="af_op_bordure_bd_v">0%</span>'.'<br><br>'.
    

'</div>'.
'<br><br>';


?>