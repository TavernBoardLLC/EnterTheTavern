// js/colormap.js
document.addEventListener('DOMContentLoaded', () => {
  const colormapSection = document.querySelector('.colormap-section');

    areas.forEach(area => {
      const marker = document.createElement('div');
      marker.classList.add('map-marker');
      marker.style.left = area.x;
      marker.style.top = area.y;
      marker.innerHTML = `<a href="${area.link}" title="${area.name}">${area.name}</a>`;
      colormapSection.appendChild(marker);
    });
  }
);
