<?php
echo '<h1>OPTION LIGNE</h1>'.

'<p>contenue</p>'.
'<input name="op_contenue" id="op_contenue" placeholder="Saisir votre titre" type="text" value="">'.


'<p>taille du text</p>'.
'<input name="op_taille" id="op_taille" type="text" placeholder="16 par defaut" value="">px'.

'<p>taille de la box</p>'.
'<label for="op_taille_width">Largeur</label>'.'<br>'.
'<input name="op_taille_width" id="op_taille_width" type="text" placeholder="166 par defaut" value="">px'.'<br>'.
'<label for="op_taille_height">Hauteur</label>'.'<br>'.
'<input name="op_taille_height" id="op_taille_height" type="text" placeholder="32 par defaut" value="">px'.'<br>'.

'<p>alignement</p>'.
'<input style="position:absolute;visibility: hidden;z-index=-100;" type="radio" id="none" name="align" value="" checked>'.
'<input type="radio" id="left" name="align" value="left">'.
'<label for="left">Left</label>'.
'<input type="radio" id="center" name="align" value="center">'.
'<label for="center">Center</label>'.
'<input type="radio" id="right" name="align" value="right">'.
'<label for="right">Right</label>'.

'<p>bordure</p>'.
'<input name="op_bordure" id="op_bordure" type="text"  placeholder="0 par defaut" value="">px'.


'<p>marge</p>'.
'<label for="op_marge_haut">Haut</label>'.'<br>'.
'<input name="op_marge_haut" id="op_marge_haut" type="text" placeholder="0 par defaut" value="">'.'<br>'.
'<label for="op_marge_droit">Droit</label>'.'<br>'.
'<input name="op_marge_droit" id="op_marge_droit" type="text" placeholder="0 par defaut" value="">'.'<br>'.
'<label for="op_marge_bas">Bas</label>'.'<br>'.
'<input name="op_marge_bas" id="op_marge_bas" type="text" placeholder="0 par defaut" value="">'.'<br>'.
'<label for="op_marge_gauche">Gauhe</label>'.'<br>'.
'<input name="op_marge_gauche" id="op_marge_gauche" type="text" placeholder="0 par defaut" value="">'.


'<p>rembourrage (padding)</p>'.
'<label for="op_padding_haut">Haut</label>'.'<br>'.
'<input name="op_padding_haut" id="op_padding_haut" type="text" placeholder="0 par defaut" value="">'.'<br>'.
'<label for="op_padding_droit">Droit</label>'.'<br>'.
'<input name="op_padding_droit" id="op_padding_droit" type="text" placeholder="0 par defaut" value="">'.'<br>'.
'<label for="op_padding_bas">Bas</label>'.'<br>'.
'<input name="op_padding_bas" id="op_padding_bas" type="text" placeholder="0 par defaut" value="">'.'<br>'.
'<label for="op_padding_gauche">Gauhe</label>'.'<br>'.
'<input name="op_padding_gauche" id="op_padding_gauche" type="text" placeholder="0 par defaut" value="">';
?>