import headphone from "./images/headphone.svg";
import milestone from "./images/milestone.jpg";
import minion from "./images/minion.gif";
import school from "./images/school.png";

const data = [headphone, milestone, minion, school];
const fragment = document.createDocumentFragment();

const h1 = document.createElement("h1");
h1.textContent = "ImageMinimizerWebpackPlugin";
fragment.appendChild(h1);

data.forEach((v) => {
  const image = new Image();
  image.src = v;
  fragment.appendChild(image);
});

const div = document.createElement("div");
div.appendChild(fragment);

document.body.appendChild(div);
