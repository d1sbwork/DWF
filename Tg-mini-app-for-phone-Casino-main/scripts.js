const mainButton = document.querySelector(".home"); // Кнопка Главаная
const profileButton = document.querySelector(".profile"); // Кнопка Профиля
const sections = document.querySelectorAll("section"); // Все секции
const profilePage = document.querySelector(".profile-without-autorization"); // Страница профиля
const mainPage = document.querySelector(".main-without-autorization"); // Страница Ленты
const payPage = document.querySelector(".payment"); // Страница оплаты
const payButton = document.querySelector(".deposit"); // Кнопка Пополнения баланса
const caseCount = document.querySelectorAll(".count-item"); // кнопки количества кейсов
const itemsLenta = document.querySelector(".item-lenta"); // Лента последних дропов
const navItems = document.querySelectorAll(".nav-item"); // Теги сортировки кейсов
const inventoryList = document.querySelector(".cards-in-inventory"); //Предметы в инвентаре
const casePage = document.querySelector(".case-without-autorization"); // Странница открытия кейса
const inventoryItems = profilePage.querySelectorAll(".card"); // карты в профиле
const exitButton = document.querySelector(".exit");
const userInfo = document.querySelector(".user-info");
const ruletkaSection = casePage.querySelector(".ruletka-section");
const krutkaSection = casePage.querySelector(".open-info");
const tg = window.Telegram.WebApp;
const API = "https://your-render-url.onrender.com";

tg.expand();

const user = tg.initDataUnsafe?.user;

if (!user) {
  alert("Открой через Telegram");
}

const cases = [
  {

    
    group: "Бесплатные кейсы",
    items: [
      {
        id: 1,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Free1.png",
      },
      {
        id: 2,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Free2.png",
      },
      {
        id: 3,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Free3.png",
      },
      {
        id: 4,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Free4.png",
      },
      {
        id: 5,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Free5.png",
      },
    ],
  },
  {
    group: "JESS",
    items: [
      {
        id: 6,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Jess1.png",
      },
      {
        id: 7,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Jess2.png",
      },
      {
        id: 8,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Jess3.png",
      },
    ],
  },
  {
    group: "Темочные",
    items: [
      {
        id: 9,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special1.png",
      },
      {
        id: 10,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special2.png",
      },
      {
        id: 11,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special3.png",
      },
      {
        id: 12,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special4.png",
      },
      {
        id: 13,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special5.png",
      },
      {
        id: 14,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special6.png",
      },
      {
        id: 15,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special7.png",
      },
      {
        id: 16,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special8.png",
      },
      {
        id: 17,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special9.png",
      },
      {
        id: 18,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special10.png",
      },
      {
        id: 19,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special11.png",
      },
      {
        id: 20,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special12.png",
      },
      {
        id: 21,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special13.png",
      },
      {
        id: 22,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special14.png",
      },
      {
        id: 23,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special15.png",
      },
      {
        id: 24,
        name: "Название",
        star: 7777,
        triangle: 7777,
        img: "media/cases/Special16.png",
      },
    ],
  },
];
const inventoryData = [
  // Массив предметов в инвентаре
  {
    id: 1,
    name: "Шлем с косичками",
    img: "media/ItemsInCases/purpleHelmet.svg",
    price: { star: 7777, triangle: 7777, usd: 100 },
  },
  {
    id: 2,
    name: "Властелин колец",
    img: "media/ItemsInCases/grayRing.svg",
    price: { star: 7777, triangle: 7777, usd: 100 },
  },
  {
    id: 3,
    name: "Кот в шляпе",
    img: "media/ItemsInCases/witchHat.svg",
    price: { star: 7777, triangle: 7777, usd: 100 },
  },
  {
    id: 4,
    name: "Томогочи",
    img: "media/ItemsInCases/tomogochi.svg",
    price: { star: 7777, triangle: 7777, usd: 100 },
  },
  {
    id: 5,
    name: "Увольнение",
    img: "media/ItemsInCases/deadline.svg",
    price: { star: 7777, triangle: 7777, usd: 100 },
  },
  {
    id: 6,
    name: "Котел",
    img: "media/ItemsInCases/kotel.svg",
    price: { star: 7777, triangle: 7777, usd: 100 },
  },
];

const container = document.getElementById("cases-container");

cases.forEach((group) => {
  const groupHtml = `
    <div class="group-of-cases" data-group="${group.group}">
      <h2 class="call-of-cases">${group.group}</h2>
      <ul class="cards">
        ${group.items
          .map(
            (item) => `
              <li class="card case-item" data-id="${item.id}">
                <div>
                  <img src="${item.img}" alt="${item.name}" class="case-image" loading="lazy"/>
                </div>
                <span class="name">${item.name}</span>
                <span class="price red">
                  <span><img src="media/star.svg" alt="star" />${item.star}</span>
                  <span><img src="media/triangle.svg" alt="triangle" />${item.triangle}</span>
                </span>
              </li>`
          )
          .join("")}
      </ul>
    </div>
  `;

  document
    .querySelector("#cases-container")
    .insertAdjacentHTML("beforeend", groupHtml);
});

function showSection(page, button) {
  //Функция SPA переходов по страницам
  sections.forEach((section) => {
    if (!section.classList.contains("interface")) {
      section.classList.remove("turn-on");
      section.classList.add("turn-off");
      if (section.classList.contains("profile-without-autorization")) {
        renderInventory(inventoryData);
        setupInventoryClicks();
        updateInventoryView();
      }
    }
  });

  // Показываем нужную секцию
  page.classList.remove("turn-off");
  page.classList.add("turn-on");
  if (page.classList.contains("profile-without-autorization")) {
    userInfo.classList.remove("turn-off");
    userInfo.classList.add("turn-on");
  } else {
    userInfo.classList.remove("turn-on");
    userInfo.classList.add("turn-off");
  }
  // Обновляем nav-кнопки
  mainButton.classList.remove("active-page");
  profileButton.classList.remove("active-page");
  if(button != "none") button.classList.add("active-page");
  window.scrollTo({
    top: 0,
  });
}

// Клики на кнопки
profileButton.addEventListener("click", () =>
  showSection(profilePage, profileButton)
);
mainButton.addEventListener("click", () => showSection(mainPage, mainButton));
payButton.addEventListener("click", () => showSection(payPage, payButton));
exitButton.addEventListener("click", () =>
  showSection(profilePage, profileButton)
);


function showItemPage(itemId) {
  // Функция рендера страницы предмета из инвентаря
  const item = inventoryData.find((i) => i.id == itemId);
  if (!item) return;

  // Рендерим данные
  const itemPage = document.querySelector(".item-page");
  const itemPageName = itemPage.querySelector(".call-of-item");
  const itemPageImage = itemPage.querySelector(".item-image img");
  const itemPagePrice = itemPage.querySelector(".item-price");

  itemPageName.textContent = item.name;
  itemPageImage.src = item.img;
  itemPageImage.alt = item.name;
  itemPagePrice.innerHTML = `
          <span><img src="media/star.svg" alt="" />7777</span>
          <span><img src="media/triangle.svg" alt="" />7777</span>
          <span>$ ${item.price.usd.toFixed(2)}</span>
  `;

  // Скрываем все секции, кроме item-page
  sections.forEach((section) => {
    if (!section.classList.contains("interface")) {
      section.classList.remove("turn-on");
      section.classList.add("turn-off");
    }
  });

  itemPage.classList.remove("turn-off");
  itemPage.classList.add("turn-on");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Вешаем обработчики на карточки инвентаря
function setupInventoryClicks() {
  // Функция открытия страницы предмета из инвентаря
  inventoryList.querySelectorAll(".card-in-inventory").forEach((card) => {
    card.addEventListener("click", () => {
      showItemPage(card.dataset.id);
      profileButton.classList.remove("active-page");
    });
  });
}



function renderInventory(data) {
  inventoryList.innerHTML = ""; // очищаем список перед рендером
  data.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("card", "card-in-inventory");
    li.dataset.id = item.id;

    li.innerHTML = `
      <div>
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
      </div>
      <span class="name">${item.name}</span>
      <span class="price">
        <span><img src="media/star.svg" alt="" />${item.price.star}</span>
        <span><img src="media/triangle.svg" alt="" />${item.price.triangle}</span>
      </span>
    `;

    inventoryList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Функция включения демо-режима
  const toggle = document.querySelector(".toggle");
  const buttons = document.querySelectorAll(".open-case-buttons button");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active-mode");

    buttons.forEach((btn) => {
      if (btn.classList.contains("black")) {
        btn.classList.remove("black");
        btn.classList.add("white");
      } else {
        btn.classList.remove("white");
        btn.classList.add("black");
      }
    });
  });
});

function updateInventoryView() {
  const inventory = profilePage.querySelector(".inventory"); //Функция проверки слотов в инвентаре
  const emptyBlock = profilePage.querySelector(".empty");

  if (inventoryList.children.length === 0) {
    // Если нет карточек, показываем empty
    emptyBlock.classList.remove("turn-off");
    emptyBlock.classList.add("turn-on");

    inventory.style.display = "block";
    inventory.style.display = "none";
  } else {
    // Если есть карточки, показываем список
    emptyBlock.classList.remove("turn-on");
    emptyBlock.classList.add("turn-off");

    inventory.style.display = "none";
    inventory.style.display = "block";
  }
}

const caseGroups = document.querySelectorAll(".group-of-cases");
const allCases = document.querySelectorAll(".case-item")
const caseTitle1 = document.querySelector(".ruletka-name");
const caseTitle2 = document.querySelector(".open-info .call-of-item");
const caseImage = document.querySelector(".open-info .main-image img");
allCases.forEach((item) => {
  item.addEventListener("click", () => {
    // Получаем id кейса из data-id
    const caseId = parseInt(item.dataset.id);

    // Ищем его в массиве cases
    let selectedCase;
    cases.forEach(group => {
      const found = group.items.find(c => c.id === caseId);
      if (found) selectedCase = found;
    });

    // Если кейс найден — вставляем данные в блок open-info
    if (selectedCase) {
      caseTitle1.textContent = selectedCase.name;
      caseTitle2.textContent = selectedCase.name;
      caseImage.src = selectedCase.img;
      caseImage.alt = selectedCase.name;
    }

    // Показываем страницу кейса
    showSection(casePage, "none");
  });
});

const openCaseButtons = casePage.querySelectorAll(".open-case-buttons button");
const krutkaButtons = casePage.querySelectorAll(".krutka-buttons button")
openCaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    krutkaSection.classList.toggle("turn-off");
    ruletkaSection.classList.toggle("turn-off");
  });
});

krutkaButtons.forEach((button) => {
  button.addEventListener(("click"), () => {
    krutkaSection.classList.toggle("turn-off");
    ruletkaSection.classList.toggle("turn-off");    
  })
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Подсветка
    navItems.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");

    const groupName = item.dataset.group;

    if (groupName === "Все") {
      caseGroups.forEach((group) => group.classList.remove("hidden"));
    } else {
      caseGroups.forEach((group) => {
        if (group.dataset.group === groupName) {
          group.classList.remove("hidden");
        } else {
          group.classList.add("hidden");
        }
      });
    }
  });
});

caseCount.forEach((box) => {
  box.addEventListener("click", () => {
    caseCount.forEach((el) => el.classList.remove("selected-count"));
    box.classList.add("selected-count");
    event.stopPropagation();
  });
});

document.addEventListener("click", () => {
  caseCount.forEach((el) => el.classList.remove("selected-count"));
});

document.querySelectorAll(".pay-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Сначала скрываем все формы
    document
      .querySelectorAll(".pay-item")
      .forEach((el) => el.classList.remove("active"));

    // Активируем только выбранную
    item.classList.add("active");
    event.stopPropagation();
  });
});

document.addEventListener("click", () => {
  document
    .querySelectorAll(".pay-item")
    .forEach((el) => el.classList.remove("active"));
});

document.querySelectorAll(".pay-item select").forEach((select) => {
  select.addEventListener("change", () => {
    // Ищем span.currency-label внутри того же pay-item
    const span = select.closest(".pay-item").querySelector(".selected-valute");
    if (span) {
      span.textContent = select.value;
    }
  });
});

const input = document.getElementById("amount-input");
const convertion = document.querySelector(".convertion");

input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    convertion.style.display = "inline";
  } else {
    convertion.style.display = "none";
  }
});


// ===== BACKEND INTEGRATION =====
const tg = window.Telegram?.WebApp;
tg?.expand();

const user = tg?.initDataUnsafe?.user || { id: "demo_user" };
const API = "http://localhost:3000";

async function syncUser(){
  const res = await fetch(API+"/get-user",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({ id:user.id })
  });
  const data = await res.json();

  const el = document.querySelector(".user-balance");
  if(el) el.innerText = data.balance;
}

async function updateBalance(amount){
  const res = await fetch(API+"/deposit",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({ id:user.id, amount })
  });
  const data = await res.json();

  const el = document.querySelector(".user-balance");
  if(el) el.innerText = data.balance;
}

async function playSpin(){
  const res = await fetch(API+"/spin",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({ id:user.id })
  });

  const data = await res.json();

  if(data.error){
    alert("Недостаточно средств");
    return;
  }

  const el = document.querySelector(".user-balance");
  if(el) el.innerText = data.balance;
}

document.addEventListener("DOMContentLoaded", syncUser);
