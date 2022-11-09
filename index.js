import { menuArray } from "./data.js";

document.addEventListener("click", function (e) {
  handleChoiceClick(parseInt(e.target.dataset.add));

  if(e.target.dataset.add) {
    document.getElementById('your-order-container').classList.add('open')
  }
});

function handleChoiceClick(foodId) {
  const targetFoodObj = menuArray.filter(function (food) {
    return food.id === foodId;
  })[0];

  document.getElementById("container-item").innerHTML += `
  <div class="items-div">
  <div class="item" id="item">${targetFoodObj.name}<span>remove</span></div>
  <div class="item-price">${targetFoodObj.price}</div>
  </div>
  `;

  sumUp(targetFoodObj.price);
}

let total = 0;

function sumUp(sum) {
  total = total + sum;

  document.getElementById("total-price").innerText = total;
}

function getMenu() {
  let menuHtml = ``;

  menuArray.forEach(function (feed) {
    menuHtml += `
    
    <div class="order">
        <div class="container-emoji">
          ${feed.emoji}
        </div>
        <div class="container--food-ingredient-price">
          <h1 class="food-name">${feed.name}</h1>
          <small class="ingredients">${feed.ingredients}</small>
          <div class="price">${feed.price}</div>
        </div>
        <div class="container--add-btn" data-add="${feed.id}">
           
        </div>

      </div>

      <hr class="line">
    `;
  });

  return menuHtml;
}

function render() {
  document.getElementById("container").innerHTML = getMenu();
}

render();
