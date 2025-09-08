$("button").hover(
    function(){
        $(this).css({
            "box-shadow":"0 4px 15px white"
        });

    },
    function(){
         $(this).css({
            "box-shadow":"none"
        });
    }
);


  let timer;
  let [hours, minutes, seconds] = [0, 0, 0];
  let running = false;

  function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    $("h2").text(`${h}:${m}:${s}`);
  }

  $("#start").click(function () {
    if (!running) {
      running = true;
      timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        updateDisplay();
      }, 1000);
    }
  });

  $("#pause").click(function () {
    if(running){
    clearInterval(timer);
    running = false;
    $(this).text("resume");
    }
    else{
        running = true;
      timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        updateDisplay();
      }, 1000);

      $(this).text("pause");
    }

  });

  $("#reset").click(function () {
    running = false;
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    $("#pause").text("pause");
  });
