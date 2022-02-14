(() => {
  renderHeadline();
  renderFeatures();
  renderPlans();
  renderFreebies();

  const buttons = document.getElementsByTagName("button");
  Array.apply(null, buttons).forEach((element) => {
    if (element.textContent === "MENU") return;
    element.onclick = onButtonClick;
  });
})();

function onButtonClick(e) {
  window.open('../subscription-form.html');
}
