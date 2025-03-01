// Smooth Scroll per la navigazione
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Animazione su scroll per le card
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  document.querySelectorAll(".service-card").forEach((card) => {
    const cardPos = card.getBoundingClientRect().top;
    if (cardPos < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "rotate(0deg) translateY(0)";
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
    }
  });
});

// Inizializzazione opacità card
document.querySelectorAll(".service-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transition = "opacity 0.5s, transform 0.5s";
});

const gomitoli = document.querySelectorAll(".gomitolo-animato");

gomitoli.forEach((gomitolo) => {
  gomitolo.addEventListener("click", () => {
    // Salva le dimensioni originali
    const originalWidth = parseInt(gomitolo.style.width || "250px");
    const originalHeight = parseInt(gomitolo.style.height || "250px");

    // Dimensioni finali (50% in più)
    const targetWidth = originalWidth * 1.5;
    const targetHeight = originalHeight * 1.5;

    // Parametri dell’animazione
    const duration = 500; // Durata totale in millisecondi (0.5s)
    let startTime = null;

    // Funzione di easing per un movimento morbido (ease-in-out)
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    // Animazione di espansione
    function expand(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration / 2), 1); // Prima metà dell’animazione

      const easedProgress = easeInOut(progress);
      const currentWidth =
        originalWidth + (targetWidth - originalWidth) * easedProgress;
      const currentHeight =
        originalHeight + (targetHeight - originalHeight) * easedProgress;

      gomitolo.style.width = `${currentWidth}px`;
      gomitolo.style.height = `${currentHeight}px`;

      if (progress < 1) {
        requestAnimationFrame(expand);
      } else {
        // Quando raggiunge il massimo, inizia a ridursi
        startTime = null;
        requestAnimationFrame(shrink);
      }
    }

    // Animazione di riduzione
    function shrink(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration / 2), 1); // Seconda metà dell’animazione

      const easedProgress = easeInOut(progress);
      const currentWidth =
        targetWidth - (targetWidth - originalWidth) * easedProgress;
      const currentHeight =
        targetHeight - (targetHeight - originalHeight) * easedProgress;

      gomitolo.style.width = `${currentWidth}px`;
      gomitolo.style.height = `${currentHeight}px`;

      if (progress < 1) {
        requestAnimationFrame(shrink);
      }
    }

    // Avvia l’animazione
    requestAnimationFrame(expand);
  });
});

// Dati di default per la navbar
const defaultNavItems = {
  "nav-home": "Home",
  "nav-services": "Servizi",
  "nav-about": "Chi Siamo",
  "nav-mission": "Cosa facciamo",
  "nav-team": "Il nostro team",
  "nav-contact": "Contatti",
};

// Dati di default per la sezione hero
const defaultHeroItems = {
  "hero-title": "Il Gomitolo",
  "hero-subtitle": "Trova il filo della tua serenità",
};

// Dati di default per la sezione services
const defaultServicesItems = {
  "services-title": "Servizi",
  cards: [
    {
      title: "Psicologia clinica per adulti",
      description:
        "Se ti senti sopraffatto da disagio, ansia o difficoltà emotive, un percorso con i nostri psicologi può aiutarti a ritrovare serenità e consapevolezza. Contattaci per un primo ascolto.",
      image: "./images/default_services.jpg",
    },
  ],
};

// Dati di default per la sezione about
const defaultAboutItems = {
  "about-title": "Chi siamo",
  "about-content":
    "Siamo un'associazione di promozione sociale che raccoglie al suo interno professionisti specializzati in diverse aree di competenza, con esperienze professionali e formative eterogenee che condividono il piacere del confronto, del lavoro in équipe e dello scambio in rete con il territorio. La nostra sede è sita nel comune di Venaria Reale in provincia di Torino, uno spazio accogliente dove i nostri specialisti lavorano in sincronia tra di loro offrendo un servizio prezioso alla comunità. La nostra azione di promozione sociale, finalizzata al benessere e al progresso delle persone, vede impegnati quotidianamente professionisti esperti nelle varie specialità, come ad esempio: psicologi, psicoterapeuti, logopedisti, Neuropsicomotricisti, Terapisti della riabilitazione psichiatrica, educatori, sessuologi, formatori e specialisti legati al mondo della motivazione e delle attività di team building.",
};

// Dati di default per la sezione mission
const defaultMissionItems = {
  "mission-title": "Cosa facciamo",
  "mission-content":
    "Ci impegniamo tutti i giorni per dare il nostro contributo al benessere psicologico della comunità fornendo alle persone gli strumenti necessari per gestire al meglio i problemi che si presentano durante la propria esistenza. Diamo vita inoltre ad attività di tipo editoriale e divulgativo in genere, organizziamo corsi ed eventi tematici in presenza, presso la sede di Venaria Reale o sale convegno attrezzate. Siamo molto attivi e tecnicamente all’avanguardia nell’ascolto e nella formazione a distanza, utilizzando i modelli e gli strumenti innovativi che oggi la tecnologia ci mette a disposizione. La terapia online è una risorsa fondamentale in questa epoca, soprattutto in seguito alla pandemia da Covid-19. Lo sviluppo della tecnologia e la sua conseguente integrazione con le varie professioni, ha richiesto a discipline come psicologia una notevole capacità di adattamento. Proprio per questo motivo, operiamo su tutto il territorio nazionale, anche a distanza, mediante i mezzi e i dispositivi di comunicazione oggi disponibili grazie a internet.",
};

const defaultTeamItems = {
  "team-title": "Il nostro team",
  cards: [
    {
      name: "Andrea Rista",
      profession: "Presidente, Psicologo, Pricoterapeuta",
      image: "./images/default_team.jpg",
    },
  ],
};

// Simulazione dati dal database (undefined per ora)
let databaseNavItems;
let databaseHeroItems;
let databaseServicesItems;
let databaseAboutItems;
let databaseMissionItems;
let databaseTeamItems;

// Funzione per aggiornare la navbar
function updateNavbar() {
  databaseNavItems.forEach((item) => {
    const element = document.getElementById(item.element_id);
    if (element) {
      element.textContent = item.voce_menu;
    }
  });
}

// Funzione per aggiornare la sezione hero
function updateHero() {
  const titleElement = document.getElementById("hero-title");
  const subtitleElement = document.getElementById("hero-subtitle");
  if (titleElement) {
    titleElement.textContent =
      databaseHeroItems && databaseHeroItems.title
        ? databaseHeroItems.title
        : defaultHeroItems["hero-title"];
  }

  if (subtitleElement) {
    subtitleElement.textContent =
      databaseHeroItems && databaseHeroItems.subtitle
        ? databaseHeroItems.subtitle
        : defaultHeroItems["hero-subtitle"];
  }
}

// Funzione per aggiornare la sezione services
function updateServices() {
  // Aggiorna il titolo principale
  const titleElement = document.getElementById("services-title");
  if (titleElement) {
    titleElement.textContent = defaultServicesItems["services-title"];
  }

  // Aggiorna le card
  const grid = document.getElementById("services-grid");
  if (grid) {
    // Svuota il contenitore per evitare duplicati
    grid.innerHTML = "";

    // Scegli le card dal database o default
    const cards = databaseServicesItems
      ? databaseServicesItems
      : defaultServicesItems["cards"];

    // Crea dinamicamente ogni card
    cards.forEach((cardData) => {
      const card = document.createElement("div");
      card.className = "service-card";

      const image = document.createElement("div");
      image.className = "service-image";
      image.style.backgroundImage = `url('${cardData.image}')`;

      const title = document.createElement("h3");
      title.textContent = cardData.title;

      const description = document.createElement("p");
      description.textContent = cardData.description;

      // Aggiungi gli elementi alla card
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(description);

      // Aggiungi la card al grid
      grid.appendChild(card);
    });
  }
}

// Funzione per aggiornare la sezione about
function updateAbout() {
  const aboutTitleElement = document.getElementById("about-title");
  const aboutContentElement = document.getElementById("about-content");
  if (aboutTitleElement) {
    aboutTitleElement.textContent =
      databaseAboutItems && databaseAboutItems.title
        ? databaseAboutItems.title
        : defaultAboutItems["about-title"];
  }

  if (aboutContentElement) {
    aboutContentElement.textContent =
      databaseAboutItems && databaseAboutItems.content
        ? databaseAboutItems.content
        : defaultAboutItems["about-content"];
  }
}

// Funzione per aggiornare la sezione mission
function updateMission() {
  const missionTitleElement = document.getElementById("mission-title");
  const missionContentElement = document.getElementById("mission-content");
  if (missionTitleElement) {
    missionTitleElement.textContent =
      databaseMissionItems && databaseMissionItems.title
        ? databaseMissionItems.title
        : defaultMissionItems["mission-title"];
  }

  if (missionContentElement) {
    missionContentElement.textContent =
      databaseMissionItems && databaseMissionItems.content
        ? databaseMissionItems.content
        : defaultMissionItems["mission-content"];
  }
}

// Funzione per aggiornare la sezione team
function updateTeam() {
  // Aggiorna il titolo principale
  const titleElement = document.getElementById("team-title");
  if (titleElement) {
    titleElement.textContent = defaultTeamItems["team-title"];
  }

  // Aggiorna le card
  const grid = document.getElementById("team-grid");
  if (grid) {
    grid.innerHTML = "";

    const cards = databaseTeamItems
      ? databaseTeamItems
      : defaultTeamItems.cards;

    cards.forEach((cardData) => {
      const card = document.createElement("div");
      card.className = "team-card";
      card.innerHTML = `
                <div class="photo" style="background-image: url('${cardData.image}');"></div>
                <h3>${cardData.name}</h3>
                <p>${cardData.profession}</p>
            `;
      grid.appendChild(card);
    });
  }
}

// Esegui al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
  updateNavbar();
  updateHero();
  updateServices();
  updateAbout();
  updateMission();
  updateTeam();
});

const path = "http://localhost/nuovo_gomitolo/public/api/";

async function fetchData() {
  try {
    const response = await fetch(path + "read.php");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      databaseNavItems = data.menu;
      databaseHeroItems = data.hero[0];
      databaseServicesItems = data.servizi;
      databaseAboutItems = data.chisiamo[0];
      databaseMissionItems = data.cosafacciamo[0];
      databaseTeamItems = data.team;

      updateNavbar();
      updateHero();
      updateServices();
      updateAbout();
      updateMission();
      updateTeam();
    } else {
      throw new Error("Errore HTTP: " + response.status);
    }
  } catch (error) {
    console.error("Errore nella richiesta: " + error.message);
  }
}

fetchData();
