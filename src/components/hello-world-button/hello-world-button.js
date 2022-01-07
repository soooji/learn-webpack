import "./hello-world-button.scss";

export default class HelloWorldButton {
  btnTxt = "Hello World";

  render() {
    // Body Selector
    const body = document.querySelector("body");

    // Create Button
    const button = document.createElement("button");

    button.innerHTML = this.btnTxt;
    button.classList.add("hello-world-button");

    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add("hello-world-text");

      body.appendChild(p);
    };

    body.appendChild(button);
  }
}
