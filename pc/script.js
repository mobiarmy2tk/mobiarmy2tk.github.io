document.addEventListener("DOMContentLoaded", () => {

  const containers = document.querySelectorAll('.container');

  const links = {
    windows: "https://codeberg.org/army2/Army2TK/raw/branch/main/Army2TK_setup.exe",
    mac: "https://codeberg.org/army2/Army2TK/raw/branch/main/Army2TK_setup.exe"
  };

  containers.forEach(container => {
    let seconds = 9;

    const countdown = container.querySelector('.countdown');
    const btn = container.querySelector('.downloadBtn');
    const os = container.getAttribute('data-os');

    const interval = setInterval(() => {
      if (seconds > 0) {
        countdown.textContent = "Tập tin chuẩn bị tải xuống!";
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
      window.location.href = links[os];
    });
  });

});
