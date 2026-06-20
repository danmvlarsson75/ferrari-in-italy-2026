const logistics = [
  {
    title: "Arrival Flight",
    date: "21 June 2026",
    detail: "Ryanair FR 7198, PMI to FCO",
    meta: "12:40 to 14:25 GMT+2, nonstop",
    note: "Booking reference and passenger details are intentionally kept private.",
    status: "Booked",
    statusType: "set",
  },
  {
    title: "Ferrari Pickup",
    date: "22 June 2026",
    detail: "Rocco Forte Hotel De La Ville, Rome",
    meta: "Monday morning pickup confirmed",
    note:
      "Use the Rome overnight to reset after the flight, then collect the Ferrari at Rocco Forte Hotel De La Ville before driving to Montepulciano. Parking there is already arranged; confirm insurance hold, luggage fit, fuel policy, and ZTL guidance with the provider.",
    status: "Booked",
    statusType: "set",
  },
  {
    title: "Ferry Departure",
    date: "27 June 2026",
    detail: "Corsica Ferries, Toulon to Alc\u00fadia",
    meta: "Depart 21:00 GMT+2, arrive 09:45 GMT+2 on 28 June",
    note:
      "Toulon port: 2 Av. de l'Infanterie de Marine, 83000 Toulon. Booking reference is intentionally kept private.",
    status: "Booked",
    statusType: "set",
  },
];

const hotels = [
  {
    city: "Rome",
    name: "Condotti Boutique Hotel",
    dates: "21-22 June 2026",
    address: "Spagna, Rome",
    parking:
      "Confirm private garage or valet handling and the cleanest exit route toward Tuscany before Monday morning pickup.",
    status: "Booked",
    statusType: "set",
  },
  {
    city: "Montepulciano",
    name: "Booked hotel",
    dates: "22-23 June 2026",
    address: "Montepulciano",
    parking:
      "Parking guidance received from the property. Confirm the exact spot on arrival.",
    status: "Booked",
    statusType: "set",
  },
  {
    city: "Florence",
    name: "Booked hotel",
    dates: "23-24 June 2026",
    address: "Florence",
    parking:
      "Valet or garage parking listed. Confirm the ZTL-safe arrival route with reception.",
    status: "Booked",
    statusType: "set",
  },
  {
    city: "Bologna",
    name: "Booked hotel",
    dates: "24-25 June 2026",
    address: "Bologna",
    parking:
      "Parking listed. Confirm the easiest Ferrari-safe space on arrival.",
    status: "Booked",
    statusType: "set",
  },
  {
    city: "Alba",
    name: "Booked hotel",
    dates: "25-26 June 2026",
    address: "Alba",
    parking: "Protected parking is arranged with the hotel.",
    status: "Booked",
    statusType: "set",
  },
  {
    city: "Alassio",
    name: "Booked hotel",
    dates: "26-27 June 2026",
    address: "Alassio",
    parking: "Reserved parking is arranged with the hotel.",
    status: "Booked",
    statusType: "set",
  },
];

const wineExperiences = [
  {
    place: "Montepulciano",
    title: "De' Ricci - Visit the Cathedral",
    date: "22 June 2026",
    bestSlot: "Confirmed for 17:00. Arrive 10 minutes early, around 16:50.",
    why:
      "The most theatrical fit for the trip: a guided visit through historic underground cellars, then a choice of 3- or 6-wine tasting from Vino Nobile through their SorAldo and Supertuscan bottlings.",
    details:
      "Historic cellar at Via Ricci 13. Choose the 3- or 6-wine tasting on arrival, at 20 or 30 EUR per person. The tour and tasting take about 75 minutes; cellar temperature is around 16-20 C, so bring a light layer.",
    plan:
      "Drive Rome to Montepulciano, park at the hotel, lunch locally, then walk to De' Ricci. Do not drive to the winery: it is in the historic-center ZTL.",
    link: "https://www.cantinadericci.it/en/esperienza/la-selezione/",
    backup: "Booked and confirmed. No backup tasting needed.",
  },
  {
    place: "Barolo",
    title: "Marchesi di Barolo",
    date: "25 June 2026",
    bestSlot: "Booked for the Barolo afternoon after lunch.",
    why:
      "A classic Barolo cellar right in the village where Barolo was born, and now the confirmed tasting anchor for the Piedmont day.",
    details:
      "Historic cellars in Barolo with a confirmed booking. Plan lunch in the village first, then head into the tasting without needing extra options.",
    plan:
      "Drive Bologna to Barolo, lunch in the village, then do the confirmed Marchesi di Barolo tasting before heading back to Alba for dinner.",
    link: "https://marchesibarolo.com/en/visits/",
    backup: "Booked and confirmed. No alternate tasting option needed.",
  },
];

const itinerary = [
  {
    date: "21 June 2026",
    dayLabel: "Sunday",
    title: "Rome Arrival",
    start: "Palma de Mallorca",
    end: "Rome",
    overnight: "Rome",
    route: "Flight in, hotel check-in, first Roman night.",
    driveTime: "Local transfers only",
    mood: "Start soft, keep the car calm, let Rome do the theatre.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Colosseum_at_sunset-Rome.JPG/1280px-Colosseum_at_sunset-Rome.JPG",
        alt: "The Colosseum in Rome at sunset",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Fontaine_Trevi_-_Rome.jpg/1280px-Fontaine_Trevi_-_Rome.jpg",
        alt: "Trevi Fountain in Rome",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/The_Pantheon_at_dusk.jpg/1280px-The_Pantheon_at_dusk.jpg",
        alt: "The Pantheon in Rome at dusk",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Rome_Colosseum_001.jpg/1280px-Rome_Colosseum_001.jpg",
        alt: "Colosseum arches in Rome",
      },
    ],
    highlights: ["Rome at golden hour", "Condotti check-in", "First aperitivo"],
    foodWine: ["Carbonara", "Amatriciana", "Frascati"],
    lunch: "Flexible around the 14:25 arrival.",
    dinner: "Roman trattoria near the hotel, no late ZTL driving.",
    parking:
      "Condotti Boutique Hotel is booked. Monday morning Ferrari pickup is at Rocco Forte Hotel De La Ville, where parking is already arranged.",
    mapLabel: "Rome arrival",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Fiumicino+Airport,+Italy&destination=Rome,+Italy&travelmode=driving",
  },
  {
    date: "22 June 2026",
    dayLabel: "Monday",
    title: "Into Val d'Orcia",
    start: "Rome",
    end: "Montepulciano",
    overnight: "Montepulciano",
    route: "Morning Ferrari pickup in Rome, then Montepulciano via fast autostrada and Tuscan roads.",
    driveTime: "Approx. 2 h 30 min before scenic stops",
    mood: "The first proper Ferrari day: cypress roads, hill towns, long views.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Val_D_Orcia_In_Autumn_%28179351679%29.jpeg/1280px-Val_D_Orcia_In_Autumn_%28179351679%29.jpeg",
        alt: "Val d'Orcia landscape in Tuscany",
      },
      {
        src: "https://images.pexels.com/photos/33242893/pexels-photo-33242893.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Cypress-lined road in Tuscany",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Panorama_da_Pienza.jpg/1280px-Panorama_da_Pienza.jpg",
        alt: "Panorama from Pienza",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Montepulciano_Toscana_Italy_City_Landscape.jpg/1280px-Montepulciano_Toscana_Italy_City_Landscape.jpg",
        alt: "Montepulciano city landscape",
      },
    ],
    highlights: ["Val d'Orcia edges", "Montepulciano evening", "Hill-town roads"],
    foodWine: ["Vino Nobile", "Pici", "Pecorino"],
    lunch: "Pick up the Ferrari in Rome, finish the drive, park/check in, then have lunch in Montepulciano.",
    dinner: "Keep dinner close to the parked car after the De' Ricci tasting.",
    parking:
      "Parking guidance received from the property. Confirm the exact spot on arrival.",
    mapLabel: "Rome to Montepulciano",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Rome,+Italy&destination=Montepulciano,+Italy&travelmode=driving",
  },
  {
    date: "23 June 2026",
    dayLabel: "Tuesday",
    title: "Chianti to Florence",
    start: "Montepulciano",
    end: "Florence",
    overnight: "Florence",
    route: "Montepulciano to Florence through Siena or Chianti if the day allows.",
    driveTime: "Approx. 2 h 15 min direct",
    mood: "Vineyards in the morning, Ponte Vecchio light in the evening.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ponte_Vecchio_Sunset%2C_Florence%2C_Italy.jpg/1280px-Ponte_Vecchio_Sunset%2C_Florence%2C_Italy.jpg",
        alt: "Ponte Vecchio in Florence at sunset",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Florence_Italy_Ponte-Vecchio-01.jpg",
        alt: "Ponte Vecchio from Piazzale Michelangelo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Florence_Duomo_from_Michelangelo_hill.jpg",
        alt: "Florence Duomo from Piazzale Michelangelo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Florence_panorama_as_seen_from_The_Piazza_Michelangelo.jpg/1280px-Florence_panorama_as_seen_from_The_Piazza_Michelangelo.jpg",
        alt: "Florence panorama from Piazzale Michelangelo",
      },
    ],
    highlights: ["Chianti roads", "Florence on foot", "Arno sunset"],
    foodWine: ["Chianti Classico", "Bistecca", "Olive oil"],
    lunch: "Finish the drive, hand over the car to valet, then lunch in Florence.",
    dinner: "Walkable Florence dinner after the car is parked.",
    parking:
      "Valet or garage parking listed. Confirm the ZTL-safe approach with reception before entering Florence.",
    mapLabel: "Montepulciano to Florence",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Montepulciano,+Italy&destination=Florence,+Italy&waypoints=Siena,+Italy%7CGreve+in+Chianti,+Italy&travelmode=driving",
  },
  {
    date: "24 June 2026",
    dayLabel: "Wednesday",
    title: "Maranello and Bologna",
    start: "Florence",
    end: "Bologna",
    overnight: "Bologna",
    route: "Florence to Museo Ferrari Maranello, then onward to Bologna.",
    driveTime: "Approx. 2 h 45 min plus museum time",
    mood: "The pilgrimage day: Ferrari history, Emilia food, Bologna porticoes.",
    images: [
      {
        src: "https://blackmongoose.it/wp-content/uploads/2025/08/Ferrari_04-scaled.jpg?x45558",
        alt: "Ferrari Supercars exhibition cars on display",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Piazza_Maggiore_--_Bologna_--.jpg/1280px-Piazza_Maggiore_--_Bologna_--.jpg",
        alt: "Piazza Maggiore in Bologna",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bologna_Arcades._Italy.jpg/1280px-Bologna_Arcades._Italy.jpg",
        alt: "Bologna porticoes and arcades",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Asinelli_Tower_and_Garisenda_Tower_Bologna_Italy.jpg/1280px-Asinelli_Tower_and_Garisenda_Tower_Bologna_Italy.jpg",
        alt: "Asinelli and Garisenda towers in Bologna",
      },
    ],
    highlights: ["Museo Ferrari Maranello", "Emilia-Romagna", "Bologna night"],
    foodWine: ["Tortellini", "Tagliatelle al ragu", "Lambrusco"],
    lunch: "Finish the Maranello/Bologna driving leg, park, then lunch in Bologna.",
    dinner: "Classic Bologna dinner, then walk under the porticoes.",
    parking: "Parking listed. Confirm the easiest Ferrari-safe space on arrival.",
    mapLabel: "Florence to Maranello to Bologna",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Florence,+Italy&destination=Bologna,+Italy&waypoints=Museo+Ferrari,+Maranello,+Italy&travelmode=driving",
  },
  {
    date: "25 June 2026",
    dayLabel: "Thursday",
    title: "Langhe and Barolo",
    start: "Bologna",
    end: "Barolo and Alba",
    overnight: "Alba",
    route: "Bologna to Barolo for lunch and the afternoon, then Alba for dinner.",
    driveTime: "Approx. 3 h 30-45 min to Barolo",
    mood: "Quiet vineyard roads, cellar doors, hazelnuts, Nebbiolo country.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Barolo_-_view_from_La_Morra_in_Piemonte%2C_Italy.jpg/1280px-Barolo_-_view_from_La_Morra_in_Piemonte%2C_Italy.jpg",
        alt: "Barolo vineyards viewed from La Morra",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/View_from_La_Morra_over_Barolo_region%2C_Piemonte%2C_Italy.jpg/1280px-View_from_La_Morra_over_Barolo_region%2C_Piemonte%2C_Italy.jpg",
        alt: "View from La Morra over Barolo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Vineyards_in_Langhe.jpg/1280px-Vineyards_in_Langhe.jpg",
        alt: "Vineyards in Alba",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Barolo_Village_%28163795471%29.jpeg/1280px-Barolo_Village_%28163795471%29.jpeg",
        alt: "Barolo village in Piedmont",
      },
    ],
    highlights: ["Langhe hills", "Barolo loop", "Alba old town"],
    foodWine: ["Barolo", "Barbaresco", "Tajarin", "Hazelnuts"],
    lunch: "Drive first, then lunch in Barolo before the afternoon tasting.",
    dinner: "Return to Alba for dinner after the Barolo afternoon.",
    parking: "Protected parking is arranged with the Alba hotel.",
    mapLabel: "Bologna to Barolo to Alba",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Bologna,+Italy&destination=Alba,+Province+of+Cuneo,+Italy&waypoints=Barolo,+Italy&travelmode=driving",
  },
  {
    date: "26 June 2026",
    dayLabel: "Friday",
    title: "Liguria Finale",
    start: "Alba",
    end: "Alassio",
    overnight: "Alassio",
    route: "Alba and Barolo to Alassio, vineyards giving way to the Ligurian sea.",
    driveTime: "Approx. 2 h 15 min direct",
    mood: "Sea air, aperitivo, one last Italian evening before the ferry day.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Alassio_Beach.jpg/1280px-Alassio_Beach.jpg",
        alt: "Alassio beach in Liguria",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Alassio-P1010718.JPG",
        alt: "Alassio seafront",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Isola_Gallinara-regione_Monti.jpg",
        alt: "Gallinara island near Alassio",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/22/Umbrellas_on_the_beach_of_Alassio_Liguria%2C_in_front_of_the_island_of_Gallinara_%2840440430820%29.jpg",
        alt: "Beach umbrellas in Alassio facing Gallinara island",
      },
    ],
    highlights: ["Ligurian coast", "Alassio evening", "Seafood dinner"],
    foodWine: ["Seafood", "Vermentino", "Pesto", "Focaccia"],
    lunch: "Finish the drive to Alassio, park, then lunch by the sea.",
    dinner: "Seafood dinner within walking distance of the hotel.",
    parking: "Reserved parking is arranged with the Alassio hotel.",
    mapLabel: "Alba to Alassio",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Alba,+Province+of+Cuneo,+Italy&destination=Alassio,+Italy&travelmode=driving",
  },
  {
    date: "27 June 2026",
    dayLabel: "Saturday",
    title: "Transit to the Ferry",
    start: "Alassio",
    end: "Toulon",
    overnight: "No overnight",
    route: "Alassio to Toulon ferry port. France is transit only.",
    driveTime: "Approx. 3 h 45 min direct, plus ferry buffer",
    mood: "A practical final run: coastal miles, no detours, arrive early.",
    images: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Corsica_ferries_toulon.jpg/1280px-Corsica_ferries_toulon.jpg",
        alt: "Corsica Ferries ship in Toulon",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Le_port_de_Toulon_2021.jpg/1280px-Le_port_de_Toulon_2021.jpg",
        alt: "Port of Toulon",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Toulon_2019_4.jpg/1280px-Toulon_2019_4.jpg",
        alt: "Toulon harbor",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ajaccio_Ferry_Toulon_-_panoramio.jpg/1280px-Ajaccio_Ferry_Toulon_-_panoramio.jpg",
        alt: "Ferry at Toulon",
      },
    ],
    highlights: ["Final driving leg", "Toulon port", "21:00 ferry"],
    foodWine: ["Simple lunch", "Hydration", "Ferry boarding"],
    lunch: "Eat before the ferry schedule starts to tighten.",
    dinner: "Ferry plan unless check-in timing leaves room.",
    parking:
      "Keep the Ferrari supervised at stops and follow vehicle check-in lanes.",
    mapLabel: "Alassio to Toulon ferry",
    mapUrl:
      "https://www.google.com/maps/dir/?api=1&origin=Alassio,+Italy&destination=Port+de+Toulon,+France&travelmode=driving",
  },
];

const bookingNotes = [
  {
    title: "Rome overnight",
    body:
      "Condotti Boutique Hotel is confirmed for 21-22 June 2026. Ferrari pickup is Monday morning at Rocco Forte Hotel De La Ville, where parking is already arranged.",
  },
  {
    title: "Ferry operations",
    body:
      "Needs confirmation: Corsica Ferries check-in cutoff, vehicle boarding lane, cabin/seat details, and vehicle documents.",
  },
  {
    title: "Restaurant rhythm",
    body:
      "No wine-focused lunch stops while driving. Finish the driving leg, park the Ferrari, then lunch and taste locally.",
  },
  {
    title: "Public version",
    body:
      "Booking references, passenger names, PINs, personal contact details and hotel addresses are intentionally not shown.",
  },
];

const imageCredits = [
  ["Rome", "Colosseum, Trevi Fountain, Pantheon and Colosseum details", "Wikimedia Commons contributors", "CC/CC0"],
  ["Tuscany", "Val d'Orcia, Pienza, Montepulciano and cypress road scenes", "Wikimedia Commons and Pexels contributors", "CC/CC0/Pexels"],
  ["Florence", "Ponte Vecchio, Duomo and Piazzale Michelangelo views", "Wikimedia Commons contributors", "CC"],
  ["Maranello / Bologna", "Ferrari Supercars exhibition plus Bologna city scenes", "BlackMongoose / Alberto Feltrin and Wikimedia Commons contributors", "Source / CC"],
  ["Barolo", "La Morra, Alba, Barolo village and Langhe vineyard views", "Wikimedia Commons contributors", "CC/CC0"],
  ["Alassio", "Alassio beach, Gallinara island and seafront scenes", "Wikimedia Commons contributors", "CC"],
  ["Toulon", "Corsica Ferries and Toulon port scenes", "Wikimedia Commons contributors", "CC/Public domain"],
];

const confirmationText = "Needs confirmation";

function isNeedsConfirmation(value = "") {
  return value.toLowerCase().includes("needs confirmation");
}

function renderValue(value = "") {
  if (!isNeedsConfirmation(value)) {
    return value;
  }

  return value.replace(
    confirmationText,
    `<span class="needs-confirmation">${confirmationText}</span>`,
  );
}

function renderStoryMedia(day) {
  const images = day.images || [];
  const layoutClass =
    images.length === 1 ? "story-card__media--single" : "story-card__media--mosaic";

  return `
    <div class="story-card__media ${layoutClass}">
      ${images
        .map(
          (image) => `
            <img class="story-card__image" src="${image.src}" alt="${image.alt}" loading="eager" decoding="async" />
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTimeline() {
  const container = document.querySelector("#timeline");

  container.innerHTML = itinerary
    .map((day) => {
      const [dateNumber, month] = day.date.split(" ");

      return `
        <article class="story-card">
          ${renderStoryMedia(day)}
          <div class="story-card__content">
            <div class="story-card__kicker">
              <span>${dateNumber} ${month}</span>
              <span>${day.dayLabel}</span>
            </div>
            <h3>${day.title}</h3>
            <p class="story-card__mood">${day.mood}</p>
            <p class="route-line">${day.start} to ${day.end} · ${day.driveTime}</p>
            <ul class="focus-list">
              ${day.highlights.map((item) => `<li class="tag">${item}</li>`).join("")}
            </ul>
            <div class="story-card__details">
              <div>
                <strong>Food and Wine</strong>
                <p>${day.foodWine.join(" · ")}</p>
              </div>
              <div>
                <strong>Lunch / Dinner</strong>
                <p>${day.lunch} ${day.dinner}</p>
              </div>
              <div>
                <strong>Ferrari Note</strong>
                <p>${day.parking}</p>
              </div>
            </div>
            <a class="link-button" href="${day.mapUrl}" target="_blank" rel="noreferrer">Open ${day.mapLabel}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderWineExperiences() {
  const container = document.querySelector("#wine-experiences");

  container.innerHTML = wineExperiences
    .map(
      (experience) => `
        <article class="wine-card">
          <p class="eyebrow">${experience.place} · ${experience.date}</p>
          <h3>${experience.title}</h3>
          <p class="story-card__mood">${experience.bestSlot}</p>
          <div class="story-card__details">
            <div>
              <strong>Why this works</strong>
              <p>${experience.why}</p>
            </div>
            <div>
              <strong>Booking notes</strong>
              <p>${experience.details}</p>
            </div>
            <div>
              <strong>Trip rhythm</strong>
              <p>${experience.plan}</p>
            </div>
          </div>
          <p class="fine-print">${experience.backup}</p>
          <div class="wine-card__links">
            <a class="link-button" href="${experience.link}" target="_blank" rel="noreferrer">Primary option</a>
            ${
              experience.classicLink
                ? `<a class="secondary-link" href="${experience.classicLink}" target="_blank" rel="noreferrer">Classic cellar option</a>`
                : ""
            }
            <a class="secondary-link" href="${experience.backupLink}" target="_blank" rel="noreferrer">Backup option</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderHotels() {
  const container = document.querySelector("#hotels");

  container.innerHTML = hotels
    .map(
      (hotel) => `
        <article class="hotel-card">
          <div class="hotel-card__top">
            <div>
              <p class="eyebrow">${hotel.city}</p>
              <h3>${hotel.name}</h3>
              <p class="meta">${hotel.dates}</p>
            </div>
            <span class="status status--${hotel.statusType}">${hotel.status}</span>
          </div>
          <p>${renderValue(hotel.address)}</p>
          <p class="hotel-card__parking">${renderValue(hotel.parking)}</p>
        </article>
      `,
    )
    .join("");
}

function renderLogistics() {
  const container = document.querySelector("#logistics");

  container.innerHTML = logistics
    .map(
      (item) => `
        <article class="logistics-card">
          <div class="logistics-card__top">
            <div>
              <p class="eyebrow">${item.date}</p>
              <h3>${item.title}</h3>
            </div>
            <span class="status status--${item.statusType}">${item.status}</span>
          </div>
          <p>${renderValue(item.detail)}</p>
          <p class="meta">${renderValue(item.meta)}</p>
          <p class="fine-print">${renderValue(item.note)}</p>
        </article>
      `,
    )
    .join("");
}

function renderMaps() {
  const container = document.querySelector("#maps");
  const fullRoute =
    "https://www.google.com/maps/dir/?api=1&origin=Rome,+Italy&destination=Port+de+Toulon,+France&waypoints=Montepulciano,+Italy%7CFlorence,+Italy%7CMuseo+Ferrari,+Maranello,+Italy%7CBologna,+Italy%7CAlba,+Province+of+Cuneo,+Italy%7CBarolo,+Italy%7CAlassio,+Italy&travelmode=driving";

  const mapLinks = [
    {
      title: "Full Route",
      description:
        "Rome, Montepulciano, Florence, Maranello, Bologna, Alba/Barolo, Alassio, Toulon.",
      url: fullRoute,
    },
    ...itinerary.map((day) => ({
      title: day.mapLabel,
      description: `${day.date}: ${day.start} to ${day.end}`,
      url: day.mapUrl,
    })),
  ];

  container.innerHTML = mapLinks
    .map(
      (link) => `
        <article class="map-card">
          <h3>${link.title}</h3>
          <p>${link.description}</p>
          <a class="link-button" href="${link.url}" target="_blank" rel="noreferrer">Open in Google Maps</a>
        </article>
      `,
    )
    .join("");
}

function renderNotes() {
  const container = document.querySelector("#booking-notes");

  container.innerHTML = bookingNotes
    .map(
      (note) => `
        <li>
          <span class="note-title">${note.title}</span>
          ${renderValue(note.body)}
        </li>
      `,
    )
    .join("");
}

function renderCredits() {
  const container = document.querySelector("#image-credits");

  container.innerHTML = imageCredits
    .map(
      ([place, title, artist, license]) => `
        <li><strong>${place}</strong>: ${title}, ${artist}, ${license}</li>
      `,
    )
    .join("");
}

renderTimeline();
renderWineExperiences();
renderHotels();
renderLogistics();
renderMaps();
renderNotes();
renderCredits();
