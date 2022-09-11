class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
      <!--Навигационно меню-->
      <nav class="navbar navbar-expand-lg">
          <div class="d-flex  justify-content-around flex-grow-1 flex-wrap">

              <div class="start-col"></div>

              <div class="logo">
                  <img class="logo-img-header" src="resources/logo-header.png" alt="Logo">
              </div>

              <div class="middle-col"></div>

              <div class="menu ">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse " id="navbarNav">
                      <ul class="navbar-nav">
                          <li class="nav-item">
                              <a class="nav-link" href="home.html">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="biography.html">Biography</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="contact-page.html">Contacts</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="search">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search">
                      <button class="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Search</button> 
              </div>
    
              <div class="end-col"></div>
              
          </div>
      </nav>
  </header>
      `;
    }
  }
  
  customElements.define('header-menu', Header);
  