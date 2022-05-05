<div class="builddiv" id="idiv1"><div id="div1comp1"><p id="texdiv11" disabled="">s'aider</p></div></div>

<script>
    var html = document.getElementById("idiv1").innerHTML;
    console.log('LOG :'+html);
    var encodedStr = html.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#' + i.charCodeAt(0) + ';';
});
console.log('résultat : '+encodedStr);
</script>

<?php
$text = `<div class="builddiv" id="idiv1"><div id="div1comp1"><p id="texdiv11" disabled="">s'aider</p></div></div>`;
$HTML = htmlspecialchars($text, ENT_QUOTES);

echo $HTML;
print
?>