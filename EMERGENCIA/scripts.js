document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
          setTimeout(() => {
              card.classList.add('animate-scale');
          }, index * 200);
      });
  });
  