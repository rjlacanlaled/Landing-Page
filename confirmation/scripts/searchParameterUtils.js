function getSearchParams(url) {
  if (url == null) return;
  return window.location.search.substring(1);
}

function searchParamsToDictionary(searchParams) {
  if (searchParams == null) return;
  let searchParamsDict = {};
  searchParams.split("&").forEach((element) => {
    const keyVal = element.split("=");
    searchParamsDict[keyVal[0]] = keyVal[1];
  });
  return searchParamsDict;
}
