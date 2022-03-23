const template = document.createElement('template');
template.innerHTML = `
<link type="text/css" rel="stylesheet" href="/css/bootstrap.css">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html">Veni Mitev</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://open.spotify.com/episode/2A4VXiol7U1mRBaNE2QLMV?si=5268e9a0724f4501" target="_blank">Podcast Epiode Featuring Me</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Coding Projects
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/MITxPRO-exercises/Shapes/shapes.html">Shapes Excercise</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/MITxPRO-exercises/PacMan/PacMan.html">Pacman Excercise</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <script type="text/javascript" src="/js/bootstrap.bundle.js"></script>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('nav-bar', NavBar);
