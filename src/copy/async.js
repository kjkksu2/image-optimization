export function getImages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const images = [
        "images/china.jpg",
        "images/javascript.png",
        "images/zoom.jpg",
      ];
      resolve(images);
    }, 3000);
  });
}
