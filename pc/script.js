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
  window.location.href = "Army2TK_setup.exe";
});
