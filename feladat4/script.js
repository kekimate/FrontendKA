const heightSlider = document.getElementById('heightSlider'); // Magasság csúszka lekérése
const widthSlider = document.getElementById('widthSlider'); // Szélesség csúszka lekérése

heightSlider.addEventListener('input', () => {
    const heightValue = heightSlider.value;
    changeElementSize(heightValue, null);
});

widthSlider.addEventListener('input', () => {
    const widthValue = widthSlider.value;
    changeElementSize(null, widthValue);
});

function changeElementSize(newHeight, newWidth) {
    const elements = document.querySelectorAll('.flex-container > div');
    elements.forEach((element) => {
        if (newHeight) {
            element.style.height = `${newHeight}px`;
        }
        if (newWidth) {
            element.style.width = `${newWidth}%`;
        }
    });
}