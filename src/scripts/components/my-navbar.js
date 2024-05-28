class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <h1><a href="">Nusantara Foods</a></h1>
    <button id="menu" class="NavMenu">☰</button>
    <nav id="drawer" class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/rendi-sutendi-813a90270/">About Us</a></li>
      </ul>
    </nav>
  </header>
    `;
  }
}

customElements.define('my-navbar', MyNavbar);
export default MyNavbar;
