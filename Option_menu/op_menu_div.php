<?php
echo '<h1 id="nom_element"></h1>'.

'<div class="section_menu">'.
'<p>CONTENUE</p><button id="bt_contenue" onclick="clearInterval(inter),option_contenue_div()">↓</button><br>'.
'</div>'.
'<div id="contenue"></div>'.


'<div class="section_menu">'.
'<p>BORDURE</p><button id="bt_bordure" onclick="clearInterval(inter),option_bordure_div()">↓</button><br>'.
'</div>'.
'<div id="bordure"></div>'.

'<div class="section_menu">'.
'<p>POSITION</p><button id="bt_position" onclick="clearInterval(inter),option_position_div()">↓</button><br>'.
'</div>'.
'<div id="position"></div>'.

'<div class="section_menu">'.
'<p>AUTRE</p><button id="bt_autre" onclick="clearInterval(inter),option_autre_div()">↓</button><br>'.
'</div>'.
'<div id="autre"></div>';

?>