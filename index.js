import { menuArray } from "./data.js";

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
        <div class="container--add-btn">
            <img src="images/Text.png" alt="">
        </div>

      </div>

      <hr class="line">
    `;
  });

  return menuHtml;
}

function render() {
    document.getElementById('container').innerHTML = getMenu()
}

render()
