// union types
let subs: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

// apiRequestStatus = 'done' // not allowed

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

const orders = ['12', '20', '8', '55'];

//any
let currentOrder; //let currentOrder: any
for (let order of orders) {
  if (order === '8') {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);
currentOrder = 29; //let currentOrder: any
