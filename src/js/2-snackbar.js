import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
  const a = 100;
  promise
    .then(function (delay) {
      iziToast.success({
        title: 'OK',
        backgroundColor: '#59A10D',
        theme: 'dark',
        position: 'topRight',
        message: ' Fulfilled promise in ' + delay + ' ms',
      });
    })
    .catch(function (delay) {
      iziToast.warning({
        title: '❌',
        backgroundColor: '#EF4040',
        theme: 'dark',
        position: 'topRight',
        message: ' Rejected promise in ' + delay + ' ms',
      });
    });
});
