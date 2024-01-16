const els = {
 output: document.querySelector("#output"),
 formMeta: document.querySelector("form#meta"),
}

const meta = {
  title: ["title", "og:title", "twitter:title"],
  desc: ["title", "og:title", "twitter:title"],
  img: ["og:image", "twitter:image"],
  theme: ["theme-color"],
}

els.formMeta.addEventListener("submit", e => {
  e.preventDefault();
  const input = new FormData(e.target);
  els.output.innerText = Object.entries(meta).flatMap(([key, names]) => names.map(
    name => `<meta name="${name}" content="${input.get(key)}" />`)
  ).join("\n");
});
