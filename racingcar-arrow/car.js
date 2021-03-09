const step = 10;
function init() {
  let imgCar = document.getElementById("car");
  imgCar.style.position = "relative";
  imgCar.style.top = 0;
  imgCar.style.left = 0;
  imgCar.style.width = "auto";
  imgCar.style.height = "auto";
  window.addEventListener("keydown", controlCar);
}
function controlCar(evt) {
  switch (evt.keyCode) {
    case 37: {
      let imgCar = document.getElementById("car");
      imgCar.src = "car.jpg";
      imgCar.style.width = "200px";
      imgCar.style.height = "150px";
      let posCar = parseInt(imgCar.style.left);
      let widthCar = parseInt(car.style.width);
      if (posCar + step + widthCar < innerWidth) {
        imgCar.style.left = `${posCar - step}px`;
      }
      break;
    }
    case 39: {
      let imgCar = document.getElementById("car");
      imgCar.src = "car-right.jpg";
      imgCar.style.width = "200px";
      imgCar.style.height = "150px";
      let posCar = parseInt(imgCar.style.left);
      let widthCar = parseInt(car.style.width);
      if (posCar - step - widthCar < innerWidth) {
        imgCar.style.left = `${posCar + step}px`;
      }
      break;
    }
    case 38: {
      let imgCar = document.getElementById("car");
      imgCar.src = "car-up.jpg";
      imgCar.style.width = "150px";
      imgCar.style.height = "200px";
      let posCar = parseInt(imgCar.style.top);
      let heightCar = parseInt(car.style.height);
      if (posCar + step + heightCar < innerHeight) {
        imgCar.style.top = `${posCar - step}px`;
      }
      break;
    }
    case 40: {
      let imgCar = document.getElementById("car");
      imgCar.src = "car-down.jpg";
      imgCar.style.width = "150px";
      imgCar.style.height = "200px";
      let posCar = parseInt(imgCar.style.top);
      let heightCar = parseInt(car.style.height);
      if (posCar + step + heightCar < innerHeight) {
        imgCar.style.top = `${posCar + step}px`;
      }
      break;
    }
    default:
      break;
  }
}
