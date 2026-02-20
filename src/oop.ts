class Chai {
  flavour: string;
  price: number;
  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChai = new Chai('masala', 20);

class NewChai {
  public flavour: string = 'masala';
  private secretIngredients = 'Cardamom';
  reveal() {
    return this.secretIngredients;
  }
}
class Shop {
  protected shopName = 'Chai corner';
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

class Walet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;
  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) {
      throw new Error('Too sweet');
    }
    this.sugar = this.sugar;
  }
}

class OneChai {
  static shopName = 'cafe';
  constructor(public flavour: string) {}
}
console.log(OneChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log(`making chai`);
  }
}

class Heater {
  heat() {}
}

//composition
class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
