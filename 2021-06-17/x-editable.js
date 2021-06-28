document.querySelector('body').addEventListener('click', clickHandler);

function clickHandler(event) {
  if (!event.target.hasAttribute('data-editable')) return;

  const { target: editableElement } = event;

  const type = editableElement.getAttribute('data-editable');

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', type);
  inputElement.value = editableElement.innerText;

  editableElement.after(inputElement);
  editableElement.remove();

  inputElement.select(); // курсор

  let isDeleted = false;

  inputElement.addEventListener('keyup', function(event) {
    switch(event.key) {
      case 'Enter':
        editableElement.innerText = inputElement.value;
        inputElement.after(editableElement);
        isDeleted = true;
        inputElement.remove();
        break;
      case 'Escape':
        inputElement.after(editableElement);
        inputElement.remove();
        break;
    }
  });

  inputElement.addEventListener('blur', () => {
    if(isDeleted) return;

    inputElement.after(editableElement);
    inputElement.remove();

  });
}
