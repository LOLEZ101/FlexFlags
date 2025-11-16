const countries = [
  { name: "Abkhazia", flag: "Flag_of_the_Republic_of_Abkhazia.svg" },
  { name: "Afghanistan", flag: "Flag_of_Taliban.svg" },
  { name: "Albania", flag: "Flag_of_Albania.svg" },
  { name: "Algeria", flag: "Flag_of_Algeria.svg" },
  { name: "Andorra", flag: "Flag_of_Andorra.svg" },
  { name: "Angola", flag: "Flag_of_Angola.svg" },
  { name: "Antigua & Barbuda", flag: "Flag_of_Antigua_and_Barbuda.svg" },
  { name: "Argentina", flag: "Flag_of_Argentina.svg" },
  { name: "Armenia", flag: "Flag_of_Armenia.svg" },
  { name: "Australia", flag: "Flag_of_Australia.svg" },
  { name: "Austria", flag: "Flag_of_Austria.svg" },
  { name: "Azerbaijan", flag: "Flag_of_Azerbaijan.svg" },
  { name: "Bahamas", flag: "Flag_of_the_Bahamas.svg" },
  { name: "Bahrain", flag: "Flag_of_Bahrain.svg" },
  { name: "Bangladesh", flag: "Flag_of_Bangladesh.svg" },
  { name: "Barbados", flag: "Flag_of_Barbados.svg" },
  { name: "Belarus", flag: "Flag_of_Belarus.svg" },
  { name: "Belgium", flag: "Flag_of_Belgium.svg" },
  { name: "Belize", flag: "Flag_of_Belize.svg" },
  { name: "Benin", flag: "Flag_of_Benin.svg" },
  { name: "Bhutan", flag: "Flag_of_Bhutan.svg" },
  { name: "Bolivia", flag: "Flag_of_Bolivia.svg" },
  { name: "Bosnia", flag: "Flag_of_Bosnia_and_Herzegovina.svg" },
  { name: "Botswana", flag: "Flag_of_Botswana.svg" },
  { name: "Bougainville", flag: "Flag_of_Bougainville.svg" },
  { name: "Brazil", flag: "Flag_of_Brazil.svg" },
  { name: "Brunei", flag: "Flag_of_Brunei.svg" },
  { name: "Bulgaria", flag: "Flag_of_Bulgaria.svg" },
  { name: "Burkina Faso", flag: "Flag_of_Burkina_Faso.svg" },
  { name: "Burundi", flag: "Flag_of_Burundi.svg" },
  { name: "Cabo Verde", flag: "Flag_of_Cape_Verde.svg" },
  { name: "Cambodia", flag: "Flag_of_Cambodia.svg" },
  { name: "Cameroon", flag: "Flag_of_Cameroon.svg" },
  { name: "Canada", flag: "Flag_of_Canada.svg" },
  { name: "Central African Republic", flag: "Flag_of_the_Central_African_Republic.svg" },
  { name: "Chad", flag: "Flag_of_Chad.svg" },
  { name: "Chile", flag: "Flag_of_Chile.svg" },
  { name: "China", flag: "Flag_of_the_People's_Republic_of_China.svg" },
  { name: "Colombia", flag: "Flag_of_Colombia.svg" },
  { name: "Comoros", flag: "Flag_of_the_Comoros.svg" },
  { name: "Republic of the Congo", flag: "Flag_of_the_Republic_of_the_Congo.svg" },
  { name: "Costa Rica", flag: "Flag_of_Costa_Rica.svg" },
  { name: "Côte d'Ivoire", flag: "Flag_of_Côte_d'Ivoire.svg" },
  { name: "Croatia", flag: "Flag_of_Croatia.svg" },
  { name: "Cuba", flag: "Flag_of_Cuba.svg" },
  { name: "Cyprus", flag: "Flag_of_Cyprus.svg" },
  { name: "Czechia", flag: "Flag_of_the_Czech_Republic.svg" },
  { name: "Democratic Republic of the Congo", flag: "Flag_of_the_Democratic_Republic_of_the_Congo.svg" },
  { name: "Denmark", flag: "Flag_of_Denmark.svg" },
  { name: "Djibouti", flag: "Flag_of_Djibouti.svg" },
  { name: "Dominica", flag: "Flag_of_Dominica.svg" },
  { name: "Dominican Republic", flag: "Flag_of_the_Dominican_Republic.svg" },
  { name: "Ecuador", flag: "Flag_of_Ecuador.svg" },
  { name: "Egypt", flag: "Flag_of_Egypt.svg" },
  { name: "El Salvador", flag: "Flag_of_El_Salvador.svg" },
  { name: "Equatorial Guinea", flag: "Flag_of_Equatorial_Guinea.svg" },
  { name: "Eritrea", flag: "Flag_of_Eritrea.svg" },
  { name: "Estonia", flag: "Flag_of_Estonia.svg" },
  { name: "Eswatini", flag: "Flag_of_Eswatini.svg" },
  { name: "Ethiopia", flag: "Flag_of_Ethiopia.svg" },
  { name: "Fiji", flag: "Flag_of_Fiji.svg" },
  { name: "Finland", flag: "Flag_of_Finland.svg" },
  { name: "France", flag: "Flag_of_France.svg" },
  { name: "Gabon", flag: "Flag_of_Gabon.svg" },
  { name: "Gambia", flag: "Flag_of_The_Gambia.svg" },
  { name: "Georgia", flag: "Flag_of_Georgia.svg" },
  { name: "Germany", flag: "Flag_of_Germany.svg" },
  { name: "Ghana", flag: "Flag_of_Ghana.svg" },
  { name: "Greece", flag: "Flag_of_Greece.svg" },
  { name: "Grenada", flag: "Flag_of_Grenada.svg" },
  { name: "Guatemala", flag: "Flag_of_Guatemala.svg" },
  { name: "Guinea", flag: "Flag_of_Guinea.svg" },
  { name: "Guinea-Bissau", flag: "Flag_of_Guinea-Bissau.svg" },
  { name: "Guyana", flag: "Flag_of_Guyana.svg" },
  { name: "Haiti", flag: "Flag_of_Haiti.svg" },
  { name: "Honduras", flag: "Flag_of_Honduras.svg" },
  { name: "Hungary", flag: "Flag_of_Hungary.svg" },
  { name: "Iceland", flag: "Flag_of_Iceland.svg" },
  { name: "India", flag: "Flag_of_India.svg" },
  { name: "Indonesia", flag: "Flag_of_Indonesia.svg" },
  { name: "Iran", flag: "Flag_of_Iran.svg" },
  { name: "Iraq", flag: "Flag_of_Iraq.svg" },
  { name: "Ireland", flag: "Flag_of_Ireland.svg" },
  { name: "Israel", flag: "Flag_of_Israel.svg" },
  { name: "Italy", flag: "Flag_of_Italy.svg" },
  { name: "Jamaica", flag: "Flag_of_Jamaica.svg" },
  { name: "Japan", flag: "Flag_of_Japan.svg" },
  { name: "Jordan", flag: "Flag_of_Jordan.svg" },
  { name: "Kazakhstan", flag: "Flag_of_Kazakhstan.svg" },
  { name: "Kenya", flag: "Flag_of_Kenya.svg" },
  { name: "Kiribati", flag: "Flag_of_Kiribati.svg" },
  { name: "Kosovo", flag: "Flag_of_Kosovo.svg" },
  { name: "Kuwait", flag: "Flag_of_Kuwait.svg" },
  { name: "Kyrgyzstan", flag: "Flag_of_Kyrgyzstan.svg" },
  { name: "Laos", flag: "Flag_of_Laos.svg" },
  { name: "Latvia", flag: "Flag_of_Latvia.svg" },
  { name: "Lebanon", flag: "Flag_of_Lebanon.svg" },
  { name: "Lesotho", flag: "Flag_of_Lesotho.svg" },
  { name: "Liberia", flag: "Flag_of_Liberia.svg" },
  { name: "Libya", flag: "Flag_of_Libya.svg" },
  { name: "Liechtenstein", flag: "Flag_of_Liechtenstein.svg" },
  { name: "Lithuania", flag: "Flag_of_Lithuania.svg" },
  { name: "Luxembourg", flag: "Flag_of_Luxembourg.svg" },
  { name: "Madagascar", flag: "Flag_of_Madagascar.svg" },
  { name: "Malawi", flag: "Flag_of_Malawi.svg" },
  { name: "Malaysia", flag: "Flag_of_Malaysia.svg" },
  { name: "Maldives", flag: "Flag_of_Maldives.svg" },
  { name: "Mali", flag: "Flag_of_Mali.svg" },
  { name: "Malta", flag: "Flag_of_Malta.svg" },
  { name: "Marshall Islands", flag: "Flag_of_the_Marshall_Islands.svg" },
  { name: "Mauritania", flag: "Flag_of_Mauritania.svg" },
  { name: "Mauritius", flag: "Flag_of_Mauritius.svg" },
  { name: "Mexico", flag: "Flag_of_Mexico.svg" },
  { name: "Micronesia", flag: "Flag_of_the_Federated_States_of_Micronesia.svg" },
  { name: "Moldova", flag: "Flag_of_Moldova.svg" },
  { name: "Monaco", flag: "Flag_of_Monaco.svg" },
  { name: "Mongolia", flag: "Flag_of_Mongolia.svg" },
  { name: "Montenegro", flag: "Flag_of_Montenegro.svg" },
  { name: "Morocco", flag: "Flag_of_Morocco.svg" },
  { name: "Mozambique", flag: "Flag_of_Mozambique.svg" },
  { name: "Myanmar", flag: "Flag_of_Myanmar.svg" },
  { name: "Namibia", flag: "Flag_of_Namibia.svg" },
  { name: "Nauru", flag: "Flag_of_Nauru.svg" },
  { name: "Nepal", flag: "Flag_of_Nepal.svg" },
  { name: "Netherlands", flag: "Flag_of_the_Netherlands.svg" },
  { name: "New Zealand", flag: "Flag_of_New_Zealand.svg" },
  { name: "Nicaragua", flag: "Flag_of_Nicaragua.svg" },
  { name: "Niger", flag: "Flag_of_Niger.svg" },
  { name: "Nigeria", flag: "Flag_of_Nigeria.svg" },
  { name: "Northern Cyprus", flag: "Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg" },
  { name: "North Korea", flag: "Flag_of_North_Korea.svg" },
  { name: "North Macedonia", flag: "Flag_of_North_Macedonia.svg" },
  { name: "Norway", flag: "Flag_of_Norway.svg" },
  { name: "Oman", flag: "Flag_of_Oman.svg" },
  { name: "Pakistan", flag: "Flag_of_Pakistan.svg" },
  { name: "Palau", flag: "Flag_of_Palau.svg" },
  { name: "Palestine", flag: "Flag_of_Palestine.svg" },
  { name: "Panama", flag: "Flag_of_Panama.svg" },
  { name: "Papua New Guinea", flag: "Flag_of_Papua_New_Guinea.svg" },
  { name: "Paraguay", flag: "Flag_of_Paraguay.svg" },
  { name: "Peru", flag: "Flag_of_Peru.svg" },
  { name: "Philippines", flag: "Flag_of_the_Philippines.svg" },
  { name: "Poland", flag: "Flag_of_Poland.svg" },
  { name: "Portugal", flag: "Flag_of_Portugal.svg" },
  { name: "Qatar", flag: "Flag_of_Qatar.svg" },
  { name: "Romania", flag: "Flag_of_Romania.svg" },
  { name: "Russia", flag: "Flag_of_Russia.svg" },
  { name: "Rwanda", flag: "Flag_of_Rwanda.svg" },
  { name: "Saint Kitts & Nevis", flag: "Flag_of_Saint_Kitts_and_Nevis.svg" },
  { name: "Saint Lucia", flag: "Flag_of_Saint_Lucia.svg" },
  { name: "Saint Vincent & the Grenadines", flag: "Flag_of_Saint_Vincent_and_the_Grenadines.svg" },
  { name: "Samoa", flag: "Flag_of_Samoa.svg" },
  { name: "San Marino", flag: "Flag_of_San_Marino.svg" },
  { name: "Sao Tome & Principe", flag: "Flag_of_São_Tomé_and_Príncipe.svg" },
  { name: "Saudi Arabia", flag: "Flag_of_Saudi_Arabia.svg" },
  { name: "Senegal", flag: "Flag_of_Senegal.svg" },
  { name: "Serbia", flag: "Flag_of_Serbia.svg" },
  { name: "Seychelles", flag: "Flag_of_Seychelles.svg" },
  { name: "Sierra Leone", flag: "Flag_of_Sierra_Leone.svg" },
  { name: "Singapore", flag: "Flag_of_Singapore.svg" },
  { name: "Slovakia", flag: "Flag_of_Slovakia.svg" },
  { name: "Slovenia", flag: "Flag_of_Slovenia.svg" },
  { name: "Solomon Islands", flag: "Flag_of_the_Solomon_Islands.svg" },
  { name: "Somalia", flag: "Flag_of_Somalia.svg" },
  { name: "Somaliland", flag: "Flag_of_Somaliland.svg" },
  { name: "South Africa", flag: "Flag_of_South_Africa.svg" },
  { name: "South Korea", flag: "Flag_of_South_Korea.svg" },
  { name: "South Ossetia", flag: "Flag_of_South_Ossetia.svg" },
  { name: "South Sudan", flag: "Flag_of_South_Sudan.svg" },
  { name: "Spain", flag: "Flag_of_Spain.svg" },
  { name: "Sri Lanka", flag: "Flag_of_Sri_Lanka.svg" },
  { name: "Sudan", flag: "Flag_of_Sudan.svg" },
  { name: "Suriname", flag: "Flag_of_Suriname.svg" },
  { name: "Sweden", flag: "Flag_of_Sweden.svg" },
  { name: "Switzerland", flag: "Flag_of_Switzerland.svg" },
  { name: "Syria", flag: "Flag_of_Syria.svg" },
  { name: "Taiwan", flag: "Flag_of_the_Republic_of_China.svg" },
  { name: "Tajikistan", flag: "Flag_of_Tajikistan.svg" },
  { name: "Tanzania", flag: "Flag_of_Tanzania.svg" },
  { name: "Thailand", flag: "Flag_of_Thailand.svg" },
  { name: "Timor-Leste", flag: "Flag_of_East_Timor.svg" },
  { name: "Togo", flag: "Flag_of_Togo.svg" },
  { name: "Tonga", flag: "Flag_of_Tonga.svg" },
  { name: "Transnistria", flag: "Flag_of_Transnistria_(state).svg" },
  { name: "Trinidad & Tobago", flag: "Flag_of_Trinidad_and_Tobago.svg" },
  { name: "Tunisia", flag: "Flag_of_Tunisia.svg" },
  { name: "Türkiye", flag: "Flag_of_Turkey.svg" },
  { name: "Turkmenistan", flag: "Flag_of_Turkmenistan.svg" },
  { name: "Tuvalu", flag: "Flag_of_Tuvalu.svg" },
  { name: "Uganda", flag: "Flag_of_Uganda.svg" },
  { name: "Ukraine", flag: "Flag_of_Ukraine.svg" },
  { name: "United Arab Emirates", flag: "Flag_of_the_United_Arab_Emirates.svg" },
  { name: "United Kingdom", flag: "Flag_of_the_United_Kingdom.svg" },
  { name: "United States", flag: "Flag_of_the_United_States.svg" },
  { name: "Uruguay", flag: "Flag_of_Uruguay.svg" },
  { name: "Uzbekistan", flag: "Flag_of_Uzbekistan.svg" },
  { name: "Vanuatu", flag: "Flag_of_Vanuatu.svg" },
  { name: "Vatican City", flag: "Flag_of_the_Vatican_City.svg" },
  { name: "Venezuela", flag: "Flag_of_Venezuela.svg" },
  { name: "Vietnam", flag: "Flag_of_Vietnam.svg" },
  { name: "Western Sahara", flag: "Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg" },
  { name: "Yemen", flag: "Flag_of_Yemen.svg" },
  { name: "Zambia", flag: "Flag_of_Zambia.svg" },
  { name: "Zimbabwe", flag: "Flag_of_Zimbabwe.svg" },
  // Dependent territories and overseas collectivities
  { name: "Åland Islands", flag: "Flag_of_Åland.svg" },
  { name: "American Samoa", flag: "Flag_of_American_Samoa.svg" },
  { name: "Anguilla", flag: "Flag_of_Anguilla.svg" },
  { name: "Aruba", flag: "Flag_of_Aruba.svg" },
  { name: "Ascension Island", flag: "Flag_of_Ascension_Island.svg" },
  { name: "Bermuda", flag: "Flag_of_Bermuda.svg" },
  { name: "Bonaire", flag: "Flag_of_Bonaire.svg" },
  { name: "British Virgin Islands", flag: "Flag_of_the_British_Virgin_Islands.svg" },
  { name: "Cayman Islands", flag: "Flag_of_the_Cayman_Islands.svg" },
  { name: "Christmas Island", flag: "Flag_of_Christmas_Island.svg" },
  { name: "Cocos Islands", flag: "Flag_of_the_Cocos_(Keeling)_Islands.svg" },
  { name: "Cook Islands", flag: "Flag_of_the_Cook_Islands.svg" },
  { name: "Curaçao", flag: "Flag_of_Curaçao.svg" },
  { name: "Falkland Islands", flag: "Flag_of_the_Falkland_Islands.svg" },
  { name: "Faroe Islands", flag: "Flag_of_the_Faroe_Islands.svg" },
  { name: "French Guiana", flag: "Flag_of_French_Guiana.svg" },
  { name: "French Polynesia", flag: "Flag_of_French_Polynesia.svg" },
  { name: "French Southern & Antarctic Lands", flag: "Flag_of_the_French_Southern_and_Antarctic_Lands.svg" },
  { name: "Gibraltar", flag: "Flag_of_Gibraltar.svg" },
  { name: "Greenland", flag: "Flag_of_Greenland.svg" },
  { name: "Guadeloupe", flag: "Flag_of_Guadeloupe_(local).svg" },
  { name: "Guam", flag: "Flag_of_Guam.svg" },
  { name: "Guernsey", flag: "Flag_of_Guernsey.svg" },
  { name: "Hong Kong", flag: "Flag_of_Hong_Kong.svg" },
  { name: "Isle of Man", flag: "Flag_of_the_Isle_of_Man.svg" },
  { name: "Jersey", flag: "Flag_of_Jersey.svg" },
  { name: "Macau", flag: "Flag_of_Macau.svg" },
  { name: "Martinique", flag: "Flag_of_Martinique.svg" },
  { name: "Mayotte", flag: "Flag_of_Mayotte.svg" },
  { name: "Montserrat", flag: "Flag_of_Montserrat.svg" },
  { name: "New Caledonia", flag: "Flag_of_FLNKS.svg" },
  { name: "Niue", flag: "Flag_of_Niue.svg" },
  { name: "Norfolk Island", flag: "Flag_of_Norfolk_Island.svg" },
  { name: "Northern Mariana Islands", flag: "Flag_of_the_Northern_Mariana_Islands.svg" },
  { name: "Pitcairn Islands", flag: "Flag_of_the_Pitcairn_Islands.svg" },
  { name: "Puerto Rico", flag: "Flag_of_Puerto_Rico.svg" },
  { name: "Réunion", flag: "Proposed_flag_of_Réunion_(VAR).svg" },
  { name: "Saba", flag: "Flag_of_Saba.svg" },
  { name: "Saint Barthélemy", flag: "Flag_of_Saint_Barthélemy.svg" },
  { name: "Saint Helena", flag: "Flag_of_Saint_Helena.svg" },
  { name: "Saint Pierre & Miquelon", flag: "Flag_of_Saint-Pierre_and_Miquelon.svg" },
  { name: "Sint Eustatius", flag: "Flag_of_Sint_Eustatius.svg" },
  { name: "Sint Maarten", flag: "Flag_of_Sint_Maarten.svg" },
  { name: "South Georgia & the South Sandwich Islands", flag: "Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg" },
  { name: "Svalbard", flag: "Flag_of_Svalbard.svg" },
  { name: "Tokelau", flag: "Flag_of_Tokelau.svg" },
  { name: "Tristan da Cunha", flag: "Flag_of_Tristan_da_Cunha.svg" },
  { name: "Turks & Caicos", flag: "Flag_of_the_Turks_and_Caicos_Islands.svg" },
  { name: "U.S. Virgin Islands", flag: "Flag_of_the_United_States_Virgin_Islands.svg" },
  { name: "Wallis & Futuna", flag: "Flag_of_Wallis_and_Futuna.svg" }
];

const countryIndexMap = new Map(
  countries.map((country, index) => [country.name, index])
);

const flagImage = document.getElementById("flag-image");
const flagWrapper = document.querySelector(".flag-wrapper");
const optionsGrid = document.getElementById("options-grid");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const deckCount = document.getElementById("deck-count");
const galleryGrid = document.getElementById("flag-gallery");
const searchInput = document.getElementById("search");
const missionMeterFill = document.getElementById("mission-meter-fill");
const missionXpValue = document.getElementById("mission-xp");
const missionStreakValue = document.getElementById("mission-streak");
const missionProgressValue = document.getElementById("mission-progress");

let currentCountry = null;
let answered = 0;
let streak = 0;
let xp = 0;
let questionResolved = false;
let deckComplete = false;
let autoAdvanceTimer = null;

const totalFlags = countries.length;
let studyQueue = [];
let reviewQueue = [];
const reviewSet = new Set();
const mastered = new Set();

let audioContext;

const XP_REWARD = 10;
const AUTO_ADVANCE_DELAY = 320;
const PROGRESS_COOKIE = "flexflags_progress";
const COOKIE_TTL_DAYS = 30;
deckCount.textContent = totalFlags.toString();

const galleryCards = [];

flagImage.addEventListener("load", () => {
  requestAnimationFrame(() => {
    flagImage.classList.add("is-loaded");
    if (flagWrapper) {
      flagWrapper.classList.remove("is-transitioning");
    }
  });
});

function setCookie(name, value, days) {
  if (typeof document === "undefined") return;
  try {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/; SameSite=Lax`;
  } catch (error) {
    console.warn("Unable to set cookie", error);
  }
}

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const pairs = document.cookie ? document.cookie.split(";") : [];
  for (const pair of pairs) {
    const [rawKey, ...rest] = pair.trim().split("=");
    if (rawKey === name) {
      return decodeURIComponent(rest.join("="));
    }
  }
  return null;
}

function clearCookie(name) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=${new Date(0).toUTCString()}; path=/; SameSite=Lax`;
}

function writeLocalSnapshot(value) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    window.localStorage.setItem(PROGRESS_COOKIE, value);
  } catch (error) {
    // Ignore storage failures (privacy mode, etc.)
  }
}

function readLocalSnapshot() {
  if (typeof window === "undefined" || !window.localStorage) return null;
  try {
    return window.localStorage.getItem(PROGRESS_COOKIE);
  } catch (error) {
    return null;
  }
}

function clearLocalSnapshot() {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    window.localStorage.removeItem(PROGRESS_COOKIE);
  } catch (error) {
    // Ignore
  }
}

function persistProgress() {
  const payload = {
    xp,
    streak,
    mastered: [...mastered]
      .map((name) => countryIndexMap.get(name))
      .filter((index) => typeof index === "number"),
  };
  const serialized = JSON.stringify(payload);
  setCookie(PROGRESS_COOKIE, serialized, COOKIE_TTL_DAYS);
  writeLocalSnapshot(serialized);
}

function loadProgressSnapshot() {
  const raw = getCookie(PROGRESS_COOKIE) || readLocalSnapshot();
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    const parsedXp = Number(parsed.xp);
    const parsedStreak = Number(parsed.streak);
    xp = Number.isFinite(parsedXp) ? parsedXp : 0;
    streak = Number.isFinite(parsedStreak) ? parsedStreak : 0;
    if (Array.isArray(parsed.mastered)) {
      parsed.mastered.forEach((index) => {
        if (typeof index === "number" && countries[index]) {
          mastered.add(countries[index].name);
        }
      });
      answered = mastered.size;
    }
  } catch (error) {
    console.warn("Unable to read stored progress", error);
    clearCookie(PROGRESS_COOKIE);
    clearLocalSnapshot();
  }
}

function getAudioContext() {
  if (!window.AudioContext && !window.webkitAudioContext) return null;
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
}

function playFeedbackSound(type) {
  const ctx = getAudioContext();
  if (!ctx) return;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "sine";
  const isCorrect = type === "correct";
  oscillator.frequency.value = isCorrect ? 880 : 220;
  gain.gain.value = 0.0001;
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  const duration = isCorrect ? 0.25 : 0.35;
  gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime + duration
  );
  oscillator.start();
  oscillator.stop(ctx.currentTime + duration);
}

function buildStudyQueue() {
  const remaining = countries.filter((country) => !mastered.has(country.name));
  studyQueue = shuffle(remaining);
}

function triggerFlagTransition() {
  if (!flagWrapper) return;
  flagWrapper.classList.remove("is-transitioning");
  // Force reflow so the animation restarts consistently
  void flagWrapper.offsetWidth;
  flagWrapper.classList.add("is-transitioning");
}

function queueForReview(country) {
  if (reviewSet.has(country.name)) return;
  reviewQueue.push(country);
  reviewSet.add(country.name);
}

function removeFromReview(name) {
  if (!reviewSet.has(name)) return;
  reviewQueue = reviewQueue.filter((country) => country.name !== name);
  reviewSet.delete(name);
}

function markMastered(name) {
  if (!mastered.has(name)) {
    mastered.add(name);
    answered = mastered.size;
  }
  removeFromReview(name);
}

function drawNextCountry() {
  if (studyQueue.length > 0) {
    return studyQueue.shift();
  }
  if (reviewQueue.length > 0) {
    const next = reviewQueue.shift();
    reviewSet.delete(next.name);
    return next;
  }
  return null;
}

function encodeFlag(flagFile, width = 320) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    flagFile
  )}?width=${width}`;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickOptions(answer, amount = 4) {
  const set = new Set([answer]);
  while (set.size < amount) {
    const sample = countries[Math.floor(Math.random() * countries.length)].name;
    set.add(sample);
  }
  return shuffle([...set]);
}

function renderOptions(list) {
  optionsGrid.innerHTML = "";
  list.forEach((name) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = name;
    button.addEventListener("click", () => handleAnswer(name, button));
    optionsGrid.appendChild(button);
  });
}

function handleDeckCompletion() {
  deckComplete = true;
  currentCountry = null;
  feedbackEl.textContent =
    "Mission accomplished! Tap restart to run the deck again.";
  optionsGrid.innerHTML = "";
  flagImage.removeAttribute("src");
  flagImage.alt = "Deck complete";
  flagImage.classList.remove("is-loaded");
  if (flagWrapper) {
    flagWrapper.classList.remove("is-transitioning");
  }
  nextBtn.disabled = false;
  nextBtn.textContent = "Restart mission";
  nextBtn.classList.remove("is-hidden");
  nextBtn.removeAttribute("aria-hidden");
}

function setQuestion() {
  clearTimeout(autoAdvanceTimer);
  const selection = drawNextCountry();
  if (!selection) {
    handleDeckCompletion();
    return;
  }
  deckComplete = false;
  currentCountry = selection;
  questionResolved = false;
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  nextBtn.textContent = "Next flag";
  nextBtn.classList.add("is-hidden");
  nextBtn.setAttribute("aria-hidden", "true");
  flagImage.classList.remove("is-loaded");
  triggerFlagTransition();
  flagImage.src = encodeFlag(selection.flag, 512);
  flagImage.alt = `Flag of ${selection.name}`;
  renderOptions(pickOptions(selection.name));
}

function advanceToNextFlag() {
  if (deckComplete) return;
  if (!questionResolved) return;
  setQuestion();
}

function resetMission() {
  mastered.clear();
  answered = 0;
  xp = 0;
  streak = 0;
  studyQueue = [];
  reviewQueue = [];
  reviewSet.clear();
  deckComplete = false;
  buildStudyQueue();
  updateStatus();
  setQuestion();
}

function handleAnswer(choice, button) {
  if (questionResolved) {
    if (button && button.dataset.action === "continue") {
      button.dataset.action = "";
      button.disabled = true;
      button.classList.remove("reveal-next");
      advanceToNextFlag();
    }
    return;
  }

  questionResolved = true;
  const correct = choice === currentCountry.name;

  let correctButton = null;
  optionsGrid.querySelectorAll("button").forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === currentCountry.name) {
      btn.classList.add("correct");
      correctButton = btn;
    }
  });

  if (!correct) {
    button.classList.add("wrong");
    queueForReview(currentCountry);
    playFeedbackSound("wrong");
    if (correctButton) {
      correctButton.disabled = false;
      correctButton.dataset.action = "continue";
      correctButton.classList.add("reveal-next");
      correctButton.setAttribute(
        "aria-label",
        `${currentCountry.name}. Tap to continue`
      );
      correctButton.focus({ preventScroll: true });
    }
  }

  if (correct) {
    streak += 1;
    xp += XP_REWARD;
    markMastered(currentCountry.name);
    feedbackEl.textContent = `Out of this world! ${currentCountry.name} it is.`;
    playFeedbackSound("correct");
  } else {
    streak = 0;
    feedbackEl.textContent = `Close! That was ${currentCountry.name}.`;
  }

  updateStatus();
  nextBtn.disabled = true;
  if (correct) {
    autoAdvanceTimer = setTimeout(() => {
      advanceToNextFlag();
    }, AUTO_ADVANCE_DELAY);
  }
}

function updateStatus() {
  const progress = Math.min(answered / totalFlags, 1);
  if (missionXpValue) {
    missionXpValue.textContent = `${xp} XP`;
  }
  if (missionStreakValue) {
    missionStreakValue.textContent = `${streak} 🔥 streak`;
  }
  if (missionProgressValue) {
    missionProgressValue.textContent = `${answered} / ${totalFlags}`;
  }
  if (missionMeterFill) {
    missionMeterFill.style.width = `${progress * 100}%`;
  }
  persistProgress();
}

nextBtn.addEventListener("click", () => {
  if (deckComplete) {
    resetMission();
    return;
  }
  advanceToNextFlag();
});

function initGallery() {
  const fragment = document.createDocumentFragment();
  countries.forEach((country) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.dataset.name = country.name.toLowerCase();

    const preview = document.createElement("img");
    preview.src = encodeFlag(country.flag, 160);
    preview.alt = `Flag of ${country.name}`;

    const label = document.createElement("p");
    label.textContent = country.name;

    card.append(preview, label);
    fragment.appendChild(card);
    galleryCards.push(card);
  });
  galleryGrid.appendChild(fragment);
}

searchInput.addEventListener("input", (event) => {
  const value = event.target.value.trim().toLowerCase();
  galleryCards.forEach((card) => {
    const match = card.dataset.name.includes(value);
    card.style.display = match ? "flex" : "none";
  });
});

loadProgressSnapshot();
initGallery();
buildStudyQueue();
updateStatus();
setQuestion();
