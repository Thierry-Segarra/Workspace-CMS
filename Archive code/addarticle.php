<form  action="Fonction-Requet/creat_article.php" method="POST">
    <label for="titre">titre de l article</label>
    <input type="text" id="titre" name ="titre" placeholder="Titre" required>
    <br>
    <textarea name="textarea" id="textarea" cols="50" rows="10" placeholder="mettre du code html" value=''>
        <h1 style="font-size:50px">Titre</h1><h2 style="color:blue"> Sous-titre <h2>
    </textarea>
        <br>
        <input type="submit" value="ajouter">
</form>
        <button onclick="aper()">apercu</button>
        <div class="apercu" id="vue">
    </div>;