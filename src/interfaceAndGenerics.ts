interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: 'masala',
  price: 30,
};

interface DisCountCalculator {
  (price: number): number;
}
const apply50: DisCountCalculator = (num) => num * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log('start');
  },
  stop() {
    console.log('stop');
  },
};

//index signature
interface ChaiRatting {
  [flavour: string]: number;
}

const rattings: ChaiRatting = {
  masala: 4.5,
  ginger: 3.3,
};

//generics
function wrapInArray<T>(item: T): T[] {
  return [item];
}
wrapInArray('masala');
wrapInArray(2);
wrapInArray({ flavour: 'masala' });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair('masala', 'ginger');
pair('masala', 5);

interface Box<T> {
  content: T;
}

const numberBox1: Box<string> = { content: 'blue-box' };
const numberBox2: Box<number> = { content: 10 };
console.log(numberBox1, numberBox2);

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: 'masala' },
};
