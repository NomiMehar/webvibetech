const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const trigger = item.querySelector('button');

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach((entry) => {
      entry.classList.remove('open');
      entry.querySelector('button').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
