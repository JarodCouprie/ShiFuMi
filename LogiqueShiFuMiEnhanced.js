//Réalisé par Couprie Jarod et Lacombe Pieryves

/*-----------------------------------Shi Fu Mi-------------------------------------------------------------*/

//Déclaration des variables 
//Le document.querySelector("#") permet de sélectionner un élementauquel on a donner un id # et ainsi de pouvoir interagir avec lui en js

//Pierre Papier Ciseaux Lézard et Spock sont les diffférents éléments qui permettent de jouer au jeu

var pierre = document.querySelector("#pierre");//Bouton Pierre
var ciseaux = document.querySelector("#ciseaux");//Bouton Ciseaux
var papier = document.querySelector("#papier");//Bouton Papier
var lezard = document.querySelector("#lézard");//Bouton Lézard
var spock = document.querySelector("#spock");//Bouton Spock
var reset = document.querySelector("#reset");//Bouton Reset

var scoreJoueur = document.querySelector("#scoreJoueur");//Zonne d'affichage du score du joueur
var scoreOrdinateur = document.querySelector("#scoreOrdinateur");//Zone d'affichage du score de l'ordinateur
var resultat = document.querySelector("#resultat");//Zone d'affichage du résultat pour nous dire qui a gagné de l'ordinateur ou du joueur
var choixElementJoueur = document.querySelector("#choixElementJoueur");//Zone d'affichage où l'on voit ce que le joueur a sélectionné comme élément
var choixElementOrdinateur = document.querySelector("#choixElementOrdinateur");//Zone d'affichage où l'on voit ce que l'ordinateur a choisi aléatoirement
var nomJoueur = document.querySelector("#nomJoueur");//Zone d'affichage où il y a le nom du joueur pour pouvoir le modifier sur la page et mettre celui souhaité

//Déclaration de variables pour nous aider dans la suite du programme et qui serviront dans les différentes fontions

var pseudoJoueur = "Le joueur";//Choix du pseudo du joueur
var joueur = "";//Choix du joueur entre les éléments
var ordinateur = "";//Choix du joueur entre les éléments
var score = 0;//Score du joueur
var scoreOrdi = 0;//Score de l'ordinateur
var choixJeuEnhanced = ["pierre","papier","ciseaux","lézard","spock"];//Tableau permettant aux fonctions de voir ce qui a été choisi l'ordinateur à partir d'un nombre aléatoire donnant l'index du tableau

//Création de toutes les fonctiones permettant le jeu

/*Fonction qui permet l'affichage du choix qu'a fait le joueur parmi les différents éléments
Dès que le joueur a choisi son élément l'image correspondante est insérée dans la balise choixElementJoueur pour l'afficher sur notre page WEB
*/

function affichageChoixJoueur(j){
    if (j == "pierre"){
        choixElementJoueur.src = "imgg2/Pierre2.jpg";
    }else if (j == "ciseaux"){
        choixElementJoueur.src = "imgg2/Ciseaux2.jpg";
    }else if (j == "papier"){
        choixElementJoueur.src = "imgg2/Papier2.jpg";
    }else if (j == "lézard"){
        choixElementJoueur.src = "imgg2/Lézard2.jpg";
    }else if (j == "spock"){
        choixElementJoueur.src = "imgg2/Spock2.jpg";
    }else{
        choixElementJoueur.src = "imgg2/Rien.png";
    }
}

/*Fonction qui permet l'affichage de l'élément décidé aléatoirement par l'ordinateur parmi les différents éléments
Dès que l'élément a été décidé, l'image correspondante est insérée dans la balise choixElementOrdinateur pour l'afficher sur notre page WEB
*/

function affichageChoixOrdinateur(o){
    if (o == "pierre"){
        choixElementOrdinateur.src = "imgg2/Pierre2.jpg";
    }else if (o == "ciseaux"){
        choixElementOrdinateur.src = "imgg2/Ciseaux2.jpg";
    }else if (o == "papier"){
        choixElementOrdinateur.src = "imgg2/Papier2.jpg";
    }else if (o == "lézard"){
        choixElementOrdinateur.src = "imgg2/Lézard2.jpg";
    }else if (o == "spock"){
        choixElementOrdinateur.src = "imgg2/Spock2.jpg";
    }else{
        choixElementOrdinateur.src = "imgg2/Rien.png";
    }
}

/*Fonction qui permet au joueur de modifier son nom en cliquant directement sur le nom du joueur et mettre celui qui convient
Dès qu'il y a un clic réaliser sur le nomJoueur qui apparaît sur notre page WEB la fonction se lance et le nom du joueur peut être modifié
Il y a une boucle If pour garantir qu'un nom soit enter même lorsque le joueur se trompe et rentre une chaîne de caractère vide
*/

nomJoueur.addEventListener("click" , function(){
    pseudoJoueur = prompt("Veuillez renseigner votre nom");
    if(pseudoJoueur == ""){
        pseudoJoueur = prompt("Veuillez renseigner votre nom");
    }else{
        return nomJoueur.innerHTML=pseudoJoueur;
    }
    
})

//Création de la fonction pour déterminer aléatoirement le choix de l'élément par l'ordinateur

function choixRandomEnhanced(){
    return Math.floor(Math.random()*5);//On multiplie la valeur par 5 car il y a 5 valeurs dans notre tableau [choixJeuEnhanced] et que l'on veut récupérer leur index [i]
}

//Création des évênements pour repérer lorsque le joueur clique sur un des éléments (Pierre, Papier ou Ciseaux)
//Les boutons créés vont suivre les mêmes règles et le clique sur chacun d'eux aura les mêmes conséquences

//La fonction écoute s'il y a un clique sur le bouton pour l'élément PIERRE défini dans nos variables qui se trouve être un bouton dans notre code HTML pour la page WEB

pierre.addEventListener("click" , function(){
    joueur = "pierre";//Dès que le joueur clique la variable joueur prend comme valeur la chaîne de caractère pour pouvoir être comparée par la suite
    ordinateur = choixJeuEnhanced[choixRandomEnhanced()];/*La variable ordinateur prend une variable définie par un nombre aléatoire donné par la fonction précente 
    utilisé en index du tableau des choix possibles*/
    confrontation(joueur,ordinateur);//Utilisation d'une fonction qui fera la confrontation entre les deux choix pour savoir qui a gagné entre le joueur ou l'ordinateur
    affichageChoixJoueur(joueur);//Affichage du choix qui a été fait par le joueur
    affichageChoixOrdinateur(ordinateur);//Affichage de l'élément décidé pour l'ordinateur
})

//Fonction identique à la précédente mais réalisée pour le bouton PAPIER

papier.addEventListener("click" , function(){
    joueur = "papier";
    ordinateur = choixJeuEnhanced[choixRandomEnhanced()];
    confrontation(joueur,ordinateur);
    affichageChoixJoueur(joueur);
    affichageChoixOrdinateur(ordinateur);
})

//Fonction identique à la précédente mais réalisée pour le bouton CISEAUX

ciseaux.addEventListener("click" , function(){
    joueur = "ciseaux"
    ordinateur = choixJeuEnhanced[choixRandomEnhanced()];
    confrontation(joueur,ordinateur);
    affichageChoixJoueur(joueur);
    affichageChoixOrdinateur(ordinateur);
})

//Fonction identique à la précédente mais réalisée pour le bouton LÉZARD

lezard.addEventListener("click" , function(){
    joueur = "lézard";
    ordinateur = choixJeuEnhanced[choixRandomEnhanced()];
    confrontation(joueur,ordinateur);
    affichageChoixJoueur(joueur);
    affichageChoixOrdinateur(ordinateur);
})

//Fonction identique à la précédente mais réalisée pour le bouton SPOCK

spock.addEventListener("click" , function(){
    joueur = "spock";
    ordinateur = choixJeuEnhanced[choixRandomEnhanced()];
    confrontation(joueur,ordinateur);
    affichageChoixJoueur(joueur);
    affichageChoixOrdinateur(ordinateur);
})

//Fonction qui écoute s'il y a un clique sur le bouton reset qui nous permet de remettre les scores à zéro et d'effacer le choix fait par l'ordinateur et le joueur

reset.addEventListener("click" , function(){//Au clique du bouton tous les éléments sont réinitialisés
    joueur="";
    ordinateur="";
    score = 0;
    scoreOrdi = 0;
    resultat.innerHTML = "";//Aucun résultat ne doit s'afficher donc on met une chaîne de caractères vide
    scoreJoueur.innerHTML = "";//Aucun score ne doit être affiché donc on met une chaîne de caractères vide
    scoreOrdinateur.innerHTML = "";//Aucun score ne doit être affiché donc on met une chaîne de caractères vide
    affichageChoixJoueur(joueur);//Appel des fonctions pour permettre de réinitialiser l'affichage du choix du joueur
    affichageChoixOrdinateur(ordinateur);//Appel des fonctions pour permettre de réinitialiser l'affichage de la décision pour l'ordinateur
    console.log("Le bouton fonctionne mais n'affiche rien");
    
})

//Fonction qui permet de comparer les valeurs entre le joueur et l'ordinateur pour savoir lequel des deux remporte la manche

function confrontation(joueurChoix, ordinateurChoix){//On prendra comme entrée le choix du joueur et la décision pour l'ordinateur
    if (joueurChoix == ordinateurChoix){//Gestion de l'égalité
        resultat.innerHTML = "Égalité";//Le résultat inséré dans le code HTML est celui de l'égalité
        scoreJoueur.innerHTML = score;//Le score du joueur ne change pas
        scoreOrdinateur.innerHTML = scoreOrdi;//Le score de l'ordinateur ne change pas
    }else if (joueurChoix == "pierre" && ordinateurChoix == "ciseaux"||
        joueurChoix == "pierre" && ordinateurChoix == "lézard" ||
        joueurChoix == "papier" && ordinateurChoix == "pierre" ||
        joueurChoix == "papier" && ordinateurChoix == "spock" ||
        joueurChoix == "ciseaux" && ordinateurChoix == "papier" ||
        joueurChoix == "ciseaux" && ordinateurChoix == "lézard" ||
        joueurChoix == "lézard" && ordinateurChoix == "spock" ||
        joueurChoix == "lézard" && ordinateurChoix == "papier" ||
        joueurChoix == "spock" && ordinateurChoix == "pierre" ||
        joueurChoix == "spock" && ordinateurChoix == "ciseaux"){//Gestion de la victoire du joueur
        resultat.innerHTML = pseudoJoueur + " gagne";//Le résultat inséré dans le code HTML est celui du joueur qui gagne la manche avec son pseudo quel qu'il soit
        score+=1;//Le score du joueur est incrémenté de 1 à chaque fois qu'il gagne
        scoreJoueur.innerHTML = score;//Affichage du score du joueur qui est inséré dans le code HTML pour la page WEB
    }else{//Gestion des autres évênements possible qui ne peuvent être que la victoire de l'ordinateur
        resultat.innerHTML = "L'ordinateur gagne";//Le résultat inséré dans le code HTML est celui de l'ordinateur qui gagne la manche
        scoreOrdi+=1;//Le score de l'ordinateur est incrémenté de 1 à chaque fois qu'il gagne
        scoreOrdinateur.innerHTML = scoreOrdi;//Affichage du score de l'ordinateur qui est inséré dans le HTML pour la pge WEB
    }
}