import "./styles.css";

import headphone from "./images/headphone.svg";
import milestone from "./images/milestone.jpg";
import minion from "./images/minion.gif";
import school from "./images/school.png";

const data = [headphone, milestone, minion, school];
const fragment = document.createDocumentFragment();

data.forEach((v) => {
  const image = new Image();
  image.src = v;
  fragment.appendChild(image);
});

document.body.appendChild(fragment);
