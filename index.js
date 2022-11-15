import { menuArray } from "./data.js";

let objArr = [];
let completeOrder = document.getElementById("completeOrderBtn");
let payBtn = document.getElementById("pay");

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

  if (!objArr.includes(targetFoodObj)) {
    document.getElementById("container-item").innerHTML += `
    <div class="items-div" id="items-div">
      <div class="item" id="item1">${targetFoodObj.name}<span id="removeIre" data-remove="${targetFoodObj.id}">remove</span></div>
      <div class="item-price">${targetFoodObj.price}</div>
    </div>
    `;
    sumUp(targetFoodObj.price);
  }

  objArr.push(targetFoodObj);
}

function removeItem(itemId, span) {
  const grandParent = span.parentNode.parentNode;
  grandParent.remove();
  if (document.querySelectorAll(".items-div").length === 0) {
    document.getElementById("your-order-container").classList.remove("open");
    location.reload()
  }

const targetArray = menuArray.filter(function (item) {
  return item.id === parseInt(itemId)
 })[0]
 
 substract(targetArray.price)
}

let total = 0;

function sumUp(sum) {
  total = total + sum;

  document.getElementById("total-price").innerText = total;
}

function substract(num) {
  total = total - num;
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
           +
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

completeOrder.addEventListener("click", function () {
  document.getElementById("container-details").style.display = "block";
});

payBtn.addEventListener("click", function () {
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");

  if (input1.value !== "" && input2.value !== "" && input3.value !== "") {
    document.getElementById("your-order-container").style.display = "none";
    document.getElementById("container-details").style.display = "none";
    document.getElementById("footer").style.display = "block";
  } else {
    alert("remplissez les differents champs");
  }
});

render();
