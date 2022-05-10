const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs = {
  bodyRef: document.querySelector('body'),
  startBtnRef: document.querySelector('[data-action = "start"]'),
  stopBtnRef: document.querySelector('[data-action = "stop"]'),
};
const colorSwithcher = {
  idInterval: null,
  isActive: false,

  changeColor() {
    if (this.isActive) {
      return;
    }
    console.log('start');
    this.isActive = true;
    this.idInterval = setInterval(() => {
      const randomColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
      refs.bodyRef.style.backgroundColor = `${randomColor}`;
    }, 1000);
  },

  stop() {
    console.log('stop');
    this.isActive = false;
    clearInterval(this.idInterval);
  },
};

refs.startBtnRef.addEventListener(
  'click',
  colorSwithcher.changeColor.bind(colorSwithcher),
);
refs.stopBtnRef.addEventListener(
  'click',
  colorSwithcher.stop.bind(colorSwithcher),
);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
