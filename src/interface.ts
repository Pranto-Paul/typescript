type ChaiOrder = { type: string; sugar: number; strong: boolean };

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

//not ok!
// type CupSize = 'small' | 'large';
// class Chai implements CupSize{
//     cupSize = "small"
// }

interface NewCupSize {
  size: 'small' | 'large';
}

class Chai implements NewCupSize {
  size: 'small' | 'large' = 'small';
}

type Response = { ok: true } | { ok: false };

// class MyRes implements Response {
//   ok: boolean = true;
// }

// Literal type
type TeaType = 'masala' | 'ginger' | 'lemon'; //union value

function orderChai(t: TeaType) {
  console.log(t);
}

//intersection value
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type NewMasalaChai = BaseChai & Extra;

const cup: NewMasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string; //optional value
  readonly appName: string; //readonly can not modify
};

const u1: User = {
  username: 'pranto',
  appName: 'typescript',
};

// u1.appName = 'javascript'; //can not assign new value to readOnly
