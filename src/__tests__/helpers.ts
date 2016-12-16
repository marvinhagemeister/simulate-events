export function createRoot(id: string): HTMLElement {
  const div = document.createElement("div");
  const body = document.getElementsByTagName("body")[0];

  div.setAttribute("id", id);
  body.appendChild(div);

  return div;
}

export function cleanup() {
  document.body.innerHTML = "";
}
