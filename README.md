# Bienvenue sur WorkSpace

Cette outil vous permet de crée votre site facilement et de mettre a jour vos actualiter

# Document

## Chapitre 1 Fichier de Stockage

Le Fichier Article et Page stocke les page ete article que vous crée vien WorkSpace

Le Fichier Image et Document sont de fichier on se trouve les images et pdf que vous transferer pour les retrouver durant la création d'une page ou article


## Chapitre 2 Fichier Menu-Page

Tableau de bort : page d'acceuil du back office

Page : Liste des pages crée, ce menue permet aussi de crée, modifier le titre, description et sa catégorie

Article : Liste des articles crée, ce menue permet aussi de crée, modifier le titre, description et sa catégorie

Formulaire : Liste des formulaire crée, ce menue permet aussi de crée, modifier le titre, description et sa catégorie

Media : Liste de document importer, elle permet d'imorter des images, URL de vidéo et de PDF, elle permet aussi de les suprimers

Paramètre : Dispode des paramètre des catégorie, afficeh la liste des catégories existant ou crée, ajoute, modifier(titre)

### Création et affichage de contenue

Création article et Création page : Permet de crée un article et une page

Afficher article et Afficher Page : Permet d'afficher le contenue d'une parge ou d'unarticle crée

## Chapitre 3 Fichier Fonction-Requet

afficher-list-article.php :
Permet d'afficher la liste des articles crée.

afficher-list-page.php :
Permet d'afficher la liste des pages crée.

connectionBDD.php :
Permet de ce connecter à la base de donnée.

enregistrer_article.php :
Permet d'enregister des nouveaux articles ou des modifications.

enregistrer_page.php :
Permet d'enregister des nouveaux pages ou des modifications.

function_media.php :
Ce fichier permet de naviguer dans le menu Media, il permet aussi de suprimer des elements importer ou bien meme de les regarder.

function_parametre.php :
Ce fichier permet de naviguer dans le menu Parametre, il permet aussi de suprimer des elements importer ou bien meme de les regarder.

index_function.php :
Ce fichier dispose de function qui permet d'afficher des paramètre comme la supression des articles, des pages et des catégories et permet aussi d'afficher le menue avancer pour les parge, article et catégorie.

lienCheck.php :
Ce fichier permet de rediriger les personnes sur la page ou il y a eu un modification.

media_doc.php :
Permet d'afficher la liste des document importer dans le menu Media catégorie Document.

media_image.php :
Permet d'afficher la liste des document importer dans le menu Media catégorie Document.

media_video.php :
Permet d'afficher la liste des document importer dans le menu Media catégorie Document.

menu.js :
Permet de naviguer dans le menu, d'aller de la page a l'article.

modifier_description_article.php :
Permet de mofifier les descriptions des articles.

modifier_description_page.php :
Permet de mofifier les descriptions des page.

modifier-titre-article.php :
Permet de modifier le titre des articles.

modifier-titre-categorie.php :
Permet de modifier le titre des categorie.

modifier-titre-page.php :
Permet de modifier le titre des pages.

parametre_categorie.php :
Permet d'afficher la liste des catégories, permet aussi de les modifier et de les suprimers.

parametre_newcategorie.php :
permet d'ajouter une nouvelle categorie.

suprimer_article.php :
Permet de suprimer des articles dans la BDD et dans le fichier Article.

suprimer_categorie.php :
Permet de suprimer des categorie dans la BDD sauf pour la catégorie de base.

suprimer_doc.php :
Permet de suprimer des document dans la BDD et dans le fichier Document.

suprimer_image.php :
Permet de suprimer des images dans la BDD et dans le fichier Image.

suprimer_page.php :
Permet de suprimer des pages dans la BDD et dans le fichier Pages.

suprimer_video.php :
Permet de suprimer l'URL des video dans la BDD.

upload_doc_form.php :
Permet d'upload des document sur la BDD et dans le fichier Document

upload_doc.php :
Affichage permetant d'upload des documents

upload_image_form.php :
Permet d'upload des document sur la BDD et dans le fichier Image

upload_image.php :
Affichage permetant d'upload des images

upload_image_form.php :
Permet d'upload des document sur la BDD et dans le fichier Image

upload_image.php :
Affichage permetant d'upload des images

upload_parametre_categorie_form.php:
Permet d'ajouter une nouvelle catégorie dans la BDD

upload_video_form.php :
Permet d'upload des video sur la BDD

upload_video.php :
Affichage permetant d'upload des images

## Chapitre 4 Fichier Option_menu

adv_op_ligne_liste.php :
affichage par defaut des option avancé.

adv_op_media_contenue.php :
affichage les document upload pour les ajoutée dans les articles et les pages.

adv_op_media_image.php :
affichage les image upload pour les ajoutée dans les articles et les pages.

adv_op_media_video.php :
affichage les video upload pour les ajoutée dans les articles et les pages

op_menu_div.php :
Affichage des option d'une div

op_menu_element.php :
Affichage des option d'un element

op_menu.php :
Affichage par defaut des options.

### Fichier composant

autre.php :
composans du menu qui permet de modifier la couleur en arrière plant plus de l'opacité de l'element et aussi l'opacité de la couleur

bordure.php :
composant du menue permetant de modifier la taille, la couleur et l'arrondie d'une bordure.

contenue.php :
composant du menu permetant de modifier sont contenue, sa taille et sont alignement.

Position.php :
composant du menue permetant de modifier sa position a l'intertieur et exterieur (margin et padding).


## Chapitre 5 Fichier SRC_creator_function

div-creation.js :
Permet de crée un div pour les article et les page, ce fichier permet aussi de les suprimer.

enregistrement_modification_page.js :
Permet d'enregistrer les modification pour les pages.

enregistrement_modification.js :
Permet d'enregistrer les modification pour les articles.

enregistrement_page.js :
Permet d'enregister des nouvelles pages.

enregistrement.js :
Permet d'enregister des nouveaux articles.

modification_article_html.php :
Permet de récuperet des information de l'article, la table de tructure, le chemain de l'aricle et de sont titre.

modification_article_table.php :
Permet de faire des modification avec la table de structure deja enregistrer

modification_page_html.php :
Permet de récuperet des information d'une page, la table de tructure, le chemain de l'aricle et de sont titre.

modification_table.php :
Permet de faire des modification avec la table de structure deja enregistrer

Option_Element_Fonction.js :
permet de naviguer dans les menu de création plus des fonction de supressino et de modification.

Option_Element.js :
Permet de montré les modifications en temsp réel et de garder les modifications

quitter.js :
Permet de quiter le menu de création d'article et de pages

src_function_creator_page.php :
Permet d'inisialiser des variable et appeler les document esseciel pour la création d'une page

src_function_creator.php :
Permet d'inisialiser des variable et appeler les document esseciel pour la création d'un article

structure_menu.js :
Permet de traiter le information pour voire les modification que l'on peut donnée

traitement_ligneliste.js :
Permet d'afficher les modification avancer selon les composant choisis.

updo_comp.js :
Permet de monté ou de desencde des element choisis

updo_div.js :
Permet de monté ou de desencde des div choisis

### Fichier composans
ces fichier permet de crée des element pour les pages et les articles


## Chapitre 6 Autre Fichier Important

acceuil.php :
Ce fichier n'est pas utiliser

idée developpement.txt :
Ce fichier est la pour noté des idée durant le developpement

index.php :
Ce fichier est imporatant car il permet de relier tout les fichier, cela permet de modifier ajouter et de suprimer tout les elements.

note dev.txt :
Ce fichier et un recapitulatif des travaux réaliser durant le développement de tout les jours

README.md :
Permet de savoir qu'elle ficher permet de faire quoi

Style.css :
Permet de faire du CSS et c'est tout

workspace_bdd.sql :
C'est la base de donnée du CMS pour pouvoir enregister les article, page ...

