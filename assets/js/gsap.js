const heroText = new SplitType(".heroSection__content-text");

gsap.registerPlugin(ScrollTrigger);

gsap.to(".char ", {
  scrollTrigger: {
    trigger: ".char",
  },
  y: 0,
  stagger: 0.03,
  delay: 0.1,
  duration: 0.05,
});
gsap.to(".heroSection__sub-button , .heroSection__sub-text", {
  scrollTrigger: {
    trigger: ".heroSection__sub-button",
  },
  y: 0,
  delay: 0.2,
  duration: 0.3,
});
gsap.from(".imageSection__image", {
  scrollTrigger: {
    trigger: ".imageSection__image",
  },
  opacity: 0,
  y: 300,
  duration: 1,
});
gsap.from(".whatIsSection__text-main", {
  scrollTrigger: {
    trigger: ".whatIsSection__text-main",
  },
  opacity: 0,
  y: 300,
  duration: 1,
});
gsap.from(".whatIsSection__text-sub", {
  scrollTrigger: {
    trigger: ".whatIsSection__text-sub",
  },
  opacity: 0,
  y: 300,
  duration: 1,
});
gsap.from(".whatIsSection__text-subSec", {
  scrollTrigger: {
    trigger: ".whatIsSection__text-subSec",
  },
  opacity: 0,
  y: 300,
  duration: 1,
});
gsap.from(".whyUsSection__heading", {
  scrollTrigger: {
    trigger: ".whyUsSection__heading",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});
gsap.from(".whyUsSection__grid-item", {
  scrollTrigger: {
    trigger: ".whyUsSection__grid-item",
  },
  opacity: 0,
  y: 200,
  stagger: 0.2,
  delay: 0.1,
  duration: 1,
});
gsap.from(".testemonialSection__founder", {
  scrollTrigger: {
    trigger: ".testemonialSection__founder",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});
gsap.from(".testemonialSection__text", {
  scrollTrigger: {
    trigger: ".testemonialSection__text",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});
gsap.from(".contributorsSection__heading", {
  scrollTrigger: {
    trigger: ".contributorsSection__heading",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});
gsap.from(".contributorsSection__grid-item", {
  scrollTrigger: {
    trigger: ".contributorsSection__grid-item",
  },
  opacity: 0,
  y: 200,
  stagger: 0.2,
  delay: 0.1,
  duration: 1,
});

gsap.from(".joinNetworkSection__heading", {
  scrollTrigger: {
    trigger: ".joinNetworkSection__heading",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});

gsap.from(".joinNetworkSection__social-svg path", {
  scrollTrigger: {
    trigger: ".joinNetworkSection__social-svg path",
  },
  opacity: 0,
  y: 200,
  stagger: 0.05,
  delay: 0.05,
  duration: 1,
});

gsap.from(".introductionSection__heading", {
  scrollTrigger: {
    trigger: ".introductionSection__heading",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});

gsap.from(".introductionSection__video", {
  scrollTrigger: {
    trigger: ".introductionSection__video",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});

gsap.from(".newsSection__heading", {
  scrollTrigger: {
    trigger: ".newsSection__heading",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});

gsap.from(".newsSection__news-content:first-child", {
  scrollTrigger: {
    trigger: ".newsSection__news-content:first-child",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});

gsap.from(".newsSection__news-content:last-child", {
  scrollTrigger: {
    trigger: ".newsSection__news-content:last-child",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});

gsap.from(".newsSection__button", {
  scrollTrigger: {
    trigger: ".newsSection__news-content:first-child",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});

gsap.from(".footerSection", {
  scrollTrigger: {
    trigger: ".footerSection",
  },
  opacity: 0,
  y: 200,
  duration: 1,
});
