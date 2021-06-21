let array = [];

for (let element of document.querySelectorAll('td')) {
  element.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log(event.target);
    event.target.style.setProperty('background-color', 'black');
  });
}


document.querySelector('.clear').addEventListener('click', () => {
  array = [];
  for (let element of document.querySelectorAll('td')) {
    if (element.style.getPropertyValue('background-color') === 'black') {
      array.push(element);
    }
    element.style.removeProperty('background-color');
  }
  console.log('.clear');
})

document.querySelector('.restore').addEventListener('click', () => {
  for (let element of array) {
    element.style.setProperty('background-color', 'black');
  }
})
