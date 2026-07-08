$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  const title = document.querySelector("h3");
  const originalText = title.textContent;

  title.textContent = "";

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  function typeWriter() {
    let i = 0;
    title.textContent = "";

    const timer = setInterval(() => {
      title.textContent += originalText.charAt(i);
      i++;

      if (i >= originalText.length) {
        clearInterval(timer);
      }
    }, 80);
  }

  function open() {
    envelope.addClass("open").removeClass("close");

    document.getElementById("autoplay").play();

    setTimeout(() => {
        typeWriter();
    }, 800);
  }

  function close() {
    envelope.addClass("close").removeClass("open");

    const music = document.getElementById("autoplay");
    music.pause();
    music.currentTime = 0;

    title.textContent = "";
  }
});