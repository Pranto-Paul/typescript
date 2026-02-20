const chai = {
  name: 'masala chai',
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: 'ginger',
  price: 30,
  isHot: false,
};

type Cup = { size: string };
let smallCup: Cup = { size: '200ml' };

let bigCup = { size: '500ml', material: 'steel' };

smallCup = bigCup; //no issue as bare minimum requirements satisfied

//code clarity --> types

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  item: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};
const updateChai = (updates: Partial<Chai>) => {
  console.log(`updating chai with, ${updates}`);
};

updateChai({ price: 25 });
updateChai({ isHot: true });
updateChai({}); //should take care

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
placeOrder({ name: 'masala chai', quantity: 2 });

type NewChai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<NewChai, 'name' | 'price'>;
const chaiInfo: BasicChaiInfo = {
  name: 'ginger tea',
  price: 30,
};

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};
type PublicChai = Omit<Chai, 'secretIngredients'>;
