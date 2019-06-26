import Collections from "../src/collection";
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
let collection = new Collections();
console.log(collection.getSum(a));
test('adds 1 + 2 to equal 3', () => {
    expect(collection.getSum(a)).toBe(55);
  });