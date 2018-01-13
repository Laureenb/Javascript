![Becode exo](https://github.com/becodeorg/Lovelace-promo-2/tree/master/Parcours/JavaScript)

# Exercices : Variables  	01-VARIABLES
### Exercice  : Diseur de bonne aventure
Déclarez les variables suivantes: 
- nombre d'enfants
- nom d'une femme
- un pays
- métier
Afficher dans la console : 
`Vous serez X et habiterez à Y, et marié a Z avec N enfants.`

### Exercice : Calculer l'age
Déclarez les variables suivantes : 
* L'année courante
* L'année de naissance d'une personne
Afficher dans la consol l'âge de cette personne

### Exercice : Bientôt vieux
Déclarez les variables suivantes : 
* Votre âge 
* Un âge maximum, esperons tous vivre 100ans 
* Une denrée alimentaire 
* Votre consomation de cette denrée par jour
Calculer le nombre de fois que vous en mangerez pour le restant de votre vie.
Mettez le resultat dans la console comme ceci : 
`Il vous reste N de X avant d'ateindre l'age de Y ans"`

### Exercice : Priorités 
Décomposer la résolution du calcul suivant : 
`var result = (1 + 2) * 3 + 4 / 2;`
- étape 1 : (1 + 2) * 3 + 4 / 2;
- étape 2 : (1 + 2) * 3 + 4 / 2;
- étape 3 : (1 + 2) * 3 + 4 / 2;
- étape 4 : (1 + 2) * 3 + 4 / 2;


# Exercices : Logique 02-LOGIQUE
### Exercice : Langues
* Crée une variable pour specifier une langue ex ("fr","es","en")
* Crée une autre variable qui servira à stocker un message
* Crée une condition pour savoir quelle sera la valeur du message si elle est "fr","es","en".
afficher "Bonjour tout le monde", "Hello world" et "Hola, Mundo" selon la bonne langue

### Exercice : Affichage des scores
* Crée une variable qui contient un score 
* Crée une variable qui contiendra le resultat
* Faire des conditions pour pour etablir les rang selon le score
- Vous avez le rang `A` si vous avez un score égal ou supérieur a `90`
- Vous avez le rang `B` si vous avez un score inférieur a `90`
- Vous avez le rang `C` si vous avez un score inférieur ou égal a `50`

### Exercice : Mettre au pluriel
* Crée une variable contenant un mot au singulier
* crée une variable qui contient le nombre dont tu en dispose
* crée une variable qui contiendra le résultat
* Faire une condition pour savoir si il faut rajouter un "s" ou pas
Le résultat doit être par exemple : 
`"Je possède 4 pommes"`


# Exercices : Fonctions  	03-FONCTIONS
### Exercice : Calculs
Déclarez les variables suivantes : 
* Fonction qui fait des soustractions
* Fonction qui fait des division
* Fonction qui fait des multiplications
* Fonction qui fait des calcule de pourcentages ( 2 arguments: valeur et pourcentage )
par exemple : "50% de 10 = 5";
* Faire un fonction qui fait des calcules de vitesse (2 arguments : distance, temps en heure)
- Le résultat doit être par exemple : '50km/h'


# Exercices : Boucles  	04-BOUCLES
### Exercice : Pair et impair
* Ecrivez une boucle qui va itérer de 0 à 20.
* Pour chaque itération , il va vérifier si le nombre actuel est pair ou impair
- afficher dans la console par exemple : " 2 est pair "

### Exercice : Multiplication Tables
* Écrire une boucle qui va itérer de 0 à 10
* Pour chaque itération de la boucle, il va multiplier le nombre de 9
- afficher dans la console le résultat par exemple : " 2 * 9 = 18".

### Exercice : assigner des grades
* Écrire une boucle qui va itérer de 0 à 100
* Écrire une fonction qui va retourner des grades selon les scores reçu
	- si le score au dessus de 90 le grade est A
	- si le score au dessus de 80 le grade est B
	- si le score au dessus de 70 le grade est C
	- si le score au dessus de 65 le grade est D
	- si le score n'entre pas dans ces catégories le grade est F
- afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".

### Exercice : pyramide
- Écrire une boucle qui va dessiner dans la console (ligne par ligne) le résulat suivant
```
	*  
	* *  
	* * *  
	* * * *  
	* * * * *
```


# Exercices : Tableaux 05-TABLEAUX
### Exercice : addition
* crée un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9 
* faire une boucle qui permet d'additioner toutes ces valeurs
### Exercice : Vos meilleurs choix
* crée un tableau qui contetient 3 nom d'acteurs
- Pour chaque acteur, afficher dans la console par exemple : "Le numero 1 est Stalone"
Bonus:transformer en : "Le premier est Stalone", Le deuxième est Cruiz", etc...

### Exercice : clone
* crée un tableau qui contetient les valeurs suivantes : "Mario", "Luigi", "Peach"
* dupliquer le tableau et y ajouter "Bowser"


# Exercice : jeu du pendu 06-JEUX_PENDU
Info : le nombre d'essais est illimité
* Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R', 
* Créer un autre tableau pour mettre les lettres devinées : '_','_','_','_','_','_','_'
* Écrivez une fonction appelée "guessLetter" cette fonction va 
    - Itérer à travers les lettres
    - Voir si la lettre deviné se trouve dans le mot 
    - Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
    - Afficher dans la console les lettre devinés
    - Le jeu doit savoir quand la partie est finie et féliciter le joueur
* Bonus: Se rapprocher du vrais pendu :
    - Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois. 
    - Si une lettre est entrée deux fois, ne rien faire.
    - compter le nombre de tentatives ratés
    
    
# Exercice : Minimum et maximum 07-MATHS
Déclarez les variables suivantes : 
- La valeur est égal au chiffre le plus petit dans l'enssemble suivant :  7, 5, -12, 6, 32, 18, 14, -2
- La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
- La valeur est égal a l'addition des deux précédentes variables

## Exercice : Aléatoire 1
- Faire une variable `floatBateau` dont la valeur est 10.4
- Faire une variable `couleBateau` dont la valeur est `floatBateau` arrondie vers le **bas**
- Faire une variable `voleBateau` dont la valeur est `floatBateau` arrondie vers le **haut**

## Exercice : Aléatoire 2 
Déclarez les variables suivantes : 
- La valeur aléatoire entre **50** et **100**
- La valeur aléatoire peut être seulement **0** ou **1**
- La valeur aléatoire peut aller de **0** à **10** __*inclu*__

### Exercice : aléatoire 3
* crée un tableau qui contetient les valeurs suivantes : Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpion, Shang Tsun, Sonya, Sub-Zero
* choisir un personnage aléatoirement dans le tableau


# Exercice : PNJ (Personnage non-joueur) 08-OBJETS
* Crée un objet "Character" qui contient les informations suivantes : 
- name (string) 
- age (numero) 
- items_to_give (tableau)
- afficher chaque information sur une ligne séparés dans la console __(for in)__
- faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement

# Exercice : Shop
Crée un tableau avec des *objets* à vendre (épée, hache, sceptre, etc.)
Caractéristique de chaque objet :
- title (string) 
- physic (int)
- magic (int)
- minLevel (int)
- available (boolean)
Manipulation :
- faire une fonction pour afficher tout les objets
- faire une fonction pour afficher les objets disponibles
- faire une fonction pour afficher les objets dont le niveau minimum est de 10

# Exercice : Personnage
* crée un objet "mainCharacter" qui possède le propriétés suivantes : 
- name (string) 
- level (int) 
- life (int) 
- weapon (object) 
- attack (function) 
* l'objet "weapon" possède les propriétés suivantes :
- name (string) 
- damage (int) 
* Appeler la fonction "attack" du personnage
	- la fonction doit retourner :
		(le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)


## Exercice : Juste prix 09-JEUX_JUSTEPRIX
Déclarez les variables suivantes : 
* Variable qui sera utilisée pour afficher un message
* Variable qui va compter le nombre d'essais
* Variable de la valeur **minimum** qu'on peut entrer (ici 20)
* Variable de la valeur **maximale** qu'on peut entrer (ici 80)
Déclarez les fonctions suivantes : 
* crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
* crée une fonction 
	- qui prends un argument pour tester si le numéro qu'on a entré est le bon 
	- la fonction retourne un de ces 3 messages : `C'est plus`, `C'est moins`,`C'est juste tu as trouvé en X coups`
Utiliser la console **ou** les fonctions natives suivantes :
- window.prompt();
- window.alert();
- window.confirm();


## DOM 10-DOM
- ![Télécharger fichier] (https://github.com/becodeorg/Lovelace-promo-2/blob/master/Parcours/JavaScript/10-DOM/files.zip)

# #EXERCICE 1 : Manipulation de classes
- sélectionner le body 
- lui retirer la classe "bg-aqua"
- lui ajouter la classe "bg-olive"
- sélectioner first-paragraph
- lui retirer les classes "bg-lime" et "gray"
- lui ajouter la class "aqua"
- sélectionner tous les éléments qui ont la classe 'bg-silver'
- modifier tout ces éléments en leurs ajoutant la classe "bg-teal"
- modifier tout ces éléments en leurs supprimant la classe "bg-silver"
- sélectionne tous les éléments de type 'blockquote'
- modifier tout ces éléments en leurs ajoutant la classe "bg-white"

## EXERCICE 2  : Selecteurs CSS
- avec `querySelector` sélectioner l'élément 'my-table'
- lui ajouter la classe "bg-purple"
- avec `querySelectorAll` sélectioner tous les paragraphes dans 'container'
- modifier tout ces éléments en leurs ajoutant la classe 'shadow'

## EXERCICE 3
- sélectionne tous les éléments de type 'pre'
- avec la propriété `style` change la couleur de texte
- avec la propriété `style` change la couleur de fond grâce à `backgroundColor`
- avec la propriété `style` ajouter un `border-top` de `3px solid red` (n'oublie pas que tu peux acceder au propriété d'un objet grâce comme ceci : ["prop-name"] )
- avec la propriété `style` ajouter un `border-bottom` de `3px solid red`
- sélectionne le premier élément de type 'h3'
- ramplacer son contenu HTML en `<em>Itelic title ! yeah !</em>`
- sélectionne le premier élément de type 'h2'
- ramplacer son contenu texte par en `<strong>HTML doens't work !</strong>`

## EXERCICE 4 : Création d'éléments
- sélectioner le premier 'ul'
- crée un élément de type 'li'
- ajouter ce texte `Mon meilleur ami est <a href='http://www.google.com'>Google</a>` dans le 'li'
- ajouter ce 'li' l'élément dans le ul
- sélectionner le premier lien dans le 'li' précedement crée
- avec la propriété `style` change la couleur de texte de ce lien

## EXERCICE 5 : Création et suppression de plusieurs éléments

- sélectionner le premier élément 'ol'
- faire une boucle sur tous les enfants de ce dernier grâce à sa propriété `children`
- supprimer chaque enfant de 'ol' grâce à `removeChild()`
- déclare dans un tableau les valuers suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]
- faire une boucle sur tous les enfants du tableau précédement crée
- pour chaque valeur du tableau crée un élément 'li' crâce à `document.createElement()` 
- ajouter à chaque 'li' la valeur courrante tableau
- ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné

### Reminder

Selecteurs
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelector()
- document.querySelectorAll()
Création d'éléments
- document.createElement()
- element.appendChild()
Manipulation de classes CSS
- element.className
- element.classList.remove()
- element.classList.add()
- element.classList.toggle()
Manipulation CSS
- element.style _( ex : `element.style.backgroundColor = "blue"`)_
Autres
- element.id
- element.innerHTML
- element.innerText



# /!\ Utilisez Firefox pour cet exercice ! 11-AJAX
# avec les fonctions des tableaux
1. charger le fichier "data.json" `tip : xmlHttpRequest`
2. ajouter un score aléatoire (0 -> 1000) à toutes ces personnes `tip: arr.map()`
3. classer l'odre du tableau selon les scores `tip : arr.sort()`
4. mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) `tip : forEach()` les catgories sont des tableaux
5. compter combien de personne viennent du "Bahrain" `tip : filter()`
6. afficher le plus grand score dans la console `tip : sort()`
7. afficher le plus petit score `tip : sort()`
Ressources : 
- [generate data](http://www.generatedata.com/)
- [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [you might not need jquery](http://youmightnotneedjquery.com/)
- [Array methods](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array)


# Mouse  	12-MOUSE-EVENT
## Évènements de la souris
click, ctextmenu, dblclick, mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseout, mouseup

### Exercices 1
- Crée (en HTML) 3 `DIV` possedant la même classe 'hoverMe'
- Faire disparaitre les divs lorsque l'on passe la souris dessus
> Tip : utiliser le `mouseenter ` ou `mouseover `

### Exercices 2
- Crée (en HTML) une `DIV` avec une l'id "reset"
- Faire de sorte que quand on clique dessus elle fasse réaparaitre les 3 divs premièrement créé
> Tip : avec une animation ce serait super cool
 
### Exercices 3
- Crée (en HTML) 2 `DIV` avec une id chacune 'axe-x' et 'axe-y'
- Faire de sorte que lorsque l'on bouge la souris dans la *fenêtre*, la position sois affiché dans les divs associés
> Tip : Utiliser l'evenement reçu en argument
> Tip : Utiliser `innerHTML` ou `innerText`


# KEYBOARD 13-KEYBOARD-EVENT
### Exercices 1 
- Crée (en HTML) une `DIV` avec l'id "character" 
- Faire changer de couleur de fond a cette `DIV`à chaque fois qu'on appuie sur une numéro de 0 à 9 sur le clavier
> Tip : utiliser le `switch`

### Exercices 2
- Crée (en HTML) 4 `divs` avec les id suivantes : "up, down, left, right"
- crée une class 'highlight' dans le CSS qui réduit l'opacité de l'élément
- Pour chaque div ajouter la classe 'highlight' quand une des touches directionel est enfoncée
- Pour chaque div retier la classe 'highlight' quand on relâche la touche
> Tip : Faire la structure HTML sans JavaScript
 
