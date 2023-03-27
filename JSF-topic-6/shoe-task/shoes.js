/*6. Задача описана в блоці JS
Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
Придумати ще 2 варіації, відяких буде залежати ціна товару.
 */

const colorButtonsContainer = document.querySelector(".colors");
const sizeButtonsContainer = document.querySelector(".sizes");
const deliveryOptionsContainer = document.querySelector(".options");
const price = document.getElementById("outprice");
let activeColor = document.querySelector(".colors .active");
let activeSize = null;
let deliveryOption = null;

colorButtonsContainer.addEventListener("click", (event) => {
  changeColor(event);
  changePic();
});
sizeButtonsContainer.addEventListener("click", (event) => changeSize(event));
deliveryOptionsContainer.addEventListener("click", (event) => changeDelivery(event));


function changeColor(event) {
  if (event.target.classList.contains("color")) {
    activeColor.classList.remove("active");
    event.target.classList.add("active");
    activeColor = event.target;
    const newPrice = event.target.getAttribute("data-price");
    price.innerText = newPrice;
  }
}

function changePic() {
  const images = document.querySelectorAll(".shoe");
  images.forEach((shoe) => {
    if (shoe.getAttribute("color") === activeColor.getAttribute("color")) {
      shoe.classList.add("show");
    } else {
      shoe.classList.remove("show");
    }
  });
}

function changeSize(event) {
  if (event.target.classList.contains("size")) {
    const activeSizeButton = document.querySelector(".sizes .active");
    if (activeSizeButton) {
      activeSizeButton.classList.remove("active");
    }
    event.target.classList.add("active");
    activeSize = event.target.getAttribute("data-price");
    updatePrice();
  } 
}

function changeDelivery(event) {
  if (event.target.type === "radio") {
    deliveryOption = event.target.value;
    updatePrice();
  }
}

function updatePrice() {
  let newPrice = parseInt(activeColor.getAttribute("data-price"));
  if (activeSize) {
    newPrice += parseInt(activeSize);
  }
  if (deliveryOption === "express") {
    newPrice += 10;
  }
  price.innerText = newPrice;
}