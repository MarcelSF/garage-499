// TODO: Build an awesome garage!
import { fetchCars, postNewCar } from './cars'

fetchCars();

// Add a new car through the form!
// Add an event listener to the form
// Prevent the default behavior otherwise the page will reload
// Get the data from the FORM, user inputs
// POST request to the API server with the BODY (Follow the documentation)
// Refresh the car list

const form = document.querySelector('.car-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  postNewCar();
  setTimeout(fetchCars, 5000)
  // Get request is much faster than POST, so we set a timeout to prevent
  // the behaviour of NOT updating the list with the correct information
})
