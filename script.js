// Navigation
function showSection(id) {
document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

// Data
const properties = [
{title:"1BHK Budget Flat",price:2000000,bhk:1,location:"Pune",img:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae"},
{title:"2BHK Apartment",price:4500000,bhk:2,location:"Pune",img:"https://images.unsplash.com/photo-1493809842364-78817add7ffb"},
{title:"3BHK Luxury Flat",price:8000000,bhk:3,location:"Mumbai",img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"},
{title:"4BHK Villa",price:15000000,bhk:4,location:"Mumbai",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"}
];

// Load Cards
function loadProperties(data) {
let c = document.getElementById("propertyContainer");
c.innerHTML = "";

data.forEach((p,i)=>{
c.innerHTML += `
<div class="col-md-6 mb-4">
<div class="card shadow">
<img src="${p.img}">
<div class="card-body">
<h5>${p.title}</h5>
<p>₹${p.price.toLocaleString()} | ${p.bhk} BHK</p>
<button onclick="showDetails(${i})" class="btn btn-primary">View</button>
</div>
</div>
</div>`;
});
}

// Filter + Sort
function filterProperties() {
let price = document.getElementById("priceFilter").value;
let bhk = document.getElementById("bhkFilter").value;

let sorted = [...properties].sort((a,b)=>{
return getPriority(b,price)-getPriority(a,price);
});

let filtered = sorted.filter(p=>{
return (bhk==="all" || p.bhk==bhk);
});

loadProperties(filtered);
}

// Priority
function getPriority(p,price){
if(price==="low" && p.price<=5000000) return 1;
if(price==="mid" && p.price>5000000 && p.price<=10000000) return 1;
if(price==="high" && p.price>10000000) return 1;
return 0;
}

// Modal
function showDetails(i){
let p=properties[i];

document.getElementById("modalTitle").innerText=p.title;
document.getElementById("modalImg").src=p.img;
document.getElementById("modalDetails").innerHTML=`
Price: ₹${p.price.toLocaleString()}<br>
Location: ${p.location}<br>
BHK: ${p.bhk} BHK
`;

new bootstrap.Modal(document.getElementById("propertyModal")).show();
}

// Initial Load
loadProperties(properties);
