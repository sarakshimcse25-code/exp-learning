// Navigation
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Property Data
const properties = [
  {
    title: "1 BHK in Wagholi",
    price: 2800000,
    bhk: 1,
    location: "wagholi",
    type: "apartment",
    img: "https://via.placeholder.com/300",
    details: "Affordable 1 BHK perfect for small families."
  },
  {
    title: "2 BHK in Hinjewadi",
    price: 5500000,
    bhk: 2,
    location: "hinjewadi",
    type: "apartment",
    img: "https://via.placeholder.com/300",
    details: "Close to IT park, great investment."
  },
  {
    title: "3 BHK in Baner",
    price: 12000000,
    bhk: 3,
    location: "baner",
    type: "apartment",
    img: "https://via.placeholder.com/300",
    details: "Spacious and premium society."
  },
  {
    title: "3 BHK in Wakad",
    price: 9500000,
    bhk: 3,
    location: "wakad",
    type: "apartment",
    img: "https://via.placeholder.com/300",
    details: "Modern design with amenities."
  },
  {
    title: "4 BHK Penthouse",
    price: 22000000,
    bhk: 4,
    location: "kharadi",
    type: "penthouse",
    img: "https://via.placeholder.com/300",
    details: "Luxury penthouse with skyline view."
  },
  {
    title: "Villa in Hadapsar",
    price: 30000000,
    bhk: 4,
    location: "hadapsar",
    type: "villa",
    img: "https://via.placeholder.com/300",
    details: "Independent villa with garden."
  },
  {
    title: "Luxury 5 BHK Villa",
    price: 50000000,
    bhk: 5,
    location: "baner",
    type: "villa",
    img: "https://via.placeholder.com/300",
    details: "Ultra luxury villa for premium buyers."
  }
];

// Display Properties
function displayProperties(list) {
  const container = document.getElementById("propertyContainer");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow">
          <img src="${p.img}" class="card-img-top">
          <div class="card-body">
            <h5>${p.title}</h5>
            <p>₹${p.price.toLocaleString()}</p>
            <button class="btn btn-primary w-100" onclick="showDetails('${p.title}')">
              View Details
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Filter Logic
function filterProperties() {
  let price = document.getElementById("priceFilter").value;
  let bhk = document.getElementById("bhkFilter").value;
  let location = document.getElementById("locationFilter").value;
  let type = document.getElementById("typeFilter").value;

  let filtered = properties.filter(p => {

    let priceMatch =
      price === "all" ||
      (price === "low" && p.price <= 5000000) ||
      (price === "mid" && p.price > 5000000 && p.price <= 10000000) ||
      (price === "high" && p.price > 10000000);

    let bhkMatch = bhk === "all" || p.bhk == bhk;
    let locMatch = location === "all" || p.location === location;
    let typeMatch = type === "all" || p.type === type;

    return priceMatch && bhkMatch && locMatch && typeMatch;
  });

  displayProperties(filtered);
}

// Modal Details
function showDetails(title) {
  let property = properties.find(p => p.title === title);

  document.getElementById("modalTitle").innerText = property.title;
  document.getElementById("modalImg").src = property.img;
  document.getElementById("modalDetails").innerText = property.details;

  new bootstrap.Modal(document.getElementById('propertyModal')).show();
}

// Load all properties initially
displayProperties(properties);
