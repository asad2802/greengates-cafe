function scrollToMenu(){
document.getElementById("menu").scrollIntoView();
}

const menuData = {
"Local Entrees":[["Yummy Fries","₹100"],["Onion Rings","₹130"],["Paneer Pops","₹160"],["Chicken Wings","₹230"]],
"Open Breads":[["Cheesy Garlic Bread","₹120"],["Chicken Crostini","₹160"],["Bruschetta","₹130"]],
"Italian Plates":[["Arrabbiata","₹180"],["Alfredo","₹210"],["Mac N Cheese","₹220"]],
"Burgers":[["Classic Burger","₹180"],["BBQ Chicken Burger","₹240"],["Crunchy Chicken Burger","₹240"]],
"Mojitos":[["Classic Virgin","₹120"],["Watermelon","₹120"],["Orange","₹120"]],
"Hot Brew":[["Cappuccino","₹110"],["Latte","₹110"],["Espresso","₹80"]],
"Desserts":[["Sizzling Brownie","₹180"],["Brownie Blast","₹220"],["Ice Cream","₹40"]]
};

const tabs=document.getElementById("tabs");
const menuItems=document.getElementById("menuItems");

Object.keys(menuData).forEach((category,i)=>{
let btn=document.createElement("button");
btn.innerText=category;
if(i===0) btn.classList.add("active");
btn.onclick=()=>showCategory(category,btn);
tabs.appendChild(btn);
});

function showCategory(category,button){
document.querySelectorAll(".category-tabs button").forEach(b=>b.classList.remove("active"));
button.classList.add("active");

menuItems.innerHTML="";
menuData[category].forEach(item=>{
menuItems.innerHTML+=`<div class="card"><h3>${item[0]}</h3><p class="price">${item[1]}</p></div>`;
});
}
// Reservation WhatsApp integration
document.getElementById("bookingForm").addEventListener("submit", function(e){
e.preventDefault();

let inputs = this.querySelectorAll("input, select");

let message = `Table Reservation%0A
Name: ${inputs[0].value}%0A
Phone: ${inputs[1].value}%0A
Date: ${inputs[2].value}%0A
Time: ${inputs[3].value}%0A
Guests: ${inputs[4].value}`;

window.open(`https://wa.me/917259425952?text=${message}`,"_blank");
});
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll("section").forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});

showCategory(Object.keys(menuData)[0],tabs.children[0]);
