(() => {
  const url = window.location.href;
  const searchParamsDict = new URLSearchParams(url);
  createConfirmationPageHTMLElements(searchParamsDict);
})();

