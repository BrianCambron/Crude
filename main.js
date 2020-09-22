const BASE_URL = 'http://tiny-lasagna-server.herokuapp.com/collections/cohort-covid';

const $container = document.querySelector('ul');
let html = '';

function buildHTML(data) {
  data.forEach(function(item) {
    console.log('item', item);
    html += `<li><span>${item.name}</span>-${item.message} <button onclick="deleteBtn(${item._id})">Delete</button></li>`
  });
  console.log('html', html);
  $container.innerHTML = html;
}


fetch(BASE_URL)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    buildHTML(data);
  })
  .catch(error => console.log(error));
// console.log('data', data);
let data = {
  name: 'Brian',
  message: 'test',
}

fetch(BASE_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

function deleteBtn(id){
  fetch(`${BASE_URL}/${item._id}`, {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))
}
