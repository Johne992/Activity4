// Billy's Car
let billyCar1 = {
  make: "Chevy",
  model: "Silverado",
  year: 1996,
  mileage: 314159265,
  passengerList: ["Joe", "Kamala", "Nancy", "Chuck"],
  oilConsumption: function () {
    let time = 160; // in minutes
    let rpm = 2000; //number of engine revolutions/min
    let burntOilrate = .0000314159 * (rpm*time);
    return burntOilrate;
    
  },
  fuelConsumption: function () {
    let distance = 300; //unit is miles
    let tank = 16; //amount of fuel consumed,
    let mpg = (distance / tank);
    return mpg;
    
  },
}
console.log("Billy's Uber-Lyft Car");
console.log(billyCar1);
console.log(billyCar1.oilConsumption() + " oz of oil");
console.log(billyCar1.fuelConsumption() + " MPG");