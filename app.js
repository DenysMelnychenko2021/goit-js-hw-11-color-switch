const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
class Backround {
  constructor(arrayBackground) {
    this.intId = null;
    this.arrayBackground = arrayBackground;
    this.isActive = false;
  }

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    console.log("isActive: ", this.isActive);

    this.intId = setInterval(() => {
      const randomColorIndex = this.randomIntegerFromInterval(
        0,
        colors.length - 1
      );
      console.log("randomColorIndex: ", randomColorIndex);

      refs.body.style.backgroundColor = this.arrayBackground[randomColorIndex];
      console.log(refs.body.style.backgroundColor);
    }, 1000);
    console.log("intId start: ", this.intId);
  }

  stop() {
    clearInterval(this.intId);
    console.log("intId stop: ", this.intId);

    this.isActive = false;
    console.log("isActive: ", this.isActive);
  }
}

const backround = new Backround(colors);

refs.startBtn.addEventListener("click", backround.start.bind(backround));
refs.stopBtn.addEventListener("click", backround.stop.bind(backround));
