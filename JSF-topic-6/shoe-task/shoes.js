/*6. Задачthis.ink -= this.decrementFn();а описана в блоці JS
Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
Придумати ще 2 варіації, відяких буде залежати ціна товару.
 */

const colorButtonsContainer = document.querySelector(".colors");
const price = document.getElementById("outprice");
colorButtonsContainer.addEventListener("click", (event) => changeColor(event));

function changeColor(event) {
  if (event.target.classList.contains("color")) {
    const activeColor = document.querySelector(".colors .active");
    activeColor.classList.remove("active");
    event.target.classList.add("active");
    const newPrice = event.target.getAttribute("data-price");
    price.innerText = newPrice;
    const newColor = event.target.getAttribute("color");
    const shoeImage = document.querySelector(`.shoe[color="${newColor}"]`);
    const shoeImageSrc = shoeImage.getAttribute("src");
    const newShoeImageSrc = shoeImageSrc.replace(/\/\w+\.png$/, `/${newColor}.png`);
    shoeImage.setAttribute("src", newShoeImageSrc);
  }
}




// const colorElements = document.querySelectorAll('.color');
// const sizeElements = document.querySelectorAll('.size');

// colorElements.forEach(colorElement => {
//   colorElement.addEventListener('click', () => {
//     const price = colorElement.getAttribute('data-price');
//     document.getElementById('outprice').textContent = price;
//   });
// });

// sizeElements.forEach(sizeElement => {
//   sizeElement.addEventListener('click', () => {
//     const price = sizeElement.getAttribute('data-price');
//     document.getElementById('outprice').textContent = price;
//   });
// });