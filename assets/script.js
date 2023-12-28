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
let arrow_left = document.querySelector(".arrow_left"); // recuperation du boutton Gauche
let arrow_right = document.querySelector(".arrow_right"); // recuperation du boutton Droit
let bannerImg = document.querySelector (".banner-img"); // recuperation de la premiere image et ou sera notre carrousel  
let dots = document.querySelectorAll(".dot"); // recuperation de tout les points
let changement = 0; // variable qui servira pour les changements


//Fonction pour changer l'etat du point dots, si il est pareil que changement, qui lui coorespond, il se met en couleur si non pas de couleur.: on passe en revue (dot, i)
function updateDots() {
    dots.forEach((dot, i) => {
        if (i === changement) {    
            dot.classList.add('dot_selected'); 
        } else {
            dot.classList.remove('dot_selected'); 
        }
    });
}



//***********************Les fonctions

function Carrousel() {     
    if (changement < 0) {   //si changement est plus petit que 0
        changement = slides.length - 1;   //alors revenir au dernier donc 3
    } else if (changement >= slides.length) {   //sinon si changement est egale ou plus grand que lenght
        changement = 0;                             //alors revenir sur la premiere donc 0
    }



const currentSlide = slides[changement]; //variable qui dit que changement est le numero a regarder dans le slider selon la fonction carousel 

const imagePath = `assets/images/slideshow/${currentSlide.image}`;
// Met à jour l'image de la bannière avec la nouvelle image et un texte alternatif




bannerImg.src = imagePath; //prend l'image html qui s'apelle bannerImg et met a jour son src avec la nouvelle valeur qu'a pris la variable du dessus 

const tagLine = currentSlide.tagLine; //variable tagline qui recupere le tagline de chaque slide a son changement
document.querySelector('#banner p').innerHTML = tagLine;  //on change le tagline de bannerp par celui de current slideù

updateDots(); //on met a jour les points
}


//*********************les ecoutes de clique
arrow_left.addEventListener('click', function () {   //quand on clique sur arrow left alors changement -
    changement--;
    Carrousel();
});

arrow_right.addEventListener('click', function () {  //quand on clique sur arrow right alors changement +
    changement++;
    Carrousel();
});







