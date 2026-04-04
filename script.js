// Modal de Negociação
const modal = document.getElementById('negotiateModal');
const openBtn = document.getElementById('openNegotiateBtn');
const closeBtn = document.getElementById('closeModalBtn');
const submitMock = document.getElementById('submitMockBtn');

function openModal() {
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    if (modal) modal.style.display = 'none';
}

if (openBtn) {
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

if (submitMock) {
    submitMock.addEventListener('click', () => {
        alert('Obrigado! 🧡 Retornamos em breve com uma proposta personalizada.\nEquipe Stewart Devs');
        closeModal();
        const form = document.getElementById('fakeForm');
        if (form) form.reset();
    });
}

// Fechar modal clicando fora
window.addEventListener('click', (e) => {
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Smooth scroll para links internos
document.querySelectorAll('.nav-links a, .btn[href^="#"], .contact-nav').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');
        if (hash && hash !== '#' && hash.startsWith('#')) {
            const target = document.querySelector(hash);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Animação sutil para os cards quando entrarem na viewport (opcional)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.price-card, .student-card, .site-link').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});