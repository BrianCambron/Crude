const BASE_URL = 'http://tiny-lasagna-server.herokuapp.com/collections/cohort-covid';

const $container = document.querySelector('ul');
let html = '';

function buildHTML(data) {
  data.forEach(function(item) {
    console.log('item', item);
    const id = item._id;
    // console.log('id', id);
    html += `<li><span>${item.username}</span>:${item.message} <button type='button' data-id=${id} onclick="deleteBtn('${id}')">Delete</button><button type='button' onclick="editBtn('${id}')">Edit</button></li>`

  });
  // console.log('html', html);
  $container.innerHTML = html;

  // document.querySelectorAll('button[type="button"]').forEach(button => button.addEventListener('click', deleteBtn));

}

//// Get
fetch(BASE_URL)
  .then(response => response.json())
  .then(data => {
    buildHTML(data);
  })
  .catch(error => console.log(error));
// let data = {
//   username: 'Brian',
//   message: 'Test',
// }

function newData(event) {
  event.preventDefault();
  // console.log(event.target[0].value);
  const data = {};
  data.username = event.target[0].value;
  data.message = event.target[1].value;
  // POST
  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

const formEl = document.querySelector('form');
formEl.addEventListener('submit', newData);

/// PUT
function editBtn(id) {

  fetch(`${BASE_URL}/${id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Brian',
        message: 'Static',
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
/// DELETE
function deleteBtn(id) {
  // console.log('id', id);
  // console.log(this);
  // const id = event.target.dataset.id;
  // console.log('id', id);
  // console.log(data);
  fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
// fetch(BASE_URL).then((response) => response.json()).then((data)=> console.log(data));
