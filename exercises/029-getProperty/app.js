function getProperty(obj, key) {
  return obj[key];
  
}

let car = {
  model: 'Toyota'
};

console.log(getProperty(car, 'model'));
