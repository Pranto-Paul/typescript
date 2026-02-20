let drink = 'chai'; //type inferencing
// drink = 0; // can't assign Number to a variable that already infered to string

let cups = Math.random() > 0.5 ? true : 'false'; // let cups: string | boolean
// cups = 5  //not possible-> only string | boolean

let falvour: string = 'masala'; //type anotation
falvour = 'choclate';
