//tab
const tabsElement = document.getElementById("tabs-example");

const tabsElements = [
  {
    id: "profile",
    triggerEl: document.getElementById("profile-tab-example"),
    targetEl: document.getElementById("profile-example"),
  },
  {
    id: "settings",
    triggerEl: document.getElementById("settings-tab-example"),
    targetEl: document.getElementById("settings-example"),
  },
  {
    id: "contacts",
    triggerEl: document.getElementById("contacts-tab-example"),
    targetEl: document.getElementById("contacts-example"),
  },
  {
    id: "dashboard",
    triggerEl: document.getElementById("dashboard-tab-example"),
    targetEl: document.getElementById("dashboard-example"),
  },
];

const tabsOptions = {
  defaultTabId: "dashboard",
};

const tabsInstanceOptions = {
  id: "tabs-example",
  override: true,
};

const tab = new Tabs(
  tabsElement,
  tabsElements,
  tabsOptions,
  tabsInstanceOptions
);

//在某個動作之後會指定當前tab
setTimeout(() => {
  tab.show("profile");
}, 3000);

//點擊定tab後要做的動作
tab.updateOnShow((id) => {
  switch (id._activeTab.id) {
    case "profile":
      console.log("i am profile");
      break;
    case "dashboard":
      console.log("i am dashboard");
      break;
  }
});

//carousel
const carouselElement = document.getElementById("carousel-example");

const carouselItems = [
  {
    position: 0,
    el: document.getElementById("carousel-item-1"),
  },
  {
    position: 1,
    el: document.getElementById("carousel-item-2"),
  },
];

const carouselOptions = {
  defaultPosition: 1,
  interval: 3000,

  indicators: {
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses:
      "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    items: [
      {
        position: 0,
        el: document.getElementById("carousel-indicator-1"),
      },
      {
        position: 1,
        el: document.getElementById("carousel-indicator-2"),
      },
    ],
  },
};

const carouselInstanceOptions = {
  id: "carousel-example",
};

const carousel = new Carousel(
  carouselElement,
  carouselItems,
  carouselOptions,
  carouselInstanceOptions
);

const prevBtn = document.getElementById("data-carousel-prev");
const nextBtn = document.getElementById("data-carousel-next");

prevBtn.addEventListener("click", () => {
  carousel.prev();
});

nextBtn.addEventListener("click", () => {
  carousel.next();
});

// carousel.cycle();
