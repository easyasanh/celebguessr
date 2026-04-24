const STORAGE_KEY = "celebguessr-state-v1";
const MAX_REVEALS = 7;
const MISS_SCORE = 8;

const PEOPLE = [
  createPerson({
    id: "taylor-swift",
    name: "Taylor Swift",
    aliases: ["Taylor Alison Swift", "Swift"],
    category: "Singer-songwriter",
    teaser: "stadium-scale pop architect",
    difficulty: "standard",
    clues: [
      "Singer-songwriter",
      "Known for re-recording major albums",
      "Albums include 1989 and Red",
      "Eras Tour headliner"
    ],
    imagePath: "Taylor Swift at the 2024 Golden Globes (2).png",
    imageSourcePage:
      "https://commons.wikimedia.org/wiki/File:Taylor_Swift_at_the_2024_Golden_Globes_(2).png",
    imageCredit: "Wikimedia Commons source file",
    imagePosition: "center 18%",
    palette: {
      background: ["#efe0c4", "#d3b38d"],
      shirt: "#4b6387",
      hair: "#d8b56e",
      skin: "#f1c9ad",
      accent: "#dbe7f8",
      hairStyle: "waves"
    }
  }),
  createPerson({
    id: "barack-obama",
    name: "Barack Obama",
    aliases: ["President Obama", "Obama", "Barack Hussein Obama II"],
    category: "Politician",
    teaser: "calm podium presence",
    difficulty: "standard",
    clues: [
      "Politician",
      "Served as U.S. president in the 2010s",
      "Succeeded George W. Bush",
      "Author of A Promised Land"
    ],
    imagePath: "Barack Obama in his Oval Office, Feb. 2009.jpg",
    imageSourcePage:
      "https://commons.wikimedia.org/wiki/File:Barack_Obama_in_his_Oval_Office,_Feb._2009.jpg",
    imageCredit: "The White House via Wikimedia Commons",
    palette: {
      background: ["#d9e4ea", "#8aa5b7"],
      shirt: "#1f3556",
      hair: "#303030",
      skin: "#9b684f",
      accent: "#bfceda",
      hairStyle: "close"
    }
  }),
  createPerson({
    id: "zendaya",
    name: "Zendaya",
    aliases: ["Zendaya Coleman", "Zendaya Maree Stoermer Coleman"],
    category: "Actor",
    teaser: "fashion-forward screen star",
    difficulty: "standard",
    clues: [
      "Actor",
      "Won major TV awards for Euphoria",
      "Also known for Dune and Spider-Man",
      "Uses a single-word stage name"
    ],
    imagePath: "Zendaya 2024.jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Zendaya_2024.jpg",
    imageCredit: "ManoSolo13241324 via Wikimedia Commons (CC0)",
    imagePosition: "center 18%",
    palette: {
      background: ["#f0d6d1", "#b96f73"],
      shirt: "#7a564b",
      hair: "#3b2a22",
      skin: "#b77f67",
      accent: "#f6ece2",
      hairStyle: "bun"
    }
  }),
  createPerson({
    id: "lionel-messi",
    name: "Lionel Messi",
    aliases: ["Messi", "Leo Messi", "Lionel Andres Messi"],
    category: "Footballer",
    teaser: "world-cup-winning playmaker",
    difficulty: "standard",
    clues: [
      "Footballer",
      "Spent most of his club career with Barcelona",
      "Won the 2022 World Cup",
      "Now plays in Miami"
    ],
    imagePath: "Messi warming up - ARG v CAN - 2024-07-09.jpg",
    imageSourcePage:
      "https://commons.wikimedia.org/wiki/File:Messi_warming_up_-_ARG_v_CAN_-_2024-07-09.jpg",
    imageCredit: "Sebas via Wikimedia Commons (CC BY 3.0)",
    imagePosition: "center 20%",
    palette: {
      background: ["#e5d9c2", "#c9a572"],
      shirt: "#f2a63b",
      hair: "#4e382b",
      skin: "#d1a07c",
      accent: "#ffe8b7",
      hairStyle: "short"
    }
  }),
  createPerson({
    id: "adele",
    name: "Adele",
    aliases: ["Adele Laurie Blue Adkins"],
    category: "Singer",
    teaser: "power-ballad mainstay",
    difficulty: "easy",
    clues: [
      "Singer",
      "Albums are famously titled with ages",
      "Known for Rolling in the Deep and Hello",
      "Las Vegas residency headliner"
    ],
    imagePath: "Adele.jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Adele.jpg",
    imageCredit: "Mpawsey via Wikimedia Commons (CC BY-SA)",
    palette: {
      background: ["#e7d5b8", "#b69067"],
      shirt: "#2b2b37",
      hair: "#b98552",
      skin: "#f0c9aa",
      accent: "#f9e7d2",
      hairStyle: "volume"
    }
  }),
  createPerson({
    id: "ryan-gosling",
    name: "Ryan Gosling",
    aliases: ["Gosling"],
    category: "Actor",
    teaser: "coolly detached movie star",
    difficulty: "standard",
    clues: [
      "Actor",
      "Known for La La Land and Drive",
      "Played Ken in Barbie",
      "Canadian star with Oscar nominations"
    ],
    imagePath: "Ryan Gosling (36034948582).jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Ryan_Gosling_(36034948582).jpg",
    imageCredit: "Gage Skidmore via Wikimedia Commons (CC BY-SA 2.0)",
    palette: {
      background: ["#e6d4c1", "#b99c83"],
      shirt: "#78453f",
      hair: "#9b774f",
      skin: "#e5be9d",
      accent: "#f9ece1",
      hairStyle: "swept"
    }
  }),
  createPerson({
    id: "beyonce",
    name: "Beyonce",
    aliases: ["Beyonce Knowles", "Beyonce Knowles-Carter", "Beyoncé", "Beyoncé Knowles"],
    category: "Singer",
    teaser: "commanding stage icon",
    difficulty: "easy",
    clues: [
      "Singer",
      "Rose to fame in Destiny's Child",
      "Released Renaissance and Cowboy Carter",
      "Often called Queen Bey"
    ],
    imagePath: "Beyonce.jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Beyonce.jpg",
    imageCredit: "Jen Keys via Wikimedia Commons (public domain)",
    palette: {
      background: ["#f1d8b8", "#bf8a3d"],
      shirt: "#b95c2e",
      hair: "#cf9b4d",
      skin: "#c2875d",
      accent: "#f8ead8",
      hairStyle: "waves"
    }
  }),
  createPerson({
    id: "keanu-reeves",
    name: "Keanu Reeves",
    aliases: ["Keanu", "Keanu Charles Reeves"],
    category: "Actor",
    teaser: "beloved action-movie anchor",
    difficulty: "standard",
    clues: [
      "Actor",
      "Known for The Matrix and John Wick",
      "Canadian-born star with a devoted internet fanbase",
      "Often associated with motorcycles and a very calm public image"
    ],
    imagePath: "Keanu Reeves SDCC 2024 10 (cropped).jpg",
    imageSourcePage:
      "https://commons.wikimedia.org/wiki/File:Keanu_Reeves_SDCC_2024_10_(cropped).jpg",
    imageCredit: "Chris Roth via Wikimedia Commons (CC BY 2.0)",
    imagePosition: "center 18%",
    palette: {
      background: ["#d8dee8", "#6b7b95"],
      shirt: "#1d1f27",
      hair: "#222222",
      skin: "#c6936c",
      accent: "#edf3fb",
      hairStyle: "shoulder"
    }
  }),
  createPerson({
    id: "emma-stone",
    name: "Emma Stone",
    aliases: ["Emily Jean Stone"],
    category: "Actor",
    teaser: "sharp comic and dramatic lead",
    difficulty: "standard",
    clues: [
      "Actor",
      "Known for La La Land and Poor Things",
      "Often recognized for distinctive red hair",
      "Won Oscars in 2017 and 2024"
    ],
    imagePath: "Emma Stone.jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Emma_Stone.jpg",
    imageCredit: "Raph_PH via Wikimedia Commons (CC BY 4.0)",
    palette: {
      background: ["#ecd5ca", "#d58e6b"],
      shirt: "#254c3c",
      hair: "#b25831",
      skin: "#f3c9ae",
      accent: "#fde9df",
      hairStyle: "bob"
    }
  }),
  createPerson({
    id: "dua-lipa",
    name: "Dua Lipa",
    aliases: ["Dua"],
    category: "Singer",
    teaser: "sleek pop hitmaker",
    difficulty: "standard",
    clues: [
      "Singer",
      "Known for Future Nostalgia",
      "Songs include Levitating and Houdini",
      "British-Albanian pop star"
    ],
    imagePath: "Dua Lipa Nîmes 2024-1.jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Dua_Lipa_N%C3%AEmes_2024-1.jpg",
    imageCredit: "Punx via Wikimedia Commons (CC0)",
    imagePosition: "center 14%",
    imagePath: "Simone Biles National Team 2024.jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Simone_Biles_National_Team_2024.jpg",
    imageCredit: "Ocoudis via Wikimedia Commons (CC BY-SA 4.0)",
    imagePosition: "center 18%",
    palette: {
      background: ["#dedaf0", "#8477be"],
      shirt: "#342c52",
      hair: "#231f20",
      skin: "#d0a07d",
      accent: "#f0ebff",
      hairStyle: "long"
    }
  }),
  createPerson({
    id: "simone-biles",
    name: "Simone Biles",
    aliases: ["Biles", "Simone Arianne Biles"],
    category: "Gymnast",
    teaser: "gravity-defying legend",
    difficulty: "standard",
    clues: [
      "Gymnast",
      "The most decorated athlete in her sport",
      "Returned to Olympic competition in 2024",
      "Several moves are named after her"
    ],
    palette: {
      background: ["#efe0d3", "#ca8f6f"],
      shirt: "#4d2f6d",
      hair: "#342219",
      skin: "#8a5c46",
      accent: "#fef4ef",
      hairStyle: "bun"
    }
  }),
  createPerson({
    id: "timothee-chalamet",
    name: "Timothee Chalamet",
    aliases: ["Timothee", "Timothée Chalamet"],
    category: "Actor",
    teaser: "restless prestige star",
    difficulty: "hard",
    clues: [
      "Actor",
      "Known for Call Me by Your Name and Dune",
      "Played Willy Wonka in a 2023 musical fantasy",
      "French-American star with a famously tousled look"
    ],
    imagePath: "Timothée Chalamet 2026.jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Timoth%C3%A9e_Chalamet_2026.jpg",
    imageCredit: "ManoSolo13241324 via Wikimedia Commons (CC0)",
    imagePosition: "center 15%",
    palette: {
      background: ["#d7e0d0", "#8fa27e"],
      shirt: "#744f33",
      hair: "#402d22",
      skin: "#dfb38e",
      accent: "#eff6ea",
      hairStyle: "curl"
    }
  }),
  createPerson({
    id: "rihanna",
    name: "Rihanna",
    aliases: ["Robyn Rihanna Fenty", "Fenty"],
    category: "Singer and entrepreneur",
    teaser: "pop titan turned beauty mogul",
    difficulty: "easy",
    clues: [
      "Singer and entrepreneur",
      "Founded Fenty Beauty",
      "Known for Umbrella, Diamonds, and Work",
      "Headlined the Super Bowl halftime show in 2023"
    ],
    imagePath: "Rihanna (6777125510).jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Rihanna_(6777125510).jpg",
    imageCredit: "Eva Rinaldi via Wikimedia Commons (CC BY-SA 2.0)",
    palette: {
      background: ["#eed4d7", "#be6a7b"],
      shirt: "#8b2330",
      hair: "#1f1a1a",
      skin: "#a86b51",
      accent: "#fcebed",
      hairStyle: "long"
    }
  }),
  createPerson({
    id: "pedro-pascal",
    name: "Pedro Pascal",
    aliases: ["Jose Pedro Balmaceda Pascal", "Pedro José Pascal"],
    category: "Actor",
    teaser: "internet’s favorite protective lead",
    difficulty: "standard",
    clues: [
      "Actor",
      "Known for The Last of Us and The Mandalorian",
      "Chilean-born star with a major TV presence",
      "Plays Joel and a helmeted bounty hunter"
    ],
    imagePath: "Pedro Pascal (36082097846).jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Pedro_Pascal_(36082097846).jpg",
    imageCredit: "Gage Skidmore via Wikimedia Commons (CC BY-SA 2.0)",
    palette: {
      background: ["#e8d7be", "#b18b5d"],
      shirt: "#405970",
      hair: "#342b27",
      skin: "#bc8c68",
      accent: "#f7ecdf",
      hairStyle: "short"
    }
  }),
  createPerson({
    id: "serena-williams",
    name: "Serena Williams",
    aliases: ["Serena", "Serena Jameka Williams"],
    category: "Tennis player",
    teaser: "dominant court legend",
    difficulty: "standard",
    clues: [
      "Tennis player",
      "Won 23 Grand Slam singles titles",
      "Shared a famous sibling rivalry on tour",
      "One of the sport’s most dominant servers"
    ],
    imagePath: "Serena Williams .jpg",
    imageSourcePage: "https://commons.wikimedia.org/wiki/File:Serena_Williams_.jpg",
    imageCredit: "Hanson K Joseph via Wikimedia Commons (CC BY-SA)",
    palette: {
      background: ["#f3dfcc", "#c88755"],
      shirt: "#98522f",
      hair: "#3c251b",
      skin: "#8f5b41",
      accent: "#fff0e4",
      hairStyle: "ponytail"
    }
  }),
  createPerson({
    id: "margot-robbie",
    name: "Margot Robbie",
    aliases: ["Margot Elise Robbie"],
    category: "Actor",
    teaser: "sunlit movie-star charisma",
    difficulty: "standard",
    clues: [
      "Actor",
      "Played Harley Quinn and Barbie",
      "Australian star and producer",
      "Also known for I, Tonya and Babylon"
    ],
    palette: {
      background: ["#f0ded0", "#d4a173"],
      shirt: "#d04f77",
      hair: "#d7b06e",
      skin: "#efc9ad",
      accent: "#ffedf5",
      hairStyle: "waves"
    }
  }),
  createPerson({
    id: "lebron-james",
    name: "LeBron James",
    aliases: ["LeBron", "King James", "Lebron James"],
    category: "Basketball player",
    teaser: "all-time all-around force",
    difficulty: "easy",
    clues: [
      "Basketball player",
      "Won championships with Miami, Cleveland, and Los Angeles",
      "Became the NBA's all-time leading scorer",
      "Often called King James"
    ],
    imagePath: "LeBron James, Olympic Games 2024 (cropped).jpg",
    imageSourcePage:
      "https://commons.wikimedia.org/wiki/File:LeBron_James,_Olympic_Games_2024_(cropped).jpg",
    imageCredit: "Clément Bardot via Wikimedia Commons (CC BY-SA 4.0)",
    imagePosition: "center 16%",
    palette: {
      background: ["#e6d9bd", "#9f7d43"],
      shirt: "#7f4b22",
      hair: "#211716",
      skin: "#7e533d",
      accent: "#fff1c8",
      hairStyle: "close"
    }
  }),
  createPerson({
    id: "billie-eilish",
    name: "Billie Eilish",
    aliases: ["Billie", "Billie Eilish Pirate Baird O'Connell"],
    category: "Singer-songwriter",
    teaser: "whisper-pop shape-shifter",
    difficulty: "standard",
    clues: [
      "Singer-songwriter",
      "Known for Bad Guy and Happier Than Ever",
      "Frequently collaborates with her brother Finneas",
      "Won Oscars for Bond and Barbie songs"
    ],
    imagePath: "Billie Eilish performing in Inglewood (Dec 2024).png",
    imageSourcePage:
      "https://commons.wikimedia.org/wiki/File:Billie_Eilish_performing_in_Inglewood_(Dec_2024).png",
    imageCredit: "Wikimedia Commons source file",
    imagePosition: "center 20%",
    palette: {
      background: ["#d8e2c5", "#85954f"],
      shirt: "#2f4731",
      hair: "#665d2d",
      skin: "#edc2a2",
      accent: "#eef6de",
      hairStyle: "volume"
    }
  })
];

const PLAYABLE_PEOPLE = PEOPLE.filter((person) =>
  [
    "taylor-swift",
    "zendaya",
    "lionel-messi",
    "keanu-reeves",
    "emma-stone",
    "dua-lipa",
    "simone-biles",
    "timothee-chalamet",
    "lebron-james",
    "billie-eilish"
  ].includes(person.id)
);

const state = loadState();
const root = document.querySelector("#view-root");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");

document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("change", handleChange);
modal.addEventListener("click", (event) => {
  const box = modal.getBoundingClientRect();
  const inside =
    event.clientX >= box.left &&
    event.clientX <= box.right &&
    event.clientY >= box.top &&
    event.clientY <= box.bottom;
  if (!inside) {
    modal.close();
  }
});

hydrateDailyProgress();
render();

function createPerson({
  id,
  name,
  aliases,
  category,
  teaser,
  difficulty,
  clues,
  palette,
  imagePath,
  imageSourcePage,
  imageCredit,
  imagePosition
}) {
  return {
    id,
    name,
    aliases,
    category,
    teaser,
    difficulty,
    clues,
    palette,
    imagePath,
    imageSourcePage,
    imageCredit,
    imagePosition,
    portrait: imagePath
      ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(imagePath)}`
      : makePortraitDataUrl({ name, category, palette })
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return {
      stats: saved.stats || {
        dailyHistory: {},
        streak: 0,
        lastDailyPlayed: null,
        roundsPlayed: 0,
        bestDaily: null,
        totalDailyScore: 0,
        dailyCompletions: 0,
        revealHistogram: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }
      },
      preferences: saved.preferences || {
        unlimitedLength: 9,
        unlimitedCategory: "mixed",
        unlimitedDifficulty: "standard"
      },
      session: null
    };
  } catch {
    return {
      stats: {
        dailyHistory: {},
        streak: 0,
        lastDailyPlayed: null,
        roundsPlayed: 0,
        bestDaily: null,
        totalDailyScore: 0,
        dailyCompletions: 0,
        revealHistogram: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }
      },
      preferences: {
        unlimitedLength: 9,
        unlimitedCategory: "mixed",
        unlimitedDifficulty: "standard"
      },
      session: null
    };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getTodayKey() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London" }).format(new Date());
}

function getDailyCourse() {
  const key = getTodayKey();
  const seeded = seededShuffle([...PLAYABLE_PEOPLE], stringToSeed(key));
  return {
    id: key.replaceAll("-", ""),
    key,
    holes: seeded.slice(0, 9)
  };
}

function hydrateDailyProgress() {
  const course = getDailyCourse();
  const savedDaily = state.stats.dailyHistory[course.key];
  if (savedDaily && savedDaily.completed) {
    return;
  }
}

function render() {
  if (!state.session) {
    renderHome();
    return;
  }

  if (state.session.phase === "play") {
    renderSession();
    return;
  }

  if (state.session.phase === "feedback") {
    renderFeedback();
    return;
  }

  if (state.session.phase === "results") {
    renderResults();
  }
}

function renderHome() {
  const template = document.querySelector("#home-template");
  root.innerHTML = "";
  root.appendChild(template.content.cloneNode(true));

  const daily = getDailyCourse();
  const average =
    state.stats.dailyCompletions > 0
      ? (state.stats.totalDailyScore / state.stats.dailyCompletions).toFixed(1)
      : "—";

  root.querySelector("#daily-course-label").textContent = `#${daily.id.slice(-3)}`;
  root.querySelector("#home-streak").textContent = state.stats.streak;
  root.querySelector("#home-best").textContent = state.stats.bestDaily ?? "—";
  root.querySelector("#home-average").textContent = average;
  root.querySelector("#today-teaser").textContent = buildDailyTeaser(daily.holes);
}

function renderSession() {
  const session = state.session;
  const currentHole = session.holes[session.currentHoleIndex];
  const revealIndex = currentHole.revealIndex;
  const person = currentHole.person;

  root.innerHTML = `
    <section class="play-surface">
      <div class="course-header">
        <div class="course-meta">
          <p class="course-stamp">${session.label}</p>
          <h1>${session.title}</h1>
          <div class="meta-row">
            <span class="muted-text">Hole ${session.currentHoleIndex + 1} of ${session.holes.length}</span>
            <span class="meta-value">Total: ${session.totalScore}</span>
          </div>
        </div>
        <div class="course-meta">
          <span class="muted-text">Current hole score</span>
          <span class="meta-value">${revealIndex}</span>
          <span class="muted-text">${MAX_REVEALS - revealIndex + 1} reveals left before the miss line</span>
        </div>
      </div>

      <div class="progress-strip">
        <div class="hole-progress" style="--holes:${session.holes.length}">
          ${session.holes
            .map((hole, index) => {
              const statusClass =
                index < session.currentHoleIndex
                  ? "is-done"
                  : index === session.currentHoleIndex
                    ? "is-current"
                    : "";
              const score = hole.score ?? "—";
              return `<div class="hole-pill ${statusClass}">
                <small>Hole ${index + 1}</small>
                <strong>${score}</strong>
              </div>`;
            })
            .join("")}
        </div>
        <div class="stage-dots">
          ${Array.from({ length: MAX_REVEALS }, (_, index) => {
            const stage = index + 1;
            const status =
              stage < revealIndex ? "is-done" : stage === revealIndex ? "is-active" : "";
            return `<span class="stage-dot ${status}"></span>`;
          }).join("")}
        </div>
      </div>

      <div class="play-grid">
        <article class="reveal-card">
          <div class="portrait-stage" data-stage="${Math.min(revealIndex, 3)}">
            <img
              src="${person.portrait}"
              alt="Celebrity photo clue for the current round"
              style="--portrait-position:${person.imagePosition || "center top"}"
            />
          </div>
          <div class="reveal-body">
            <p class="reveal-label">Reveal ${revealIndex}</p>
            <p class="reveal-copy">${getRevealCopy(person, revealIndex)}</p>
          </div>
        </article>

        <aside class="sidebar-card">
          <div>
            <p class="reveal-label">Hole notes</p>
            <h2>Take the guess when it feels live.</h2>
            <p class="inline-note">A wrong guess moves you forward and adds a stroke. Lower is better.</p>
          </div>

          <div class="score-block">
            <div class="score-box">
              <span class="score-box__label">Hole</span>
              <strong>${revealIndex}</strong>
            </div>
            <div class="score-box">
              <span class="score-box__label">Course</span>
              <strong>${session.totalScore}</strong>
            </div>
          </div>

          <form id="guess-form">
            <label class="reveal-label" for="guess-input">Type a celebrity name</label>
            <input id="guess-input" class="answer-input" name="guess" autocomplete="off" spellcheck="false" />
            <div class="input-row">
              <button class="guess-button" type="submit">Guess</button>
              <button class="reveal-button" type="button" data-action="next-reveal">Reveal Next</button>
            </div>
          </form>

          <p class="answer-meta">${buildAnswerMeta(person)}</p>
        </aside>
      </div>
    </section>
  `;

  const input = document.querySelector("#guess-input");
  if (input) {
    input.focus();
  }
}

function renderFeedback() {
  const session = state.session;
  const feedback = session.feedback;

  root.innerHTML = `
    <section class="feedback-card">
      <p class="course-stamp">${session.label}</p>
      <h1>${feedback.correct ? "Correct" : feedback.exhausted ? "Out of reveals" : "Not quite"}</h1>
      <p class="answer-name">${feedback.person.name}</p>
      <p class="feedback-tone">${feedback.copy}</p>
      <div class="results-grid">
        <div class="results-stat">
          <span>Hole score</span>
          <strong>${feedback.holeScore}</strong>
        </div>
        <div class="results-stat">
          <span>Running total</span>
          <strong>${session.totalScore}</strong>
        </div>
        <div class="results-stat">
          <span>Fact line</span>
          <strong>${feedback.factLine}</strong>
        </div>
      </div>
      <div class="feedback-card__actions">
        <button class="primary-button" data-action="continue-hole">${session.currentHoleIndex + 1 >= session.holes.length ? "View Scorecard" : "Next Hole"}</button>
        <button class="secondary-button" data-action="go-home">Home</button>
      </div>
    </section>
  `;
}

function renderResults() {
  const session = state.session;
  const solved = session.holes.filter((hole) => hole.score !== MISS_SCORE).length;
  const average =
    session.mode === "daily" && state.stats.dailyCompletions > 0
      ? (state.stats.totalDailyScore / state.stats.dailyCompletions).toFixed(1)
      : null;

  root.innerHTML = `
    <section class="results-card">
      <p class="course-stamp">${session.label}</p>
      <h1>${session.title} complete</h1>
      <p class="muted-text">One course, ${session.holes.length} holes, and a single running score. The card is what matters.</p>

      <div class="results-grid">
        <div class="results-stat">
          <span>Score</span>
          <strong>${session.totalScore}</strong>
        </div>
        <div class="results-stat">
          <span>Solved</span>
          <strong>${solved}/${session.holes.length}</strong>
        </div>
        <div class="results-stat">
          <span>${session.mode === "daily" ? "Streak" : "Mode"}</span>
          <strong>${session.mode === "daily" ? state.stats.streak : capitalize(session.mode)}</strong>
        </div>
      </div>

      ${
        average
          ? `<p class="muted-text">Your current Daily 9 average is ${average}. Best daily card: ${state.stats.bestDaily ?? "—"}.</p>`
          : ""
      }

      <div class="scorecard-list">
        ${session.holes
          .map(
            (hole, index) => `
            <div class="scorecard-row">
              <small>Hole ${index + 1}</small>
              <strong>${hole.person.name}</strong>
              <strong>${hole.score}</strong>
            </div>
          `
          )
          .join("")}
      </div>

      <div class="results-actions">
        <button class="primary-button" data-action="share-results">Share Result</button>
        <button class="secondary-button" data-action="setup-unlimited">Play Unlimited</button>
        <button class="secondary-button" data-action="go-home">Home</button>
      </div>
    </section>
  `;
}

function openStats() {
  const average =
    state.stats.dailyCompletions > 0
      ? (state.stats.totalDailyScore / state.stats.dailyCompletions).toFixed(1)
      : "—";
  const totalHistogram = Object.entries(state.stats.revealHistogram).map(([score, count]) => ({
    score,
    count
  }));
  const peak = Math.max(1, ...totalHistogram.map((item) => item.count));

  root.innerHTML = `
    <section class="stats-card">
      <p class="course-stamp">Your numbers</p>
      <h1>Stats</h1>
      <p>Daily rhythm matters more than perfect cards. This view tracks streaks, scoring, and where your guesses usually land.</p>

      <div class="stats-grid">
        <div class="stats-tile">
          <span>Current streak</span>
          <strong>${state.stats.streak}</strong>
        </div>
        <div class="stats-tile">
          <span>Best Daily 9</span>
          <strong>${state.stats.bestDaily ?? "—"}</strong>
        </div>
        <div class="stats-tile">
          <span>Daily average</span>
          <strong>${average}</strong>
        </div>
      </div>

      <div class="stats-chart">
        ${totalHistogram
          .map(
            ({ score, count }) => `
          <div class="stats-bar">
            <span>Score ${score}</span>
            <div class="stats-bar__track">
              <div class="stats-bar__fill" style="width:${(count / peak) * 100}%"></div>
            </div>
            <strong>${count}</strong>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="results-actions">
        <button class="primary-button" data-action="go-home">Back Home</button>
      </div>
    </section>
  `;
}

function renderUnlimitedSetup() {
  const { unlimitedCategory, unlimitedDifficulty, unlimitedLength } = state.preferences;

  root.innerHTML = `
    <section class="setup-card">
      <p class="course-stamp">Unlimited</p>
      <h1>Build your next round.</h1>
      <p>Unlimited mode is for extra reps after the daily card. Pick a length, keep the category broad or narrow it down, and go again.</p>

      <div class="option-group">
        <h2>Length</h2>
        <div class="mode-grid">
          ${renderChoice("length", [3, 9], unlimitedLength)}
        </div>
      </div>

      <div class="option-group">
        <h2>Category</h2>
        <div class="mode-grid">
          ${renderChoice("category", ["mixed", "actors", "music", "sports", "leaders"], unlimitedCategory)}
        </div>
      </div>

      <div class="option-group">
        <h2>Difficulty</h2>
        <div class="mode-grid">
          ${renderChoice("difficulty", ["easy", "standard", "hard"], unlimitedDifficulty)}
        </div>
      </div>

      <div class="results-actions">
        <button class="primary-button" data-action="start-unlimited">Start Unlimited</button>
        <button class="secondary-button" data-action="go-home">Cancel</button>
      </div>
    </section>
  `;
}

function renderChoice(name, options, active) {
  return options
    .map((option) => {
      const label = typeof option === "number" ? `${option} holes` : capitalize(option);
      const value = String(option);
      const activeClass = value === String(active) ? "is-active" : "";
      return `<button type="button" class="chip-button ${activeClass}" data-pref="${name}" data-value="${value}">${label}</button>`;
    })
    .join("");
}

function openHelp() {
  modalContent.innerHTML = `
    <div class="modal-card">
      <h1>How to Play</h1>
      <p>Each hole is one celebrity. You begin at Reveal 1 and decide whether to guess now or pay a stroke for the next reveal.</p>
      <ul>
        <li>Reveal 1 starts every hole.</li>
        <li>Every extra reveal adds 1 stroke.</li>
        <li>A wrong guess moves you to the next reveal.</li>
        <li>If you miss the final reveal, the hole scores as 8.</li>
        <li>Lower total score wins the card.</li>
      </ul>
      <div class="results-actions">
        <button class="primary-button" data-action="close-modal">Got it</button>
      </div>
    </div>
  `;
  modal.showModal();
}

function openCredits() {
  modalContent.innerHTML = `
    <div class="modal-card">
      <h1>Photo Credits</h1>
      <p>The real face photos in this version are loaded from Wikimedia Commons file pages with reusable licenses or public-domain status.</p>
      <div class="credit-list">
        ${PLAYABLE_PEOPLE.map(
          (person) => `
            <div class="credit-item">
              <strong>${person.name}</strong>
              <span>${person.imageCredit}</span><br />
              <a href="${person.imageSourcePage}" target="_blank" rel="noreferrer">View source file</a>
            </div>
          `
        ).join("")}
      </div>
      <div class="results-actions">
        <button class="primary-button" data-action="close-modal">Close</button>
      </div>
    </div>
  `;
  modal.showModal();
}

function startSession(mode) {
  let holes;
  let label;
  let title;
  if (mode === "daily") {
    const course = getDailyCourse();
    holes = course.holes;
    label = `Course #${course.id.slice(-3)}`;
    title = "Daily 9";
  } else if (mode === "quick") {
    const course = getDailyCourse();
    holes = course.holes.slice(0, 3);
    label = `Course #${course.id.slice(-3)} · Quick`;
    title = "Quick 3";
  } else {
    holes = buildUnlimitedCourse();
    label = "Unlimited";
    title = `${holes.length}-Hole Free Play`;
  }

  state.session = {
    mode,
    label,
    title,
    phase: "play",
    totalScore: 0,
    currentHoleIndex: 0,
    feedback: null,
    holes: holes.map((person) => ({
      person,
      revealIndex: 1,
      score: null
    }))
  };
  saveState();
  render();
}

function buildUnlimitedCourse() {
  const { unlimitedCategory, unlimitedDifficulty, unlimitedLength } = state.preferences;
  let pool = [...PLAYABLE_PEOPLE];

  if (unlimitedDifficulty !== "standard") {
    pool = pool.filter((person) => person.difficulty === unlimitedDifficulty);
  }

  if (unlimitedCategory !== "mixed") {
    const categoryMap = {
      actors: ["Actor"],
      music: ["Singer", "Singer-songwriter", "Singer and entrepreneur"],
      sports: ["Footballer", "Gymnast", "Tennis player", "Basketball player"],
      leaders: ["Politician"]
    };
    pool = pool.filter((person) => categoryMap[unlimitedCategory].includes(person.category));
  }

  if (pool.length < unlimitedLength) {
    pool = [...PLAYABLE_PEOPLE];
  }

  return seededShuffle(pool, stringToSeed(`${Date.now()}-${Math.random()}`)).slice(0, unlimitedLength);
}

function handleClick(event) {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  const action = button.dataset.action;
  if (!action) {
    if (button.dataset.pref) {
      state.preferences[`unlimited${capitalize(button.dataset.pref)}`] =
        button.dataset.pref === "length" ? Number(button.dataset.value) : button.dataset.value;
      saveState();
      renderUnlimitedSetup();
    }
    return;
  }

  if (action === "go-home") {
    state.session = null;
    saveState();
    render();
    return;
  }

  if (action === "open-help") {
    openHelp();
    return;
  }

  if (action === "open-credits") {
    openCredits();
    return;
  }

  if (action === "close-modal") {
    modal.close();
    return;
  }

  if (action === "open-stats") {
    openStats();
    return;
  }

  if (action === "setup-unlimited") {
    renderUnlimitedSetup();
    return;
  }

  if (action === "start-daily") {
    startSession("daily");
    return;
  }

  if (action === "start-quick") {
    startSession("quick");
    return;
  }

  if (action === "start-unlimited") {
    startSession("unlimited");
    return;
  }

  if (action === "next-reveal") {
    advanceReveal();
    return;
  }

  if (action === "continue-hole") {
    continueAfterFeedback();
    return;
  }

  if (action === "share-results") {
    shareResults();
  }
}

function handleSubmit(event) {
  if (event.target.id !== "guess-form") {
    return;
  }

  event.preventDefault();
  const formData = new FormData(event.target);
  const guess = String(formData.get("guess") || "").trim();
  if (!guess) {
    return;
  }

  submitGuess(guess);
}

function handleChange() {}

function submitGuess(guess) {
  const hole = state.session.holes[state.session.currentHoleIndex];
  const person = hole.person;
  if (matchesPerson(guess, person)) {
    lockHole({
      correct: true,
      exhausted: false,
      person,
      holeScore: hole.revealIndex,
      copy: `You landed it on reveal ${hole.revealIndex}.`,
      factLine: person.clues[3]
    });
    return;
  }

  if (hole.revealIndex >= MAX_REVEALS) {
    lockHole({
      correct: false,
      exhausted: true,
      person,
      holeScore: MISS_SCORE,
      copy: "That was the last look. This hole goes down as an 8.",
      factLine: person.clues[3]
    });
    return;
  }

  hole.revealIndex += 1;
  saveState();
  renderSession();
}

function advanceReveal() {
  const hole = state.session.holes[state.session.currentHoleIndex];
  if (hole.revealIndex >= MAX_REVEALS) {
    lockHole({
      correct: false,
      exhausted: true,
      person: hole.person,
      holeScore: MISS_SCORE,
      copy: "No reveals left. The hole closes out at 8.",
      factLine: hole.person.clues[3]
    });
    return;
  }

  hole.revealIndex += 1;
  saveState();
  renderSession();
}

function lockHole(feedback) {
  const session = state.session;
  const hole = session.holes[session.currentHoleIndex];
  hole.score = feedback.holeScore;
  session.totalScore += feedback.holeScore;
  session.feedback = feedback;
  session.phase = "feedback";
  state.stats.roundsPlayed += 1;
  state.stats.revealHistogram[feedback.holeScore] += 1;
  saveState();
  render();
}

function continueAfterFeedback() {
  const session = state.session;
  const nextIndex = session.currentHoleIndex + 1;

  if (nextIndex >= session.holes.length) {
    session.phase = "results";
    finalizeSession(session);
    saveState();
    render();
    return;
  }

  session.currentHoleIndex = nextIndex;
  session.phase = "play";
  session.feedback = null;
  saveState();
  render();
}

function finalizeSession(session) {
  if (session.mode !== "daily") {
    return;
  }

  const key = getDailyCourse().key;
  const alreadyLogged = state.stats.dailyHistory[key]?.completed;
  if (alreadyLogged) {
    return;
  }

  state.stats.dailyHistory[key] = {
    completed: true,
    score: session.totalScore
  };
  state.stats.dailyCompletions += 1;
  state.stats.totalDailyScore += session.totalScore;
  state.stats.bestDaily =
    state.stats.bestDaily === null ? session.totalScore : Math.min(state.stats.bestDaily, session.totalScore);

  updateStreak(key);
}

function updateStreak(todayKey) {
  const last = state.stats.lastDailyPlayed;
  if (!last) {
    state.stats.streak = 1;
    state.stats.lastDailyPlayed = todayKey;
    return;
  }

  const lastDate = new Date(`${last}T00:00:00`);
  const todayDate = new Date(`${todayKey}T00:00:00`);
  const diffDays = Math.round((todayDate - lastDate) / 86400000);
  if (diffDays === 0) {
    return;
  }
  if (diffDays === 1) {
    state.stats.streak += 1;
  } else {
    state.stats.streak = 1;
  }
  state.stats.lastDailyPlayed = todayKey;
}

function buildDailyTeaser(holes) {
  return `Today’s card mixes ${holes
    .slice(0, 3)
    .map((person) => person.teaser)
    .join(", ")} and more across a ${holes.length}-hole course.`;
}

function getRevealCopy(person, revealIndex) {
  if (revealIndex <= 3) {
    return [
      "A small centered portrait window is open. If you know the face, this is the moment to steal a stroke.",
      "The head-and-shoulders crop grows. Hair, jawline, and styling should start to narrow it fast.",
      "Most of the portrait is visible now. If the face still is not enough, the text clues take over next."
    ][revealIndex - 1];
  }

  return person.clues[revealIndex - 4];
}

function buildAnswerMeta(person) {
  return person.imageCredit
    ? `Accepted answers include common aliases and close spellings. Photo credit: ${person.imageCredit}.`
    : `Accepted answers include common aliases and close spellings for ${person.category.toLowerCase()} clues.`;
}

function matchesPerson(input, person) {
  const normalized = normalizeName(input);
  const accepted = [person.name, ...(person.aliases || [])].map(normalizeName);
  if (accepted.includes(normalized)) {
    return true;
  }
  return accepted.some((candidate) => levenshtein(candidate, normalized) <= 2);
}

function normalizeName(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function shareResults() {
  const session = state.session;
  const scoreLine = session.holes.map((hole) => hole.score).join(" ");
  const text = `${session.title === "Daily 9" ? "CelebGuessr" : session.title} ${session.label}: ${session.totalScore}\n${scoreLine}`;

  if (navigator.share) {
    navigator.share({ text }).catch(() => {});
    return;
  }

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert("Result copied to clipboard.");
    });
    return;
  }

  alert(text);
}

function stringToSeed(value) {
  let hash = 2166136261;
  for (const char of value) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededShuffle(list, seed) {
  const copy = [...list];
  let currentSeed = seed;
  for (let index = copy.length - 1; index > 0; index -= 1) {
    currentSeed = mulberry32(currentSeed)();
    const swapIndex = Math.floor(currentSeed * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function mulberry32(seed) {
  return function random() {
    let value = (seed += 0x6d2b79f5);
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function levenshtein(left, right) {
  if (left === right) {
    return 0;
  }
  if (!left.length) {
    return right.length;
  }
  if (!right.length) {
    return left.length;
  }

  const matrix = Array.from({ length: left.length + 1 }, () => Array(right.length + 1).fill(0));
  for (let i = 0; i <= left.length; i += 1) {
    matrix[i][0] = i;
  }
  for (let j = 0; j <= right.length; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= left.length; i += 1) {
    for (let j = 1; j <= right.length; j += 1) {
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[left.length][right.length];
}

function makePortraitDataUrl({ name, category, palette }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  const hair = drawHair(palette.hairStyle, palette.hair);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" role="img" aria-label="${name}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${palette.background[0]}"/>
          <stop offset="100%" stop-color="${palette.background[1]}"/>
        </linearGradient>
      </defs>
      <rect width="640" height="800" rx="42" fill="url(#bg)"/>
      <circle cx="320" cy="256" r="186" fill="rgba(255,255,255,0.18)"/>
      <rect x="0" y="560" width="640" height="240" fill="${palette.accent}" opacity="0.62"/>
      <g transform="translate(0 20)">
        ${hair}
        <ellipse cx="320" cy="318" rx="112" ry="132" fill="${palette.skin}"/>
        <ellipse cx="278" cy="316" rx="12" ry="9" fill="#2b211c"/>
        <ellipse cx="362" cy="316" rx="12" ry="9" fill="#2b211c"/>
        <path d="M286 382c24 19 44 27 68 27s46-8 70-27" fill="none" stroke="#8a4d44" stroke-width="10" stroke-linecap="round"/>
        <path d="M272 348c16 10 31 15 48 15s34-5 50-15" fill="none" stroke="#7e4d3d" stroke-width="6" stroke-linecap="round" opacity="0.65"/>
        <rect x="228" y="498" width="184" height="48" rx="24" fill="${palette.skin}" opacity="0.86"/>
        <path d="M164 780c14-152 68-228 156-228s146 76 156 228" fill="${palette.shirt}"/>
        <path d="M251 192c20-15 44-22 70-22c28 0 53 7 75 23" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="12" stroke-linecap="round"/>
      </g>
      <text x="42" y="722" fill="rgba(24,35,18,0.54)" font-family="Manrope, sans-serif" font-size="26" font-weight="800" letter-spacing="8">${category.toUpperCase()}</text>
      <text x="42" y="764" fill="rgba(24,35,18,0.22)" font-family="Fraunces, serif" font-size="92" font-weight="700">${initials}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function drawHair(style, color) {
  const library = {
    close: `<path d="M216 275c18-80 76-122 104-122c67 0 116 33 129 134c-44-27-95-38-140-38c-35 0-74 9-113 26z" fill="${color}"/>`,
    short: `<path d="M210 268c30-86 81-120 116-120c66 0 121 38 130 132c-29-20-82-45-140-45c-48 0-85 13-106 33z" fill="${color}"/>`,
    waves: `<path d="M185 247c40-88 92-126 142-126c72 0 134 52 139 166c-44-22-93-31-146-31c-52 0-104 12-135 37c-7-22-7-29 0-46z" fill="${color}"/>`,
    bun: `<circle cx="322" cy="125" r="55" fill="${color}"/><path d="M195 268c24-88 80-124 124-124c69 0 132 42 141 150c-32-24-84-44-140-44c-44 0-90 12-125 34z" fill="${color}"/>`,
    volume: `<path d="M176 280c10-118 82-182 144-182c72 0 140 57 145 188c-40-34-94-55-145-55c-50 0-103 18-144 49z" fill="${color}"/>`,
    swept: `<path d="M201 268c26-83 80-124 127-124c63 0 120 39 132 128c-58-24-100-30-145-26c-46 4-82 12-114 22z" fill="${color}"/>`,
    shoulder: `<path d="M194 252c36-98 96-144 132-144c78 0 142 58 146 193c-27-35-85-69-148-69c-52 0-100 19-130 49z" fill="${color}"/><path d="M194 252c-18 72-7 165 30 230l58-18c-27-56-31-117-21-188z" fill="${color}"/><path d="M446 246c18 72 7 165-30 230l-58-18c27-56 31-117 21-188z" fill="${color}"/>`,
    bob: `<path d="M188 264c28-88 87-128 132-128c71 0 133 50 141 160c-32-24-86-38-141-38c-48 0-99 11-132 30z" fill="${color}"/><path d="M204 288c-11 83 0 147 28 206l50-18c-22-45-28-92-19-159z" fill="${color}"/><path d="M436 287c11 83 0 147-28 206l-50-18c22-45 28-92 19-159z" fill="${color}"/>`,
    long: `<path d="M180 248c32-99 91-145 140-145c75 0 138 56 146 189c-40-28-90-48-146-48c-51 0-106 18-140 48z" fill="${color}"/><path d="M184 288c-19 95-5 205 48 309l57-30c-38-84-48-165-28-266z" fill="${color}"/><path d="M456 288c19 95 5 205-48 309l-57-30c38-84 48-165 28-266z" fill="${color}"/>`,
    ponytail: `<path d="M193 258c35-95 93-140 131-140c71 0 134 56 143 169c-40-26-91-42-147-42c-47 0-93 12-127 35z" fill="${color}"/><path d="M457 273c47 38 67 95 58 170c-9 74-41 127-97 157c30-52 36-113 20-183c-10-44-3-91 19-144z" fill="${color}"/>`,
    curl: `<path d="M177 272c14-102 90-161 143-161c74 0 138 56 146 188c-40-34-92-58-146-58c-54 0-102 19-143 31z" fill="${color}"/>`
  };
  return library[style] || library.short;
}
