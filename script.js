const images = {
  bolts: ["images/bolts/bolt1.jpg", "images/bolts/bolt2.jpg"],
  nuts: ["images/nuts/nut1.jpg", "images/nuts/nut2.jpg"],
  washers: ["images/washers/washer1.jpg"]
};

function showGallery(type) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  images[type].forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    gallery.appendChild(image);
  });
}

function sendInquiry(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const req = document.getElementById("requirement").value;

  const message = 
`Bulk Inquiry:
Name: ${name}
Contact: ${contact}
Requirement: ${req}`;

  // WhatsApp
  window.open(
    `https://wa.me/917837366803?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}