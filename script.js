const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Segniamo le variabili
const cards = document.getElementById("cards");
let items= '';

// Facciamo un ciclo per prendere gli elementi dall'array
for (let i = 0; i < teamMembers.length; i++) {
  let membroIesimo = teamMembers[i];  
  const {name, role, email, img} = membroIesimo;
  
  // Creiamo la lista da aggiungere
  items +=
  `<div class="card mb-3 bg-dark" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${img}" class="img-fluid rounded-start" alt="Image of ${name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-white">${name}</h5>
              <p class="card-text text-white">${role}</p>
              <p class="card-text text-primary">${email}<small class="text-body-secondary"></small></p>
            </div>
          </div>
        </div>
      </div>`;
}

// Aggiungiamo gli elementi alla pagina
cards.innerHTML = items;
console.log(items);
console.log(membroIesimo);

