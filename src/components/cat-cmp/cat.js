import CatIMG from "./cat.jpeg";
import "./cat.scss";

class CatImage {
  render() {
    const img = document.createElement("img");
    img.src = CatIMG;
    img.alt = "Some Cat";
    img.classList.add("cat-img");

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default CatImage;
