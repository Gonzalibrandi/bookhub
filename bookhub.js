function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    }

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Deja de observar el elemento
        }
    });
});


const escondidos = document.querySelectorAll('.col');
escondidos.forEach((el)=> observer.observe(el));