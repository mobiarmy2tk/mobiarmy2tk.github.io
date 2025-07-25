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
  const showMoreText = document.getElementById('showMoreText');
  const maxVisible = 6;

  let dpCount = 1;
  buttons.forEach(btn => {
    if (btn.id !== 'download') {
      btn.textContent = `Tải Link Dự Phòng ${dpCount}`;
      dpCount++;
    }
  });

  buttons.forEach((btn, index) => {
    if (index >= maxVisible) {
      btn.style.display = 'none';
    }
  });

  if (buttons.length > maxVisible) {
    showMoreText.style.display = 'inline-block';
  }

  window.showMoreLinks = function () {
    buttons.forEach(btn => btn.style.display = 'inline-block');
    showMoreText.style.display = 'none';
  }

  document.getElementById('download').addEventListener('click', function () {
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

  const playBtn = document.getElementById("playBtn");
  const closeBtn = document.getElementById("closeBtn");
  const videoPopup = document.getElementById("videoPopup");
  const ytplayer = document.getElementById("ytplayer");

  if (playBtn && closeBtn && videoPopup && ytplayer) {
    playBtn.addEventListener("click", () => {
      ytplayer.src = "https://streamable.com/e/s3s870?autoplay=1";
      videoPopup.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      ytplayer.src = "";
      videoPopup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === videoPopup) {
        ytplayer.src = "";
        videoPopup.style.display = "none";
      }
    });
  }
});
