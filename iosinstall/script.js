document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('custom-popup');

  function showPopup() {
    popup.style.visibility = 'visible';
    setTimeout(() => {
      popup.style.opacity = 1;
      popup.style.transform = 'scale(1)';
    }, 10);
  }

  window.closePopup = function () {
    popup.style.opacity = 0;
    popup.style.transform = 'scale(0.8)';
    setTimeout(() => {
      popup.style.visibility = 'hidden';
    }, 300);
  }
  showPopup();

  const buttons = document.querySelectorAll('.button-container .download-button');

  let dpCount = 1;
  buttons.forEach(btn => {
    if (btn.id === 'download') return;

    btn.textContent = `Tải Link Dự Phòng ${dpCount}`;
    dpCount++;
  });

  document.getElementById('download').addEventListener('click', function() {
    window.location.href = `https://ios.army2lau.net/iosinstall/`;
  });

  for (let i = 1; i <= 50; i++) {
    const btn = document.getElementById(`download-dp${i}`);
    if (btn) {
      btn.addEventListener('click', function () {
        window.location.href = `https://ios.army2lau.net/iosinstall/dp${i}.php`;
      });
    }
  }
});
