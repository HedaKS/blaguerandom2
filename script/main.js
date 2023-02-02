

async function getJoke() {
  const response = await fetch("https://api.blablagues.net/?rub=blagues");
  const data = await response.json();
  const link = data.data.link;
  
  const contentResponse = await fetch(link);
  const content = await contentResponse.text();
  
  const parser = new DOMParser();
  const html = parser.parseFromString(content, "text/html");
  
  const wrap = html.querySelector(".wrap");
  document.querySelector("#joke").innerHTML = wrap.innerHTML;
  
  joke.addEventListener("click", e => e.stopPropagation());
}
