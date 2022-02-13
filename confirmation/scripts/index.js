(() => {
  const url = window.location.href;
  const searchParamsDict = searchParamsToDictionary(getSearchParams(url));
  console.log(searchParamsDict);
  createConfirmationPageHTMLElements(searchParamsDict);
})();