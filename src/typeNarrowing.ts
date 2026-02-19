function getChai(kind: string | number) {
  if (typeof kind === 'string') {
    return `Making ${kind.toUpperCase()} chai...`;
  }
  return `Chai order: ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return 'serving default masala chai';
}

function orderChai(size: 'medium' | 'small' | 'large' | number) {
  if (size === 'small') {
    return `small cutting chai`;
  }
  if (size === 'medium' || size === 'large') {
    return `make extra chai`;
  }
  return `chai order ${size}`;
}

class KulhadChai {
  serve() {
    return `Serving Kulahd chai`;
  }
}
class Cutting {
  serve() {
    return `Serving Cutting chai`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.type === 'string' &&
    typeof obj.sugar === 'number'
  );
}

function serverOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }
  return `serving custom chai : ${item}`;
}

type MasalaChai = { type: 'masala'; spiceLevel: number };
type gingerChai = { type: 'ginger'; amount: number };
type ElaichiChai = { type: 'alichi'; aroma: number };

type Chai = MasalaChai | gingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case 'masala':
      return `making masala chai`;
      break;
    case 'alichi':
      return 'making alichi chai';
      break;
    case 'ginger':
      return 'making ginger chai';
      break;
    default:
      return 'no chai';
      break;
  }
}

function brew(order: MasalaChai | gingerChai) {
  if ('spiceLevel' in order) {
    return 'masala chai';
  }
}
