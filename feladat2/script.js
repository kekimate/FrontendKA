const root = document.querySelector(':root')
const rootStyle = getComputedStyle(root)
const color1 = rootStyle.getPropertyValue('--color1')
console.log(color1)

root.style.setProperty(colorVar, newColor)