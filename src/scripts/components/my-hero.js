class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" id="hero">
      <div class="overlay">
        <h2 tabindex="0">Web Informasi Restaurant Nusantara</h2>
      </div>
    </div>
    `;
  }
}

customElements.define('my-hero', Hero);
export default Hero;
