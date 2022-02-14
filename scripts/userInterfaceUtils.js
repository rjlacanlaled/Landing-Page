function createElementWithOptions(tagName, options = {}) {
  if (tagName === "" || tagName === undefined || tagName === null) return;
  const element = document.createElement(tagName, options);

  if (options.length === 0) return element;
  attachTextToElement(element, options.text);
  addClassListToElement(element, options.classList);
  addIdToElement(element, options.id);
  setImageUrl(element, options.src);
  setBackgroundImageUrl(element, options.backgroundUrl);
  return element;
}

function createNestedElements(container, contents = {}) {
  if (contents.length < 1 || contents.length == undefined) return;
  contents.forEach((item) => {
    const elem = createElementWithOptions(
      item.element.tag,
      item.element.options
    );
    container.appendChild(elem);
    if (item.element.contents == null || item.element.contents.length < 1)
      return;
    createNestedElements(elem, item.element.contents);
  });
}

function attachTextToElement(element, textContent) {
  if (textContent == null) return;
  const textNode = document.createTextNode(textContent);
  element.appendChild(textNode);
}

function addClassListToElement(element, classList) {
  if (classList == null || classList.length < 1) return;
  classList.forEach((classItem) => {
    element.classList.add(classItem);
  });
}

function setImageUrl(element, url) {
  if (url == null) return;
  element.src = url;
}

function setBackgroundImageUrl(element, url) {
  if (url == null) return;
  element.style.backgroundImage = `url(${url})`;
}

function addIdToElement(element, id) {
  if (id == null || id === "") return;
  element.id = id;
}

function convertToElementDictionary(tag, options = {}, contents = {}) {
  if (tag === null) return;
  return {
    element: {
      tag: tag,
      options: options,
      contents: contents,
    },
  };
}
