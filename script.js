/* ══════════════════════════════════════════════════════
   PORTFOLIO SCRIPTS — Abdel Djalil .dev
   ══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // ── Navbar Scroll Effect ─────────────────────────
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Active nav link highlighting based on scroll position
    function updateActiveNavLink() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        updateActiveNavLink();
    }, { passive: true });

    handleNavbarScroll();

    // ── Mobile Menu Toggle ───────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        mobileMenu.classList.toggle('hidden', !mobileMenuOpen);
        menuIconOpen.classList.toggle('hidden', mobileMenuOpen);
        menuIconClose.classList.toggle('hidden', !mobileMenuOpen);
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuOpen) toggleMobileMenu();
        });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (mobileMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    });

    // ── Scroll Reveal Animation ──────────────────────
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ── Project Filter ───────────────────────────────
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden-project');
                    // Re-trigger reveal animation
                    setTimeout(() => {
                        card.querySelector('.reveal')?.classList.add('visible');
                    }, 50);
                } else {
                    card.classList.add('hidden-project');
                }
            });
        });
    });

    // ── Project Gallery Navigation ───────────────────
    const galleryDots = document.querySelectorAll('.gallery-dot');

    galleryDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const galleryId = dot.dataset.gallery;
            const targetIndex = parseInt(dot.dataset.index);
            const gallery = document.getElementById(galleryId);
            const images = gallery.querySelectorAll('.gallery-img');
            const dots = document.querySelectorAll(`.gallery-dot[data-gallery="${galleryId}"]`);

            // Update images
            images.forEach((img, idx) => {
                img.classList.toggle('active', idx === targetIndex);
                if (idx === targetIndex) {
                    img.style.opacity = '1';
                    img.style.position = 'relative';
                } else {
                    img.style.opacity = '0';
                    img.style.position = 'absolute';
                }
            });

            // Update dots
            dots.forEach((d, idx) => {
                d.classList.toggle('active', idx === targetIndex);
            });
        });
    });

    // Auto-cycle galleries
    function autoCycleGallery(galleryId, intervalMs) {
        const gallery = document.getElementById(galleryId);
        if (!gallery) return;

        const images = gallery.querySelectorAll('.gallery-img');
        const dots = document.querySelectorAll(`.gallery-dot[data-gallery="${galleryId}"]`);
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;

            images.forEach((img, idx) => {
                img.classList.toggle('active', idx === currentIndex);
                if (idx === currentIndex) {
                    img.style.opacity = '1';
                    img.style.position = 'relative';
                } else {
                    img.style.opacity = '0';
                    img.style.position = 'absolute';
                }
            });

            dots.forEach((d, idx) => {
                d.classList.toggle('active', idx === currentIndex);
            });
        }, intervalMs);
    }

    autoCycleGallery('nexus-gallery', 4000);
    autoCycleGallery('clientflow-gallery', 5000);

    // ── Contact Form Handling ────────────────────────
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate sending
        submitBtn.disabled = true;
        submitBtn.querySelector('span:last-child').innerHTML = `
            <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
        `;

        setTimeout(() => {
            formSuccess.classList.remove('hidden');
            formSuccess.classList.add('flex');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.querySelector('span:last-child').innerHTML = `
                <i data-lucide="send" class="w-4 h-4"></i>
                Send Message
            `;
            lucide.createIcons();

            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.classList.add('hidden');
                formSuccess.classList.remove('flex');
            }, 5000);
        }, 1500);
    });

    // ── Back to Top Button ───────────────────────────
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ── Smooth Scroll for Anchor Links ───────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ── Interactive Mouse Glow Effect on Cards ───────
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            card.style.background = `
                radial-gradient(300px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.06), transparent 50%),
                rgba(15, 23, 42, 0.6)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(15, 23, 42, 0.6)';
        });
    });

    // ── Skill Pill Count-Up Effect ───────────────────
    // Adds a subtle entrance animation stagger for skill pills
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pills = entry.target.querySelectorAll('.skill-pill');
                pills.forEach((pill, index) => {
                    pill.style.opacity = '0';
                    pill.style.transform = 'translateY(10px) scale(0.9)';
                    setTimeout(() => {
                        pill.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                        pill.style.opacity = '1';
                        pill.style.transform = 'translateY(0) scale(1)';
                    }, index * 80);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillCategories.forEach(cat => skillObserver.observe(cat));

    // ── Typing Effect for Hero (optional accent) ─────
    // The gradient text already handles visual interest,
    // but we add a subtle cursor blink to the code card
    const codeCard = document.querySelector('.font-mono code');
    if (codeCard) {
        const cursor = document.createElement('span');
        cursor.className = 'inline-block w-2 h-4 bg-accent-cyan/80 ml-1 animate-pulse-glow';
        cursor.style.verticalAlign = 'text-bottom';
        codeCard.appendChild(cursor);
    }
});
