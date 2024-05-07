window.onload = function () {
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval;

    buttonStart.onclick = function () {
      clearInterval(interval);
      interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
      clearInterval(interval);
    }

    buttonReset.onclick = function () {
      clearInterval(interval);
      tens = 0;
      seconds = 0;
      appendTens.innerHTML = "00";
      appendSeconds.innerHTML = "00";
    }

    function startTimer() {
      tens++;

      if (tens < 10) {
        appendTens.innerHTML = "0" + tens;
      } else if (tens < 100) {
        appendTens.innerHTML = tens;
      } else {
        tens = 0;
        appendTens.innerHTML = "00";
        seconds++;
        if (seconds < 10) {
          appendSeconds.innerHTML = "0" + seconds;
        } else if (seconds < 100) {
          appendSeconds.innerHTML = seconds;
        } else {
          clearInterval(interval);
          appendSeconds.innerHTML = "99";
          appendTens.innerHTML = "99";
          return;
        }
      }
    }
  }