const chaiFlavours: string[] = ['masala', 'ginger'];
const chaiPrice: number[] = [10, 22];

const rating: Array<number> = [4.2, 5, 1.5];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: 'masala', price: 23 },
  { name: 'Adrak', price: 93 },
];

const cities: readonly string[] = ['Rangpur', 'Dhaka'];
// cities.push('chittagong')

const table: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

let chaiTuple: [string, number] = ['masala', 20];
chaiTuple.push('brah!');

let location: readonly [number, number] = [29.33, 44.44];
// location.push(33)

//named tuple
const chaiItems: [name: string, price: number] = ['masala', 20];

//enum
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

//auto increment
enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}
enum ChaiType {
  MASALA = 'masala',
  GINGER = 'ginger',
  ADRAK = 'adrak',
}

function makeChai(type: ChaiType) {
  console.log(`making ${type}`);
}
makeChai(ChaiType.MASALA);

//not good practice
enum RandomEnum {
  ID = 1,
  NAME = 'chai',
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
