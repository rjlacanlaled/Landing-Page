function createElementWithOptions(tagName, options = {}) {
  if (tagName === "" || tagName === undefined || tagName === null) return;
  const element = document.createElement(tagName, options);

  if (options.length === 0) return element;
  attachTextToElement(element, options.text);
  addClassListToElement(element, options.classList);
  addIdToElement(element, options.id);
}


function attachTextToElement(element, text) {
    if (text == null) return;
    const text = document.createTextNode(text);
    element.appendChild(text);
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