  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  // Fade-in on scroll animation
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, observerOptions);

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Form submission handler
  document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Show success message
      alert(`Thank you ${firstName}! Your message has been received. I will get back to you soon.`);
      
      // Reset form
      e.target.reset();
  });

  // Parallax effect for background image
  window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const bg = document.querySelector('.background-image');
      bg.style.transform = `translateY(${scrolled * 0.5}px)`;
  });

  // Add active class to current navigation item
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - 200) {
              current = section.getAttribute('id');
          }
      });
      
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').slice(1) === current) {
              link.classList.add('active');
          }
      });
  });