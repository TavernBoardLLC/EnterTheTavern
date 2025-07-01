// js/dashboard.js

document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ dashboard.js loaded.");

  // Optional: tab switching (only if you use tab buttons elsewhere)
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', e => {
      const target = document.querySelector(button.dataset.target);
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      target.classList.add('active');
    });
  });

  // ======== GRID COLUMN STRUCTURE FIX =========
  const gridContainer = document.querySelector('.grid-3col');
  if (!gridContainer) return;

  // Get all cards from existing columns
  const cards = Array.from(gridContainer.querySelectorAll('.map-link'));
  if (cards.length === 0) return;

  // Clear the container before re-adding columns
  gridContainer.innerHTML = '';

  // Create 3 columns
  const columns = [];
  for (let i = 0; i < 3; i++) {
    const col = document.createElement('div');
    col.className = 'grid-col';
    col.style.flex = '1 1 0';
    col.style.minWidth = '280px';
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
    col.style.alignItems = 'stretch';
    col.style.gap = '2rem';
    columns.push(col);
    gridContainer.appendChild(col);
  }

  // Distribute cards into columns (round-robin)
  cards.forEach((card, i) => {
    columns[i % 3].appendChild(card);
  });

  // Set the container to flex
  gridContainer.style.display = 'flex';
  gridContainer.style.justifyContent = 'space-between';
  gridContainer.style.flexWrap = 'wrap';
  gridContainer.style.gap = '2rem';
  gridContainer.style.padding = '0 2rem';
});
