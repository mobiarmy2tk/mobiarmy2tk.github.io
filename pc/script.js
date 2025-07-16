let seconds = 9;
const countdown = document.getElementById('countdown');
const btn = document.getElementById('downloadBtn');

const interval = setInterval(() => {
  if (seconds > 0) {
    countdown.textContent = `Tập tin chuẩn bị tải xuống!`;
    btn.textContent = `Vui lòng chờ ${seconds}s`;
    seconds--;
  } else {
    clearInterval(interval);
    countdown.textContent = "Tập tin đã sẵn sàng!";
    btn.textContent = "Tải Ngay";
    btn.disabled = false;
  }
}, 1000);

btn.addEventListener('click', () => {
  btn.disabled = true;
  btn.textContent = "Đang tải...";
  window.location.href = "https://store2.gofile.io/download/web/aa5c6ddf-23d9-4ccb-9989-5c5e19ee77d4/Army2TK_setup.exe";
});
