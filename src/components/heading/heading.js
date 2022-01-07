class Heading {
  render(pageName) {
    const head = document.createElement("h1");
    head.innerHTML = `Page: ${pageName}`;

    const body = document.querySelector("body");
    body.appendChild(head);
  }
}

export default Heading;
