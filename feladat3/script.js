const colorPicker = document.getElementById('colorPicker');
const changeColorButton = document.getElementById('changeColorButton');
const elementSelector = document.getElementById('elementSelector');

changeColorButton.addEventListener('click', () => {
    const selectedColor = colorPicker.value;
    const selectedElement = elementSelector.value;
    changeElementBackgroundColor(selectedElement, selectedColor);
});

function changeElementBackgroundColor(element, newColor) {
    const selectedElement = document.querySelector('.' + element);
    if (selectedElement) {
        selectedElement.style.backgroundColor = newColor;
    }
}
