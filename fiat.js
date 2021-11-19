let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  mileage: 88000,
  started: false,
  fuel: 18,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started && this.fuel >= 6) {
      alert("Бип!");
      this.fuel >= 6 ? (this.fuel -= 6) : (this.fuel = 0);
    } else if (this.fuel < 6) {
      alert("Сначала заправьтесь!");
    } else {
      alert("Сначала запустите двигатель!");
    }
  },
  showFuel: function () {
    alert("У меня в баке " + this.fuel + " литров бензина!");
  },
  toString: function () {
    return "Автомобиль " + this.make + this.year;
  },
  addFuel: function () {
    this.fuel += 10;
    alert("Автомобиль заправлен!");
  },
};

alert(fiat.make);
fiat.start();
fiat.drive();
fiat.showFuel();
fiat.drive();
fiat.showFuel();
fiat.drive();
fiat.addFuel();
fiat.showFuel();
fiat.drive();

alert(fiat);
