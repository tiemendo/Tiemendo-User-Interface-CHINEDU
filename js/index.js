class Nav {
  constructor(el) {
    this.nav = el;
    this.openNavbar();
    this.checkActiveItem();
  }
  openNavbar = () => {
    const navToggle = this.nav.querySelector('.nav-toggle');
    const navItemContainer = this.nav.querySelector('.nav-items');
    navToggle.addEventListener('click', () => {
      navItemContainer.classList.toggle('open')
    })
  }
  checkActiveItem = () => {
    const navItems = this.nav.querySelectorAll('.nav-items li');
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.deselect();
       item.classList.add('active');
      })
    })
  }
  deselect = () => {
    const navItems = this.nav.querySelectorAll('.nav-items li');
    navItems.forEach(item => {
      item.classList.remove('active');
    })
  }
}

const nav = document.querySelector('.navigation');
new Nav(nav)

class NavComponent {
  constructor(navData, rootEl) {
    this.data = navData;
    this.rootEl = rootEl;
    this.navigation = document.createElement('header')
    this.navbar = document.createElement('nav');
  }
  constructNavBar = () => {
    this.navigation.classList.add('navigation')
    this.navbar.classList.add('navbar')
    this.navigation.appendChild(this.navbar);
    this.rootEl.appendChild(this.navigation)
  }
  constructHeader = () => {
    const navHeader = this.createElementWithClass('div', 'nav-header');
    navHeader.appendChild(this.createLogo());
    
  }
  createElementWithClass = (el, classNames) => {
    const element = document.createElement(el);
    if (Array.isArray(classNames)) {
      classNames.forEach(cl => {
        element.classList.add(cl);
      })
    }
    else {
      element.classList.add(classNames)
    }
    return element;
  }
  createElements = (elements) => {
    return elements.map(el => {
      return document.createElement(el)
    });
  }
  createLogo = () => {
    logo = this.createElement('div', 'logo');
    const [h1, anchor] = this.createElements(['h1', 'a']);
    anchor.textContent = "Tieme Ndo";
    h1.appendChild(anchor);
    logo.appendChild(h1);
    return logo;
  }
  createNavToggle = () => {
    const navToggle = this.createElementWithClass('div', 'nav-toggle');
    [...new Array(3)].forEach(it => {
      navToggle.appendChild(this.createElementWithClass('div', 'bar'))
    })
    return navToggle;
  }
  createNavItems = () => {
    const container = this.createElementWithClass('div', 'nav-items');
    this.data.forEach(navLink=> {
      [li, a] = this.createElements(['li', 'a'])
      a.textContent = navLink.name;
      a.href = navLink.link;
      li.appendChild(a);
      container.appendChild(li);
    }) 
    return container;
  }
}