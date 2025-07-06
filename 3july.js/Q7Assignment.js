const people = [
  {name: "John", age: 30},
  {name: "Alice", age: 25},
  {name: "John", age: 22}
];

people.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return a.age - b.age;
});

console.log(people);
