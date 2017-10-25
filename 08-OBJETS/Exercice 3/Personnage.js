// crée un objet "mainCharacter" qui possède le propriétés suivantes :
// name (string)
// level (int)
// life (int)
var mainCharacter = {
    "name" : "Link",
    "level" : 30,
    "life" : 10,
}

// weapon (object)
// l'objet "weapon" possède les propriétés suivantes :
// name (string)
// damage (int)
var weapon = {
    "name" : "arbalette",
    "damage" : 40,
}

// attack (function)
// Appeler la fonction "attack" du personnage
// la fonction doit retourner : (le nom du personnage) attaque avec 
// l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)
function attack() {
    let force = mainCharacter.name + " attaque avec l'arme " + weapon.name + " les dégats sont de ";
    let forceLink = mainCharacter.level * weapon.damage; 
    console.log(force + forceLink + " points.");
}
attack();