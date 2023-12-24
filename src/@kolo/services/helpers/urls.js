export const getQueryParams = (paramsString, predicate) => {
  const params = new URLSearchParams(paramsString);
  return Array.from(params).filter(([key, value]) => predicate(key, value));
};

//newParams = {key: value}
export const addQueryParams = (paramsString, newParams) => {
  const params = new URLSearchParams(paramsString);
  for (const [key, value] of Object.entries(newParams)) {
    if (value) {
      params.set(key, value);
    }
  }
  return params.toString();
};
//history.push({search: addQueryParams(history.location.search, {key: value})})

export const getQueryParamsObject = (paramsString, predicate) => {
  const params = new URLSearchParams(paramsString);
  const paramsObject = {};
  let paramsArray = Array.from(params);
  if (predicate) {
    paramsArray = paramsArray.filter(([key, value]) => predicate(key, value));
  }
  paramsArray.forEach(([key, value]) => (paramsObject[key] = value));
  return paramsObject;
};

export const removeQueryParams = (paramsString, predicate) => {
  const params = new URLSearchParams(paramsString);
  for (const [key, value] of Array.from(params)) {
    if (predicate(key, value)) {
      params.delete(key);
    }
  }
  return params.toString();
};

export const removeQueryParamsFromUrl = (location, predicate) => {
  const clearedQueryParams = removeQueryParams(location.search, predicate);
  const url = location.href.split('?')[0];
  return clearedQueryParams ? `${url}?${clearedQueryParams}` : url;
};
