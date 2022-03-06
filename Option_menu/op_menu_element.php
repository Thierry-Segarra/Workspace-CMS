<?php
echo '<h1 id="nom_element"></h1>'.

'<div class="section_menu">'.
'<p>CONTENUE</p><button id="bt_contenue" onclick="clearInterval(inter),option_contenue()">↓</button><br>'.
'</div>'.
'<div id="text"></div>'.
'<div id="contenue"></div>'.


'<div class="section_menu">'.
'<p>BORDURE</p><button id="bt_bordure" onclick="clearInterval(inter),option_bordure()">↓</button><br>'.
'</div>'.
'<div id="bordure"></div>'.

'<div class="section_menu">'.
'<p>POSITION</p><button id="bt_position" onclick="clearInterval(inter),option_position()">↓</button><br>'.
'</div>'.
'<div id="position"></div>';

?>