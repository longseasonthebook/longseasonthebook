const observer = new IntersectionObserver((entries) => {
    entries.forEach(element => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.toggle('show', entry.isIntersecting);
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('hidden');
hiddenElements.forEach((el) => observer.observe(el));
