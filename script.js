// Cibler mes éléments du DOM
const tempsDeVol = document.getElementById('tempsDeVol');
const heuresDeNuit = document.getElementById('heuresDeNuit');
const heuresSup10heures = document.getElementById('heuresSup10heures');
const calculer = document.querySelector('.calculer');
const totalPv = document.querySelector('.totalPv');

const calculate = () => {

  if (tempsDeVol.value === '' || heuresDeNuit.value === '' || heuresSup10heures === '') {
    alert('Veuillez remplir tous les champs svp')
    return
  }

  let majoration;

  if ( (parseFloat(tempsDeVol.value) >= 10.01) && (parseFloat(tempsDeVol.value) <= 11) ) {
    majoration = 0.25;
  } else if ( (parseFloat(tempsDeVol.value) >= 11.01) && (parseFloat(tempsDeVol.value) <= 12) ) {
    majoration = 0.50;
  } else if ( (parseFloat(tempsDeVol.value) >= 12.01) && (parseFloat(tempsDeVol.value) <= 13) ) {
    majoration = 1;
  } else if ( (parseFloat(tempsDeVol.value) >= 13)) {
    majoration = 2;
  } else {
    majoration = 0;
  }

  let firstCase = (parseFloat(tempsDeVol.value) + 1) * 1.07;

  let secondCase = (parseFloat(heuresDeNuit.value) * 0.5) * 1.07;

  let thirdCase = 0.7 * ((parseFloat(heuresSup10heures.value) * 0.25) + (parseFloat(heuresSup10heures.value) * 0.5) + (parseFloat(heuresSup10heures.value) * majoration))

  let total = (firstCase + secondCase + thirdCase);
  totalPv.innerHTML = total;
  totalPv.innerHTML = total.toFixed(3);
  console.log(majoration)
}

// Ecouter le clic du bouton Calculer
calculer.addEventListener('click', calculate);
