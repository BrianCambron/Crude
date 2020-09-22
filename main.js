const BASE_URL ='http://tiny-lasagna-server.herokuapp.com/collections/cohort-covid';

const $container = document.querySelector('ul');
let html = '';
function buildHTML(data){
  data.forEach(function(item){
    console.log('item', item);
    html += `<li>${item.message}</li>`
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
  message: 'another mountain to climb',
}

fetch(BASE_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
