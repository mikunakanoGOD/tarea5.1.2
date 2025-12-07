const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.classList.contains('service-card') 
            ? 'slideInUp 0.8s ease-out forwards' 
            : 'slideInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
        });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('.service-card, #contenido').forEach(el => {
        observer.observe(el);
    });

    // Navbar efecto al scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.85)';
        } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.5)';
        }
    });