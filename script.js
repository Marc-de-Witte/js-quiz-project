const vragen = [
  {
    vraag: "Welke planeet staat het dichtst bij de zon?",
    opties: ["Mercurius", "Venus", "Mars", "Aarde"],
    correctIndex: 0
  },
  {
    vraag: "Hoeveel graden is een rechte hoek?",
    opties: ["120 graden", "90 graden", "180 graden", "45 graden"],
    correctIndex: 1
  },
  {
    vraag: "Welke oceaan is de grootste ter wereld?",
    opties: ["Indische Oceaan", "Arctische Oceaan", "Stille Oceaan", "Atlantische Oceaan"],
    correctIndex: 2
  },
  {
    vraag: "Welke kleur krijg je als je blauw en geel mengt?",
    opties: ["Oranje", "Groen", "Paars", "Bruin"],
    correctIndex: 1
  },
  {
    vraag: "Hoeveel poten heeft een spin?",
    opties: ["12", "8", "6", "10"],
    correctIndex: 1
  },
  {
    vraag: "Welke stad is de hoofdstad van Frankrijk?",
    opties: ["Parijs", "Nice", "Marseille", "Lyon"],
    correctIndex: 0
  },
  {
    vraag: "Wat is het grootste interne orgaan in het menselijk lichaam?",
    opties: ["Nieren", "Lever", "Hart", "Longen"],
    correctIndex: 1
  },
  {
    vraag: "Welke vorm heeft precies drie zijden?",
    opties: ["Rechthoek", "Vierkant", "Driehoek", "Vijfhoek"],
    correctIndex: 2
  },
  {
    vraag: "Welke dierensoort kan vliegen?",
    opties: ["Pinguïn", "Kip", "Struisvogel", "Adelaar"],
    correctIndex: 3
  },
  {
    vraag: "Hoeveel minuten zitten er in een uur?",
    opties: ["45", "30", "90", "60"],
    correctIndex: 3
  }
];

let huidigeScore = 0;
let huidigeVraagIndex = 0;

function showQuestion(vraagObject) {
  const huidige_vraag = document.getElementById("vragen");
  const antwoorden = document.getElementById("weergeven");
  const feedback = document.getElementById("feedback");

  huidige_vraag.textContent = vraagObject.vraag;
  antwoorden.innerHTML = "";
  feedback.textContent = "";

  vraagObject.opties.forEach((optie, index) => {
    const knop = document.createElement("button");
    knop.textContent = optie;
    knop.classList.add("antwoord-knop");

    knop.addEventListener("click", () => {
      controleerAntwoorden(index, vraagObject.correctIndex);
    });

    antwoorden.appendChild(knop);
  });
}

function controleerAntwoorden(gekozenIndex, correctIndex) {
  const feedback = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");

  if (gekozenIndex === correctIndex) {
    feedback.textContent = "Goed gedaan!";
    feedback.style.color = "green";

    huidigeScore++;
    scoreElement.textContent = "Score: " + huidigeScore;
  } else {
    feedback.textContent = "Helaas, fout";
    feedback.style.color = "red";
  }

  setTimeout(() => {
    huidigeVraagIndex++;

    if (huidigeVraagIndex < vragen.length) {
      showQuestion(vragen[huidigeVraagIndex]);
    } else {
      toonEindscherm();
    }
  }, 1000);
}

function toonEindscherm() {
  const huidige_vraag = document.getElementById("vragen");
  const antwoorden = document.getElementById("weergeven");
  const feedback = document.getElementById("feedback");

  huidige_vraag.textContent = "Quiz voltooid!";
  antwoorden.innerHTML = "";
  feedback.textContent = "Je eindscore is: " + huidigeScore;
}

showQuestion(vragen[0]);
