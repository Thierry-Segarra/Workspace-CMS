<?php

echo '<p>Couleur backgrouwn</p>'.
'<button id="op_onoff_couleur" onclick="couleur_onoff()" value="0">ON</button>'.'<br>'.
'<input type="color" id="op_backgrouwn_couleur" name="couleur" value="#ffffff">'.'<br>'.
'<label for="op_opacite_couleur">Opacité Couleur</label>'.'<br>'.
'<input type="range" id="op_opacite_couleur" name="op_opacite_couleur" min="0" max="255" value="255" step="1">'.'<span id="af_op_opacite_couleur">255</span>'.'<br><br>'.

'<label for="op_opacite">Opacité</label>'.'<br>'.
'<input type="range" id="op_opacite" name="op_opacite" min="0" max="100" value="100" step="1">'.'<span id="af_op_opacite">100%</span>'.'<br><br>';

?>