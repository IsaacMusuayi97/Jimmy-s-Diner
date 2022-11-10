import { menuArray } from "./data.js";

let objArr = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleChoiceClick(parseInt(e.target.dataset.add));
  } else if (e.target.dataset.remove) {
    removeItem(e.target.dataset.remove, e.target);
  }

  if (e.target.dataset.add) {
    document.getElementById("your-order-container").classList.add("open");
  }
});

function handleChoiceClick(foodId) {
  const targetFoodObj = menuArray.filter(function (food) {
    return food.id === foodId;
  })[0];

  let containerItem = document.getElementById("container-item");
  if (!objArr.map((obj) => obj.id).includes(targetFoodObj.id)) {
    containerItem.innerHTML += `
      <div class="items-div" id="items-div">
        <div class="item" id="item1">${targetFoodObj.name}<span id="removeIre" data-remove="${targetFoodObj.id}">remove</span> </div>
        <div class="item-price">${targetFoodObj.price} <span id="items-count-${targetFoodObj.id}"></span></div>
      </div>
      `;
  }
  objArr.push(targetFoodObj);

  const count = objArr.filter((obj) => obj.id === targetFoodObj.id).length;
  console.log(objArr);
  if (count > 1) {
    if (document.querySelector(`#items-count-${targetFoodObj.id}`)) {
      document.querySelector(
        `#items-count-${targetFoodObj.id}`
      ).innerHTML = `x ${count}`;
    }
  }

  sumUp(targetFoodObj.price);
}

function removeItem(itemId, span) {
  console.log("remove ", itemId);
  const grandParent = span.parentNode.parentNode;
  grandParent.remove();
  if (document.querySelectorAll(".items-div").length === 0) {
    document.getElementById("your-order-container").classList.remove("open");
  }
  objArr = objArr.filter((obj) => obj.id !== parseInt(itemId));
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
