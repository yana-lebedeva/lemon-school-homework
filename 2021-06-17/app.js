let persons = [
  {firstname: 'Jane', lastname: 'Brown', email: 'brown95@mail.com', password: 'jane222', age: 25},
  {firstname: 'David', lastname: 'Johnson', email: 'david-johnson@mail.com', password: 'kyrika', age: 42},
  {firstname: 'Olivia', lastname: 'Martin', email: 'olivia-m@mail.com', password: '12051992', age: 29},
  {firstname: 'John', lastname: 'Deep', email: 'deep-john@mail.com', password: '09071963', age: 58},
  {firstname: 'Monica', lastname: 'Clark', email: 'm.clark@mail.com', password: 'mony-click', age: 19},
  {firstname: 'Victoria', lastname: 'Robinson', email: 'victiry@mail.com', password: 'viki666', age: 35},
  {firstname: 'Ethan', lastname: 'Harri', email: 'ethan.harry@mail.com', password: 'ethan-baby27', age: 27},
  {firstname: 'Ella', lastname: 'Lopez', email: 'eee.lopez@mail.com', password: '111111', age: 30},
  {firstname: 'Walter', lastname: 'White', email: 'heisenberg-bitch@mail.com', password: '07091958', age: 50},
  {firstname: 'Lucas', lastname: 'King', email: 'lu-kin@mail.com', password: 'kingsman94', age: 26}
]

let table = document.createElement('table');
document.body.appendChild(table);

for (let person of persons) {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  for (let key in person) {
    let td = document.createElement('td');
    td.setAttribute('data-editable', 'text');
    td.innerText = person[key];
    tr.appendChild(td);
  }
}





