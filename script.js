/**
 * MI BITÁCORA 1 - JAVASCRIPT PRINCIPAL
 * Autor: Prof. Félix Aliaga (@profealiaga)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Current Year in Footer
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 2. Navbar Scroll Effect & Active Navigation Link Tracking
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Add shadow when scrolled
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active link on scroll
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Mobile Navigation Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinksContainer = document.getElementById('navLinks');

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when a navigation item is clicked
    navLinksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 4. Video Gallery Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const videoCards = document.querySelectorAll('.video-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      videoCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCat === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Video Lightbox Modal with YouTube Embed
  const videoModal = document.getElementById('videoModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const videoIframe = document.getElementById('videoIframe');
  const modalVideoTitle = document.getElementById('modalVideoTitle');
  const modalExternalLink = document.getElementById('modalExternalLink');

  function openVideoModal(videoId, title) {
    if (!videoModal || !videoIframe) return;

    modalVideoTitle.textContent = title || 'Reproduciendo Video';
    videoIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    modalExternalLink.href = `https://www.youtube.com/watch?v=${videoId}`;

    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (!videoModal || !videoIframe) return;

    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
    // Clear iframe src so video audio stops playing immediately
    videoIframe.src = '';
    document.body.style.overflow = 'auto';
  }

  // Bind play buttons & modal buttons
  document.querySelectorAll('.play-overlay, .open-modal-btn').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const videoId = trigger.getAttribute('data-video-id');
      const title = trigger.getAttribute('data-title');
      if (videoId) {
        openVideoModal(videoId, title);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeVideoModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeVideoModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      closeVideoModal();
    }
  });

  // 6. Interactive WhatsApp Message Generator Form
  const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
  const userNameInput = document.getElementById('userName');
  const userTopicSelect = document.getElementById('userTopic');
  const userMessageInput = document.getElementById('userMessage');

  if (sendWhatsappBtn) {
    sendWhatsappBtn.addEventListener('click', () => {
      const phoneNumber = '51941410026';
      const name = userNameInput ? userNameInput.value.trim() : '';
      const topic = userTopicSelect ? userTopicSelect.value : 'Consulta general';
      const detail = userMessageInput ? userMessageInput.value.trim() : '';

      let message = `¡Hola Prof. Félix Aliaga! `;
      
      if (name) {
        message += `Le saluda ${name}. `;
      } else {
        message += `Me contacto desde su página web Mi Bitácora 1. `;
      }

      message += `Deseo realizar una consulta sobre: *${topic}*.`;

      if (detail) {
        message += `\n\nDetalle: ${detail}`;
      }

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
