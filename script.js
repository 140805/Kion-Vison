/* =========================
   LOADER
========================= */

window.addEventListener('load', () => {

  const loader = document.getElementById('loader');

  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 1200);

});


/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


/* fechar menu ao clicar */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});


/* =========================
   SCROLL REVEAL
========================= */

const elements = document.querySelectorAll('.fade-up');

const observerFade = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observerFade.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observerFade.observe(el));

/* =========================
   CONTADOR ANIMADO
========================= */

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');

      let current = 0;

      const update = () => {
        const increment = target / 100;

        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();

      observer.unobserve(counter);
    }

  });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));


/* =========================
   CARROSSEL PORTFÓLIO
========================= */

let currentProject = 0;

const track = document.getElementById('portfolioTrack');
const slides = document.querySelectorAll('.portfolio-slide');

function updateSlider() {
  track.style.transform = `translateX(-${currentProject * 100}%)`;
}

function nextProject() {
  currentProject++;

  if (currentProject >= slides.length) {
    currentProject = 0;
  }

  updateSlider();
}

function prevProject() {
  currentProject--;

  if (currentProject < 0) {
    currentProject = slides.length - 1;
  }

  updateSlider();
}

/* auto play */
setInterval(nextProject, 5000);


/* =========================
   WHATSAPP BUTTON
========================= */

function whats() {

  const phone = '5547996663842';

  const message = encodeURIComponent(
    'Olá! Vim pelo site da Kion Vision e gostaria de solicitar um orçamento.'
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  const btn = document.querySelector('.whatsapp-float');

  if (btn) btn.style.transform = 'scale(0.95)';

  window.open(url, '_blank');

  setTimeout(() => {
    if (btn) btn.style.transform = 'scale(1)';
  }, 200);

}



/* =========================
   PROGRESS BAR
========================= */

const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {

  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const progress = (scrollTop / height) * 100;

  progressBar.style.width = progress + '%';

});


/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

   if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});

let autoPlay = setInterval(nextProject, 5000);

const carousel = document.querySelector('.portfolio-carousel');

carousel.addEventListener('mouseenter', () => {
  clearInterval(autoPlay);
});

carousel.addEventListener('mouseleave', () => {
  autoPlay = setInterval(nextProject, 5000);
})

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});