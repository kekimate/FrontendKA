const colorPicker = document.getElementById('colorPicker');
const changeColorButton = document.getElementById('changeColorButton');

changeColorButton.addEventListener('click', () => {
  const selectedColor = colorPicker.value;
  changeBackgroundColor(selectedColor);
});

function changeBackgroundColor(newColor) {
  document.documentElement.style.setProperty('--hatterszin', newColor);
}
