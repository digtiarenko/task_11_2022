import timerTempl from '../template/timer.hbs';

//створити рефи
//розмітка має динамічно ств і вішатись в дом
//логіка таймера
//метод обчислення днів, годин і т.д. + pad
// оновлення інтерфейсу

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.timerTemplate = timerTempl({ selector });
    this.bodyRef = document.querySelector('body');
    this.bodyRef.insertAdjacentHTML('beforeend', this.timerTemplate);
    this.daysRef = document.querySelector(`#${selector} [data-value="days"]`);
    this.hoursRef = document.querySelector(`#${selector} [data-value="hours"]`);
    this.minsRef = document.querySelector(`#${selector} [data-value="mins"]`);
    this.secsRef = document.querySelector(`#${selector} [data-value="secs"]`);

    setInterval(this.start.bind(this), 1000);
  }

  start() {
    const deltaTime = this.targetDate - Date.now();
    this.updateClockValue(deltaTime);
  }

  updateClockValue(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.updateClockFace(days, hours, mins, secs);
  }

  updateClockFace(days, hours, minutes, seconds) {
    this.daysRef.textContent = `${days}`;
    this.hoursRef.textContent = `${hours}`;
    this.minsRef.textContent = `${minutes}`;
    this.secsRef.textContent = `${seconds}`;
  }

  pad(value) {
    if (value.length > 2) {
      return String(value).padStart(3, '0');
    }
    return String(value).padStart(2, '0');
  }
}

const timer1 = new CountdownTimer({
  selector: 'timer-1',
  targetDate: new Date('Jul 10, 2022'),
});

console.log('timer1', timer1);

const timer2 = new CountdownTimer({
  selector: 'timer-2',
  targetDate: new Date('Aug 10, 2022'),
});

console.log('timer2', timer2);

// const timer3 = new CountdownTimer({
//   selector: 'timer-3',
//   targetDate: new Date('Aug 10, 2022'),
// });
