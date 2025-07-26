document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.querySelector('.preloader');
    const preloaderText = document.querySelector('.preloader-text');
    const content = document.querySelector('.content');
    
    if (preloader) {
        let loadedPercent = 0;
        const interval = setInterval(() => {
            loadedPercent++;
            preloaderText.textContent = `${loadedPercent}%`;
            if (loadedPercent >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    if (content) content.classList.add('loaded');
                }, 300);
            }
        }, 20);
    } else {
        if (content) content.classList.add('loaded');
    }

    // --- ЭФФЕКТ "ПРОЖЕКТОРА" ЗА МЫШЬЮ ---
    document.body.addEventListener('mousemove', e => {
        requestAnimationFrame(() => {
            document.body.style.setProperty('--x', `${e.clientX}px`);
            document.body.style.setProperty('--y', `${e.clientY}px`);
        });
    });
    
    // --- АНИМАЦИЯ СМЕНЫ ТЕКСТА ---
    const roles = ["front-end developer", "UX/UI designer", "креативный кодер", "создатель интерфейсов"];
    const roleTextElement = document.querySelector('.role-text');
    
    if (roleTextElement) {
        let currentRoleIndex = 0;
        setInterval(() => {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            roleTextElement.style.opacity = '0';
            setTimeout(() => {
                roleTextElement.textContent = roles[currentRoleIndex];
                roleTextElement.style.opacity = '1';
            }, 300);
        }, 3000);
    }

    // --- АНИМАЦИЯ ПОЯВЛЕНИЯ СЕКЦИЙ ПРИ СКРОЛЛЕ ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
});