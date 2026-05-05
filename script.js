
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}


const properties = [

  { title: "1 BHK in Baner", price: 4500000, bhk: 1, location: "baner", type: "apartment", img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", details: "Budget flat in Baner." },
  { title: "1 BHK in Wakad", price: 4000000, bhk: 1, location: "wakad", type: "apartment", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", details: "Affordable home in Wakad." },
  { title: "1 BHK in Hinjewadi", price: 3500000, bhk: 1, location: "hinjewadi", type: "apartment", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c", details: "Best for IT professionals." },
  { title: "1 BHK in Hadapsar", price: 3000000, bhk: 1, location: "hadapsar", type: "apartment", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", details: "Compact starter home." },
  { title: "1 BHK in Kharadi", price: 4800000, bhk: 1, location: "kharadi", type: "apartment", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", details: "Close to offices." },

  { title: "2 BHK in Baner", price: 8000000, bhk: 2, location: "baner", type: "apartment", img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4", details: "Spacious 2 BHK." },
  { title: "2 BHK in Wakad", price: 6500000, bhk: 2, location: "wakad", type: "apartment", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde", details: "Modern amenities." },
  { title: "2 BHK in Hinjewadi", price: 7000000, bhk: 2, location: "hinjewadi", type: "apartment", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", details: "Near IT hub." },
  { title: "2 BHK in Kharadi", price: 7500000, bhk: 2, location: "kharadi", type: "apartment", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", details: "Prime area." },
  { title: "2 BHK in Hadapsar", price: 6000000, bhk: 2, location: "hadapsar", type: "apartment", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", details: "Good connectivity." },

  { title: "3 BHK in Baner", price: 12000000, bhk: 3, location: "baner", type: "apartment", img: "https://images.unsplash.com/photo-1560449752-9a5c8f5e8f0b", details: "Premium society." },
  { title: "3 BHK in Wakad", price: 11000000, bhk: 3, location: "wakad", type: "apartment", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", details: "Luxury apartment." },
  { title: "3 BHK in Kharadi", price: 13000000, bhk: 3, location: "kharadi", type: "apartment", img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e", details: "High-end property." },
  { title: "4 BHK in Baner", price: 18000000, bhk: 4, location: "baner", type: "apartment", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", details: "Spacious luxury home." },

  { title: "Villa in Baner", price: 25000000, bhk: 4, location: "baner", type: "villa", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", details: "Luxury villa." },
  { title: "Villa in Hadapsar", price: 30000000, bhk: 4, location: "hadapsar", type: "villa", img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154", details: "Independent house." },
  { title: "Villa in Kharadi", price: 28000000, bhk: 4, location: "kharadi", type: "villa", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227", details: "Premium gated villa." },

  { title: "Penthouse in Baner", price: 22000000, bhk: 4, location: "baner", type: "penthouse", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", details: "Skyline view penthouse." },
  { title: "Penthouse in Kharadi", price: 24000000, bhk: 4, location: "kharadi", type: "penthouse", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", details: "Luxury top-floor home." },

  { title: "2 BHK in Baner (Furnished)", price: 9000000, bhk: 2, location: "baner", type: "apartment", img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc", details: "Fully furnished." },
  { title: "3 BHK in Hinjewadi", price: 10500000, bhk: 3, location: "hinjewadi", type: "apartment", img: "https://images.unsplash.com/photo-1494526585095-c41746248156", details: "Modern interior." }

];

function displayProperties(list) {
  const container = document.getElementById("propertyContainer");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<h4 class="text-center text-danger">No properties found 😢</h4>`;
    return;
  }

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
