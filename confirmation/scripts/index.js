(() => {
  const url = window.location.href;
  const searchParamsDict = searchParamsToDictionary(getSearchParams(url));
  createConfirmationPageHTMLElements(searchParamsDict);
})();

