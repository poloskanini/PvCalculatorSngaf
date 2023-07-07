// Cibler mes éléments du DOM
const tempsDeVol = document.getElementById('tempsDeVol');
const heuresDeNuit = document.getElementById('heuresDeNuit');
const heuresSup10heures = document.getElementById('heuresSup10heures');
const calculer = document.querySelector('.calculer');
const totalPv = document.querySelector('.totalPv');
const clear = document.getElementById('clear');
const resetButton = document.querySelector('.reset-button')

// Reseter le calculateur
resetButton.addEventListener("click", clearCalculator)

function clearCalculator() {
  location.reload();
}

// Fonction de calcul
const calculate = () => {

  if (tempsDeVol.value === '00:00' || heuresDeNuit.value === '00:00') {
    alert('Veuillez remplir tous les champs svp')
    return
  }

  let majoration = 0;

  if ( (parseFloat(tempsDeVol.value) >= 10) && (parseFloat(tempsDeVol.value) < 11) ) {
    majoration = 0.25;
  } else if ( (parseFloat(tempsDeVol.value) >= 11) && (parseFloat(tempsDeVol.value) < 12) ) {
    majoration = 0.50;
  } else if ( (parseFloat(tempsDeVol.value) >= 12) && (parseFloat(tempsDeVol.value) < 13) ) {
    majoration = 1;
  } else if ( (parseFloat(tempsDeVol.value) >= 13)) {
    majoration = 2;
  }
  console.log(majoration)

  let firstCase = (parseFloat(tempsDeVol.value) + 1) * 1.07;
  let secondCase = (parseFloat(heuresDeNuit.value) * 0.5) * 1.07;
  let thirdCase = 0.7 * ((parseFloat(heuresSup10heures.value) * 0.25) + (parseFloat(heuresSup10heures.value) * 0.5) + (parseFloat(heuresSup10heures.value) * majoration))

  let total = (firstCase + secondCase + thirdCase);
  totalPv.innerHTML = total.toFixed(3);
  
}

// Ecouter le clic du bouton Calculer
calculer.addEventListener('click', calculate);