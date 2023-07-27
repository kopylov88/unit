import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

export function gsapAnimations() {

  if (window.innerWidth > 767.98) {
    const tlHeader = gsap.timeline();
    tlHeader.from('.header__top', { opacity: 0, duration: 1 });
    tlHeader.from('.header__menu-item', { opacity: 0, y: -10, duration: 1, stagger: 0.1 });
    tlHeader.from('.banner__box', { opacity: 0, duration: 1 }, '-=1');
    tlHeader.from('.banner__box-title', { opacity: 0, y: 30, duration: .5 });
    tlHeader.from('.banner__box-text', { opacity: 0, y: 30, duration: .5 });

    gsap.from('.layout', {
      opacity: 0,
      y: 200,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.layout',
        toggleActions: 'play none none reverse',
        start: 'top 95%'
      },
    });
    gsap.from('.benefits', {
      opacity: 0,
      y: 200,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.benefits',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.layout-slider', {
      opacity: 0,
      y: 200,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.layout-slider',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.about', {
      opacity: 0,
      y: 200,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.about',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.info', {
      opacity: 0,
      y: 200,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.info',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.details', {
      opacity: 0,
      y: 200,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.details',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.build', {
      opacity: 0,
      y: 200,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.build',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.contacts', {
      opacity: 0,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.contacts',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.connect', {
      opacity: 0,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.connect',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.apartments', {
      opacity: 0,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.apartments',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.pantries', {
      opacity: 0,
      scale: .9,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.pantries',
        toggleActions: 'play none none reverse',
      },
    });
  }
}