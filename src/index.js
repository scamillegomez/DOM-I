const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// ## MVP

// ### Create selectors to access the relevant elements
// * [ ] Declare variables pointing to the relevant DOM elements, using any of the selectors you have learned.
const nav_ = document.querySelectorAll('nav');
const nav_firstChild = document.querySelector('a:nth-of-type(1)');
const nav_secondChild = document.querySelector('a:nth-of-type(2)');
const nav_thirdChild = document.querySelector('a:nth-of-type(3)');
const nav_fourthChild = document.querySelector('a:nth-of-type(4)');
const nav_fifthChild = document.querySelector('a:nth-of-type(5)');
const nav_sixthChild = document.querySelector('a:nth-of-type(6)');
const head = document.querySelector('h1');
const btn = document.querySelector('button');
const firstParHead = document.querySelector('.text-content:nth-of-type(1) h4');
const firstParBod = document.querySelector('.text-content:nth-of-type(1) p');
const secParHead = document.querySelector('.text-content:nth-of-type(2) h4');
const secParBod = document.querySelector('.text-content:nth-of-type(2) p');

const servHead = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servBod = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');

const prodHead = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const prodBod = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');

const visionHead = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionBod = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

const contHead = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');

const copyright = document.querySelector('footer a');

// ### Add text contents
// * [ ] Using your selectors, update the text contents of the relevant elements, matching the design file.
// * [ ] Find the correct texts for the elements inside the data object in `src/index.js`.
nav_firstChild.textContent = siteContent['nav']['nav-item-1'];
nav_secondChild.textContent = siteContent['nav']['nav-item-2'];
nav_thirdChild.textContent = siteContent['nav']['nav-item-3'];
nav_fourthChild.textContent = siteContent['nav']['nav-item-4'];
nav_fifthChild.textContent = siteContent['nav']['nav-item-5'];
nav_sixthChild.textContent = siteContent['nav']['nav-item-6'];
head.textContent = siteContent['cta']['h1'];
btn.textContent = siteContent['cta']['button'];
firstParHead.textContent = siteContent['main-content']['features-h4'];
secParHead.textContent = siteContent['main-content']['about-h4'];
firstParBod.textContent = siteContent['main-content']['features-content'];
secParBod.textContent = siteContent['main-content']['about-content'];

servHead.textContent = siteContent['main-content']['services-h4'];
servBod.textContent = siteContent['main-content']['services-content'];

prodHead.textContent = siteContent['main-content']['product-h4'];
prodBod.textContent = siteContent['main-content']['product-content'];

visionHead.textContent = siteContent['main-content']['vision-h4'];
visionBod.textContent = siteContent['main-content']['vision-content'];

contHead.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

copyright.textContent = siteContent['footer']['copyright'];


// ### Add class names

// * [ ] Give the anchor tags _inside the nav_ an italic style by adding the classname `italic` to them alone.
// * [ ] Give the anchor tag _inside the footer_ a bolder appearence by adding the classname `bold` to it alone.
// document.querySelectorAll('nav a').classList.add('italic');
// document.querySelectorAll('.italic').style.fontStyle = 'italic';

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(links => links.classList.add('italic'));

const footLinks = document.querySelectorAll('footer a');
footLinks.forEach(links => links.classList.add('bold'));


// ### Add image sources

// * [ ] Make the img tags on the page display the correct images by editing their `src` attribute.
// * [ ] Find the correct URLs for the images inside the data object in `src/index.js`.

document.querySelector('#logo-img').src = siteContent['images']['logo-img'];
document.querySelector('#cta-img').src = siteContent['images']['cta-img'];
document.querySelector('#middle-img').src = siteContent['images']['accent-img'];

// ## Submission Format

// * [ ] Submit a link to your github repo in canvas.
