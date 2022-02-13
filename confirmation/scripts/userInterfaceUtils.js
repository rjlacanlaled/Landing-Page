function createElementWithOptions(tagName, options = {}) {
  if (tagName === "" || tagName === undefined || tagName === null) return;
  const element = document.createElement(tagName, options);

  if (options.length === 0) return element;
  attachTextToElement(element, options.text);
  addClassListToElement(element, options.classList);
  addIdToElement(element, options.id);
  return element;
}


function attachTextToElement(element, textContent) {
    if (textContent == null) return;
    const textNode = document.createTextNode(textContent);
    element.appendChild(textNode);
}

function addClassListToElement(element, classList) {
    if (classList == null || classList.length < 1) return;
    classList.forEach(classItem => {
        element.classList.add(classItem);
    });
}

function addIdToElement(element, id) {
    if (id == null || id === '') return;
    element.id = id;
}