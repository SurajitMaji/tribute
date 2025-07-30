const targetDate = new Date("2026-06-17T00:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML = `
        <div>
          <p class="text-[#b65a52] font-serif text-4xl">${days}</p>
          <p class="text-sm">DAYS</p>
        </div>
        <div>
          <p class="text-[#b65a52] font-serif text-4xl">${hours}</p>
          <p class="text-sm">HOURS</p>
        </div>
        <div>
          <p class="text-[#b65a52] font-serif text-4xl">${minutes}</p>
          <p class="text-sm">MINUTES</p>
        </div>
        <div>
          <p class="text-[#b65a52] font-serif text-4xl">${seconds}</p>
          <p class="text-sm">SECONDS</p>
        </div>`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    function toggleSection(id) {
      document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      window.scrollTo({ top: document.getElementById(id).offsetTop - 40, behavior: 'smooth' });
    }