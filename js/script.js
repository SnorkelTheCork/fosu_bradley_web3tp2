import { animate, splitText, stagger, utils } from 'animejs';

const { chars } = splitText(".txt", {
    chars: { wrap: "clip" }
});

animate(chars, {
  opacity: { from: 0, to: 1, delay: stagger(100) },
  modifier: utils.round(0),
  duration: 5000,
  loop: true
});