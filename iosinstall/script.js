document.addEventListener('DOMContentLoaded', function () {

  const popup = document.getElementById('custom-popup');

  function showPopup() {
    if (!popup) return;
    popup.style.visibility = 'visible';
    setTimeout(() => {
      popup.style.opacity = 1;
      popup.style.transform = 'scale(1)';
    }, 10);
  }

  window.closePopup = function () {
    if (!popup) return;
    popup.style.opacity = 0;
    popup.style.transform = 'scale(0.8)';
    setTimeout(() => {
      popup.style.visibility = 'hidden';
    }, 300);
  };

  showPopup();

  const buttons = document.querySelectorAll('.button-container .download-button');
  const showMoreText = document.getElementById('showMoreText');
  const maxVisible = 6;

  let dpCount = 1;
  buttons.forEach(btn => {
    if (btn.id !== 'download') {
      btn.textContent = `Tải Link Dự Phòng ${dpCount++}`;
    }
  });

  buttons.forEach((btn, index) => {
    if (index >= maxVisible) btn.style.display = 'none';
  });

  if (buttons.length > maxVisible && showMoreText) {
    showMoreText.style.display = 'inline-block';
  }

  window.showMoreLinks = function () {
    buttons.forEach(btn => btn.style.display = 'inline-block');
    if (showMoreText) showMoreText.style.display = 'none';
  };

  const mainDownload = document.getElementById('download');
  if (mainDownload) {
    mainDownload.addEventListener('click', function () {
      window.location.href = 'https://ios.army2lau.net/iosinstall/';
    });
  }

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

  function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function isInAppBrowser() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/FBAN|FBAV|Instagram|Line|Zalo|Messenger|TikTok|Telegram|TelegramBot|Twitter|Snapchat/i.test(ua)) {
      return true;
    }

    if (isIOS() && !/Safari/i.test(ua)) {
      return true;
    }

    return false;
  }

  if (isIOS() && isInAppBrowser()) {
    const warning = document.getElementById("open-safari-warning");
    if (warning) warning.style.display = "block";
  }

  const dnsBtn = document.querySelector(
    'a[href*="signed_khoindvn.mobileconfig"]'
  );

  if (dnsBtn) {

    if (isIOS() && isInAppBrowser()) {
      dnsBtn.textContent = '⚠️ Mở trình duyệt Safari để tải DNS';
      dnsBtn.style.background = '#ff4d4d';
      dnsBtn.style.boxShadow = '0 4px 10px rgba(255,77,77,0.4)';
    }

    dnsBtn.addEventListener('click', function (e) {
      if (isIOS() && isInAppBrowser()) {
        e.preventDefault();

        const warning = document.getElementById("open-safari-warning");
        if (warning) {
          warning.style.display = "block";
          warning.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

});
