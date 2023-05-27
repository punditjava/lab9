const layers = document.getElementsByTagName('layer');

Array.from(layers).forEach(layer => {
  layer.addEventListener('click', () => {
    // Получаем индекс нажатого слоя
    const clickedIndex = Array.from(layers).indexOf(layer);

    // Получаем индекс последнего слоя
    const lastIndex = layers.length - 1;

    // Меняем порядок слоев
    if (clickedIndex !== lastIndex) {
      layer.parentNode.insertBefore(layers[clickedIndex + 1], layer);
    } else {
      layer.parentNode.insertBefore(layer, layers[0]);
    }
  });
});