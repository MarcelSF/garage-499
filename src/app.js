// TODO: Build an awesome garage!
import { fetchCars, postNewCar } from './cars'

fetchCars();

const form = document.querySelector('.car-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  postNewCar();
  setTimeout(fetchCars, 5000)
})
