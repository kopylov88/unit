import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export function gsapAnimations() {

  if (window.innerWidth > 767.98) {
    const tlHeader = gsap.timeline();
    tlHeader.from('.header__top', { opacity: 0, duration: 1 });
    tlHeader.from('.header__menu-item', { opacity: 0, y: -10, duration: 1, stagger: 0.1 });
    tlHeader.from('.banner__box', { opacity: 0, duration: .5 }, '-=.5');
    tlHeader.from('.banner__box-title', { opacity: 0, y: 30, duration: .5 });
    tlHeader.from('.banner__box-text', { opacity: 0, y: 30, duration: .5 });

    gsap.from('.layout', {
      opacity: 0,
      duration: 1,
      x: -20,
      scrollTrigger: {
        trigger: '.layout',
        toggleActions: 'restart reset restart reset',
        start: 'top 90%'
      },
    });
    gsap.from('.benefits', {
      opacity: 0,
      x: -20,
      duration: 1,
      scrollTrigger: {
        trigger: '.benefits',
        toggleActions: 'restart reset restart reset',
        start: 'top 90%'
      },
    });

    gsap.from('.layout-slider', {
      opacity: 0,
      x: -20,
      duration: 1,
      scrollTrigger: {
        trigger: '.layout-slider',
        toggleActions: 'restart reset restart reset',
        start: 'top 90%'
      },
    });

    gsap.from('.about', {
      opacity: 0,
      x: -20,
      duration: 2,
      scrollTrigger: {
        trigger: '.about',
        toggleActions: 'restart reset restart reset',
        start: 'top 90%'
      },
    });

    gsap.from('.info', {
      opacity: 0,
      x: -20,
      duration: 2,
      scrollTrigger: {
        trigger: '.info',
        toggleActions: 'restart none none reset',
      },
    });

    gsap.from('.details', {
      opacity: 0,
      x: -20,
      duration: 2,
      scrollTrigger: {
        trigger: '.details',
        toggleActions: 'restart reset restart reset',
      },
    });

    gsap.from('.build', {
      opacity: 0,
      x: -20,
      duration: 2,
      scrollTrigger: {
        trigger: '.build',
        toggleActions: 'restart reset restart reset',
      },
    });

    gsap.from('.contacts', {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.contacts',
        toggleActions: 'restart reset restart reset',
      },
    });

    gsap.from('.connect', {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.connect',
        toggleActions: 'restart reset restart reset',
      },
    });

    gsap.from('.apartments', {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.apartments',
        toggleActions: 'restart reset restart reset',
      },
    });

    gsap.from('.pantries', {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: '.pantries',
        toggleActions: 'restart reset restart reset',
      },
    });
  }
}