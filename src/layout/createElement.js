export default function createElement(
  tagName,
  classNames,
  text,
  srcName,
  altName,
  link
) {
  let elem = document.createElement(tagName);

  if (classNames) elem.classList.add(...classNames.split(" "));

  if (text) elem.textContent = text;

  if (srcName || altName) {
    elem.src = srcName;
    elem.alt = altName;
  }

  if (link) {
    elem.href = link;
  }

  return elem;
}
