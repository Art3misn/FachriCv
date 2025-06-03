function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

// Trigger animasi bar setelah halaman dimuat
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

function openTab(tabId, event) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}
