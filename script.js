document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let draggedItem = null;
  
    cards.forEach(card => {
      card.addEventListener('dragstart', (e) => {
        draggedItem = card;
        setTimeout(() => card.style.display = 'none', 0);
      });
  
      card.addEventListener('dragend', () => {
        setTimeout(() => {
          draggedItem.style.display = 'block';
          draggedItem = null;
        }, 0);
      });
  
      card.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
  
      card.addEventListener('dragenter', (e) => {
        e.preventDefault();
        card.classList.add('drag-over');
      });
  
      card.addEventListener('dragleave', () => {
        card.classList.remove('drag-over');
      });
  
      card.addEventListener('drop', () => {
        card.classList.remove('drag-over');
        if (draggedItem) {
          const parent = card.parentNode;
          parent.insertBefore(draggedItem, card);
        }
      });
    });
  });
  