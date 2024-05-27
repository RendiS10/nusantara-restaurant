class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <h3 tabindex="0">Copyright © 2024 - Nusantara Foods Rendi</h3>
  </footer>
    `;
  }
}

customElements.define('my-footer', Footer);
export default Footer;
