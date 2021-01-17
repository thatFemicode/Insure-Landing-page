'use strict';

// Sticky Navigation Keeps glitching
// const header = document.querySelector('#header');
// const nav = document.querySelector('.nav');
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) {
//     header.classList.add('sticky');
//     header.nextElementSibling.style.color = 'white';
//   } else nav.classList.remove('sticky');
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`,
// });
// headerObserver.observe(header);

// Selecting Ui variables
const hamburger = document.querySelector('.hamburger');
const navigationTab = document.querySelector('.navigation-mobile');

const twist = function () {
  if (hamburger.classList.length === 1) {
    hamburger.classList.add('x');
    navigationTab.style.display = 'block';
    navigationTab.style.transform = 'translateX(0)';
  } else {
    hamburger.classList.remove('x');
    navigationTab.style.transform = 'translateX(-100)';
    navigationTab.style.display = 'none';
  }
};
hamburger.addEventListener('click', twist);
