//tab
const tabElement = document.getElementById("tabs-example");

const tabElements = [
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

const options = {
  defaultTabId: "dashboard",
};

const instanceOptions = {
  id: "tabs-example",
  override: true,
};

const tab = new Tabs(tabElement, tabElements, options, instanceOptions);

//在某個動作之後會指定當前tab
setTimeout(() => {
  tab.show("profile");
}, 3000);

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

//dark模式
const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");
lightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("bg-white");
  document.documentElement.classList.remove("bg-black");
});
darkBtn.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.add("bg-black");
  document.documentElement.classList.remove("bg-white");
});
