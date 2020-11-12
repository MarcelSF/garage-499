// Get all the cars
// Send an AJAX request to the API
// Parse the Response
// For Each car: Build a Car Card
// and insert into the Cars List

const buildHtml = (car) => {
  const carCard = `<div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
          </div>
          <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong>${car.owner}</p>
            <p><strong>Plate:</strong>${car.plate}</p>
          </div>
        </div>`
  return carCard;
}

const fetchCars = () => {
  const list = document.querySelector('.cars-list')
  list.innerHTML = '';
  const url = 'https://wagon-garage-api.herokuapp.com/batch-499/cars';
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.forEach((car) => {
        const carCard = buildHtml(car);
        list.insertAdjacentHTML('beforeend', carCard);
      })
    })
}

const postToApi = (newCar) => {
  const url = 'https://wagon-garage-api.herokuapp.com/batch-499/cars';
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newCar)
  })
}

const postNewCar = () => {
  const form = document.querySelector('.car-form');
  const newCar = {};
  newCar.brand = form.querySelector('#brand').value;
  newCar.model = form.querySelector('#model').value;
  newCar.owner = form.querySelector('#owner').value;
  newCar.plate = form.querySelector('#plate').value;
  postToApi(newCar)
  form.reset();
}

// Add a new car through the form!

// Add an event listener to the form
// Prevent the default behavior otherwise the page will reload
// Get the data from the FORM, user inputs
// POST request to the API server with the BODY (Follow the documentation)
// Refresh the car list

export { fetchCars, postNewCar }
