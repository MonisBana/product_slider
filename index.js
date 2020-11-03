data = [
  {
    image_path: "fab.png",
    background_color: "#c7c7b6",
    title: "Fabulous Face Oil",
    price: "$ 39.00",
  },
  {
    image_path: "paste.png",
    background_color: "#BEBDBB",
    title: "Purifying Facial Cream",
    price: "$ 56.00",
  },
  {
    image_path: "hair.png",
    background_color: "#DDD9D6",
    title: "Classic Conditioner",
    price: "$ 17.00",
  },
];
let counter = 0;
function nextImage() {
  counter += 1;
  if (counter >= data.length) {
    counter = 0;
  }
  document.getElementById("img1").className = "img-out";
  document.getElementById("title").className = "text-anim-out";
  document.getElementById("price").className = "text-anim-out";
  document.getElementById("title").className = "hidden";
  document.getElementById("price").className = "hidden";
  setTimeout(() => {
    removeElement("img1");
    document.getElementById("title").innerText = data[counter].title;
    document.getElementById("price").innerText = data[counter].price;
    document.getElementById("title").className = "text-anim-in";
    document.getElementById("price").className = "text-anim-in";
  }, 1000);
  setTimeout(() => {
    document.getElementById("A").className = "left left-anim";
    addElement("A", "img", "img2", "img-in", data[counter].image_path, "");

    document.getElementById("A").style.backgroundColor =
      data[counter].background_color;
    document.getElementById("img2").id = "img1";
  }, 1700);
}
function previousImage() {
  counter -= 1;
  console.log(counter);
  if (counter <= 0) {
    counter = data.length - 1;
  }
  document.getElementById("img1").className = "img-out";
  document.getElementById("title").className = "text-anim-out";
  document.getElementById("price").className = "text-anim-out";
  document.getElementById("title").className = "hidden";
  document.getElementById("price").className = "hidden";
  setTimeout(() => {
    removeElement("img1");
    document.getElementById("title").innerText = data[counter].title;
    document.getElementById("price").innerText = data[counter].price;
    document.getElementById("title").className = "text-anim-in";
    document.getElementById("price").className = "text-anim-in";
  }, 1000);
  setTimeout(() => {
    document.getElementById("A").className = "left left-anim";
    addElement("A", "img", "img2", "img-in", data[counter].image_path, "");

    document.getElementById("A").style.backgroundColor =
      data[counter].background_color;
    document.getElementById("img2").id = "img1";
  }, 1700);
}
function addElement(parentId, elementTag, elementId, className, source, html) {
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute("id", elementId);
  newElement.setAttribute("class", className);
  newElement.setAttribute("src", source);
  newElement.innerHTML = html;
  console.log(newElement);
  p.appendChild(newElement);
}
function removeElement(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
