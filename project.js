var video1 = document.getElementById("vidbackground1");
var video2 = document.getElementById("vidbackground2");

var videonum=2

var videoautoplay=true

var allhtml = document.getElementById("section1");


allhtml.onmousemove = function(evt){
    let x = evt.clientX;
    let y = evt.clientY;  
    
    x=x-683
    y=(y-328)*-1    
    

    
    x=(x/98)*-1-7
    y=(y/47)-7

    video1.style.top=y+"%"
    video1.style.left=x+"%"

    video2.style.top=y+"%"
    video2.style.left=x+"%"
} 


allhtml.addEventListener('mouseenter',temptransition);

let temptransitionId;


function temptransition(){
    clearTimeout(temptransitionId);

    video1.style.transition="top,left 450ms 0ms";
    video2.style.transition="top,left 450ms 0ms";

    temptransitionId = setTimeout(function() {
        video1.style.removeProperty("transition");
        video2.style.removeProperty("transition");
        
    }, 500);
}



// Ajout de la logique de boucle infinie
video1.addEventListener('ended', switchToVideo2);
video2.addEventListener('ended', switchToVideo1);

function switchToVideo2() {
    video1.style.opacity = '0'; // Masquer video1
    video2.style.opacity = '100'; // Afficher video2
    video2.play(); // Lancer la lecture de video2
    video1.currentTime = 0; // Réinitialiser video2 au début

}

function switchToVideo1() {
    video2.style.opacity = '0'; // Masquer video2
    video1.style.opacity = '100'; // Afficher video1
    video1.play(); // Lancer la lecture de video1
    video2.currentTime = 0; // Réinitialiser video2 au début

}

// Démarrage initial
if (videoautoplay) {
    video1.play(); // Démarrer avec la première vidéo
}
// ----------------------------------------------------


// window.addEventListener('scroll', function(e) {
//     window.scrollTo(0, 0); // Empêcher tout scroll par défaut
// });

window.addEventListener('keydown', function(e) {
    // Désactive les flèches directionnelles et la touche espace
    const keysToDisable = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];  
    if (keysToDisable.includes(e.key)) {
      e.preventDefault();
    }
  });


  function scrollToSection2() {
    const section2 = document.getElementById('section2');
    section2.scrollIntoView({ behavior: 'smooth' }); // Scroll lisse vers la section2
  }

// Activer le scroll vers section2 quand l'utilisateur clique sur "Découvrir"
document.getElementById('decouvrir').addEventListener('click', function() {
    scrollToSection2();
  });
  
//   // Activer le scroll vers section2 quand l'utilisateur tente de scroller dans section1
//   document.getElementById('section1').addEventListener('wheel', function(e) {
//     e.preventDefault(); // Empêcher le scroll standard
//     scrollToSection2(); // Scroll automatique vers la section 2
//   });