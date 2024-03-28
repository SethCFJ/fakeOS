//create new element with text

const createElement = (elType, elText, parent, id) => {
  const newEl = document.createElement(elType);
  const textNode = document.createTextNode(elText);
  newEl.id = id;
  newEl.appendChild(textNode);
  parent.appendChild(newEl);
};

export default createElement;
