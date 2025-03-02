document.addEventListener("DOMContentLoaded", function () {
  function animateCounters() {
    const counters = document.querySelectorAll(".card-title");
    const duration = 2000;

    counters.forEach((counter) => {
      let target = parseInt(counter.getAttribute("data-target"));
      let start = 1;
      let increment = Math.ceil(target / (duration / 10));

      let interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        counter.innerText = start;
      }, 50);
    });
  }

  animateCounters();
});
