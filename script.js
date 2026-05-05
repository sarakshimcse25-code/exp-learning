function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

const properties = [
  {
    title: "1 BHK in Wagholi",
    price: 2800000,
    bhk: 1,
    location: "wagholi",
    type: "apartment",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    details: "Affordable home perfect for small family."
  },
  {
    title: "2 BHK in Hinjewadi",
    price: 5500000,
    bhk: 2,
    location: "hinjewadi",
    type: "apartment",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    details: "Near IT park with great connectivity."
  },
  {
    title: "3 BHK in Baner",
    price: 12000000,
    bhk: 3,
    location: "baner",
    type: "apartment",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    details: "Spacious premium apartment."
  },
  {
    title: "3 BHK in Wakad",
    price: 9500000,
    bhk: 3,
    location: "wakad",
    type: "apartment",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    details: "Modern design with amenities."
  },
  {
    title: "4 BHK Penthouse",
    price: 22000000,
    bhk: 4,
    location: "kharadi",
    type: "penthouse",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    details: "Luxury penthouse with skyline view."
  },
  {
    title: "Villa in Hadapsar",
    price: 30000000,
    bhk: 4,
    location: "hadapsar",
    type: "villa",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    details: "Independent villa with garden."
  }
];

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

function showDetails(title) {
  let property = properties.find(p => p.title === title);

  document.getElementById("modalTitle").innerText = property.title;
  document.getElementById("modalImg").src = property.img;
  document.getElementById("modalDetails").innerText = property.details;

  new bootstrap.Modal(document.getElementById('propertyModal')).show();
}

displayProperties(properties);
