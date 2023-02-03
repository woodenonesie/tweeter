//escapes unsafe characters
const escapeUnsafeChar = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};