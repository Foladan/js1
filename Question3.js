  // QUESTION 3 -SOLUTION
  let car = {
    Make: "BMW",
    Model: "X6",
    Year: 2022,
    Color: "Black"
  };
  car.Color = "Green";
  car.Mileage = 10000;
  delete car.Year;
  console.log(car);

