class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link type="text/css" rel="stylesheet" href="/css/bootstrap.css">
        <header>
            <nav id="myHeader" class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" style="width: 10em; padding-left: 1em;" href="/">Veni Mitev .DEV</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="/#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/#about-me">About Me</a>
                    </li>
                    <li class="nav-item">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Coding Projects
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/MITxPRO-exercises/Shapes/shapes.html">Shapes Excercise</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="/MITxPRO-exercises/PacMan/PacMan.html">Pacman Excercise</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="/MITxPRO-exercises/Eyes/Eyes.html">Eyes</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="MITxPRO-exercises/Real-Time-Bus/bus.html">Real-Time Bus Tracker</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
        </header>
        <script type="text/javascript" src="/js/bootstrap.bundle.js"></script>
        `;
    }
}

customElements.define('my-header', MyHeader);



class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link type="text/css" rel="stylesheet" href="/css/bootstrap.css">
        <link type="text/css" rel="stylesheet" href="/css/style.css">
        <footer>
          <div class="container-fluid">
            <div class="row">
                <div class="col-sm">
                    <a href="https://github.com/VeniMitev" target="_blank"><p class="github">github<span class="blink_me">_</span> <i class="bi bi-github"></i></p></a>
                </div>
                <div class="col-sm">
                    <a href="https://www.linkedin.com/in/venelin-mitev/" target="_blank"><p class="linkedin">linkedin<span class="blink_me">_</span> <i class="bi bi-linkedin"></i></p></a>
                </div>
                <div class="col-sm">
                    <a href="https://www.youtube.com/channel/UCoGzGTZdwwVaActFVhqygZg" target="_blank"><p class="youtube">youtube<span class="blink_me">_</span> <i class="bi bi-youtube"></i></p></a>
                </div>
                <div class="col-sm">
                    <a href="https://www.instagram.com/venelin_m" target="_blank"><p class="instagram">instagram<span class="blink_me">_</span> <i class="bi bi-instagram"></i></p></a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <p style="font-size: 0.75em; font-family: monospace">&copy; <span id="year"></span> by Veni Mitev</p>
                </div>
            </div>
          </div>
        </footer>
        <script type="text/javascript" src="/js/bootstrap.bundle.js"></script>
        `;
    }
}

customElements.define('my-footer', MyFooter);



    // <footer>
    //       <div class="container-fluid">
    //         <div class="row">
    //             <div class="col-sm">
    //                 <a href="https://github.com/VeniMitev" target="_blank"><p class="github">github<div class="blink_me">_</div> <i class="bi bi-github"></i></p></a>
    //             </div>
    //             <div class="col-sm">
    //                 <a href="https://www.linkedin.com/in/venelin-mitev/" target="_blank"><p class="linkedin">linkedin<div class="blink_me">_</div> <i class="bi bi-linkedin"></i></p></a>
    //             </div>
    //             <div class="col-sm">
    //                 <a href="https://www.youtube.com/channel/UCoGzGTZdwwVaActFVhqygZg" target="_blank"><p class="youtube">youtube<div class="blink_me">_</div> <i class="bi bi-youtube"></i></p></a>
    //             </div>
    //             <div class="col-sm">
    //                 <a href="https://www.instagram.com/venelin_m" target="_blank"><p class="instagram">instagram<div class="blink_me">_</div> <i class="bi bi-instagram"></i></p></a>
    //             </div>
    //         </div>
    //         <div class="row">
    //             <div class="col-sm">
    //                 <p style="font-size: 0.75em; font-family: monospace">&copy; <span id="year"></span> by Veni Mitev</p>
    //             </div>
    //         </div>
    //       </div>
    //     </footer>