// argument type
function makeChai(type: string, cups: number = 1) {
  console.log(`Making ${cups} cup of ${type}`);
}
makeChai('masala', 2);

// return type
function getChaiPrice(price?: number): number {
  return 25;
}

// no return type
function logChai(): void {
  console.log('chai is ready');
}
