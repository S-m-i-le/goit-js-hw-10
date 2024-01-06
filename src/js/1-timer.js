import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
const button = document.querySelector('button');
button.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let today = new Date();
    if (selectedDates[0].getTime() <= today.getTime()) {
      button.disabled = true;
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        backgroundColor: '#EF4040',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        theme: 'dark',
        message: 'Please choose a date in the future',
      });

      console.log(selectedDates[0]);
    } else {
      button.disabled = false;
      button.addEventListener('click', () => {
        userSelectedDate = selectedDates[0].getTime();
        setInterval(updateTimer, 1000);
        button.disabled = true;
      });
    }
  },
};

flatpickr('#datetime-picker', options);

function updateTimer() {
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  const now = new Date().getTime();

  const ms = userSelectedDate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  if (ms >= 0) {
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    daysElement.innerText = days.toString().padStart(2, '0');
    hoursElement.innerText = hours.toString().padStart(2, '0');
    minutesElement.innerText = minutes.toString().padStart(2, '0');
    secondsElement.innerText = seconds.toString().padStart(2, '0');
  } else {
    clearInterval(updateTimer);
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
  }
}
