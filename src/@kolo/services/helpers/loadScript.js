export const loadScript = (scriptURL, {onLoad, onError, attributes}) => {
  const script = document.createElement('script');
  script.src = scriptURL;
  script.onload = onLoad;
  script.onerror = onError;
  if (attributes) {
    script.setAttributes(attributes);
  }

  document.body.appendChild(script);
};
