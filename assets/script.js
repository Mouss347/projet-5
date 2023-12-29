const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]   //declaration du tableau avec toutes les images et leur textes




//*********************Récuperation des classes
let arrow_left = document.querySelector(".arrow_left"); 
let arrow_right = document.querySelector(".arrow_right");
let bannerImg = document.querySelector (".banner-img"); 
let dots = document.querySelectorAll(".dot");
let changement = 0; // variable qui servira pour les changements


//***************************************Les fonctions***************************************//



//Fonction pour changer l'etat du point dots, si il est pareil que changement, qui lui coorespond, il se met en couleur si non pas de couleur.: on passe en revue (dot, i)
function updateDots() {
    dots.forEach((dot, i) => {  //parcourir dot et i 
        if (i === changement) {    
            dot.classList.add('dot_selected');  //on lui donne une nouvelle caractéristique ; on ajoute le btn selectionner
        } else {
            dot.classList.remove('dot_selected');  //on lui donne une nouvelle caractéristique ; on supprime le btn selectionner
        }
    });
}



function Carrousel() {     
    if (changement < 0) {   //si changement est plus petit que 0
        changement = slides.length - 1;   //alors changement deviendra le nombre du tableau -1
    } else if (changement >= slides.length) {   //sinon si changement est egale ou plus grand que lenght
        changement = 0;                             //alors revenir sur la premiere donc 0
    }


bannerImg.src = `assets/images/slideshow/${slides[changement].image}`; //changement de la src de l'image et l'afficher
document.querySelector('#banner p').innerHTML = slides[changement].tagLine; // recuperation du texte de position actuel 
updateDots(); //mise a jour des points
}



//*********************les ecoutes de clique*****************************//
arrow_left.addEventListener('click', function () {   //quand on clique sur arrow left alors changement -
    changement--;
    Carrousel();
});

arrow_right.addEventListener('click', function () {  //quand on clique sur arrow right alors changement +
    changement++;
    Carrousel();
});







