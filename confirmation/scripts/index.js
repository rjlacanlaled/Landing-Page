(() => {
  const url = window.location.href;
  const searchParamsDict =  URLSearchParams(url);
  createConfirmationPageHTMLElements(searchParamsDict);
})();

