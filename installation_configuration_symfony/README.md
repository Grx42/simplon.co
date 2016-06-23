**_Installer Symfony sur linux :_**

sudo curl -LsS https://symfony.com/installer -o /usr/local/bin/symfony
sudo chmod a+x /usr/local/bin/symfony

---

**_Créer un nouveau repertoire dans le /var/www/html :_**

symfony new nom_du_projet

aller dans le fichier app/config/parameters.yml

_modifier la ligne de nom du projet pour qu'il soit identique a celui que l'on fait_

_et modifier les ligne de pseudo et de mot de passe avec ceux de phpmyadmin_

_rester dans le dossier du projet et ainsi continuer le tuto_

---

**_Generer un Bundle :_**

php bin/console doctrine:database:create

php bin/console generate:bundle

entrer

mettre un nom de bundle

entrer

entrer

entrer

---

**_Generer une entité :_**

php bin/console generate:doctrine:entity

Nom_du_Bundle:Coach

entrer

nom du champ
type de champ
entrer
entrer

entrer (si plus de champ a ajouter)

---

**_Generer un Create Remove Update Delete :_**

php bin/console doctrine:generate:crud

''Reprendre le nom du Bundle'':Coach

yes

entrer

entrer

entrer

---

**_Mettre à jour la base de donnée :_**

php bin/console doctrine:schema:update --force

---

Voir le formulaire sur **_nom_du_repertoire/web/app_dev.php/coach/new_**


#Tweaks symfony :

###Modifier le css pour afficher la totalité des erreurs
ouvrir :
`votre_projet/vendor/symfony/symfony/src/Symfony/Bundle/Resources/public/css/structure.css`

Dans `#content` supprimer la ligne `width: 970px;`



###En cas d'erreur d'affichage dans `_profiler/routing`
ouvrir :
`votre_projet/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundleController/RouterController.php`

Sous `namespace Symfony\Bundle\WebProfilerBundle\Controller;`
ajouter la ligne :
`use Symfony\Component\HttpFoundation\Request;`
ou
`use Symfony\Component\BrowserKit\Request;`
