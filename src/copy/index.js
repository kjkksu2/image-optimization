import { getImages } from "./async";

getImages().then((arr) => {
  const fragment = document.createDocumentFragment();

  const h1 = document.createElement("h1");
  h1.textContent = "CopyWebpackPlugin";
  fragment.appendChild(h1);

  arr.forEach((v) => {
    const image = new Image();
    image.src = v;
    fragment.appendChild(image);
  });

  const div = document.createElement("div");
  div.appendChild(fragment);

  document.body.appendChild(div);
});
