const options = {
    root: document.getElementById('wrapper'), // Use a specific container as the viewport
    threshold: [0.25], // Trigger at 25% and 75% visibility
  };

  function updateNavbar(activeSection) {
    const navBullets = document.querySelectorAll('.nav-bullet');
    navBullets.forEach((bullet) => {
        console.log(bullet);
        bullet.classList.remove('current');
        if (bullet.dataset.currentSection === activeSection) {
            bullet.classList.add('current');
        }
    });
    // Add any additional navbar updates here (e.g., change background color)
}

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const activeSection = entry.target.dataset.currentSection;
            console.log(activeSection);
            updateNavbar(activeSection);
        }
    });
}, options);

const ionRows = document.querySelectorAll('ion-row');
ionRows.forEach((row) => {
    observer.observe(row);
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 200,
    autoplay: true,
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
    //   el: '.swiper-scrollbar',
    },
  });