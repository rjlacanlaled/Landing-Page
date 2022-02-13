(() => {
  const url = window.location.href;
  const searchParamsDict = searchParamsToDictionary(getSearchParams(url));
  console.log(searchParamsDict);
})();

function getSearchParams(url) {
  if (url === null || url === undefined) return;
  return window.location.search.substring(1);
}

function searchParamsToDictionary(searchParams) {
  if (searchParams === undefined || searchParams === null) return;
  let searchParamsDict = {};
  searchParams.split("&").forEach((element) => {
    const keyVal = element.split("=");
    searchParamsDict[keyVal[0]] = keyVal[1];
  });
  return searchParamsDict;
}
