const data = ["images/github.webp", "images/react.webp"];
const fragment = document.createDocumentFragment();

const h1 = document.createElement("h1");
h1.textContent = "Convert to .webp";
fragment.appendChild(h1);

data.forEach((v) => {
  const image = new Image();
  image.src = v;
  fragment.appendChild(image);
});

const div = document.createElement("div");
div.appendChild(fragment);

document.body.appendChild(div);
