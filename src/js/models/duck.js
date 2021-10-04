import Animal from "./animal";

// Create class Dog inherits from Animal
class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }

  // create method which create elements
  create() {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  <div class="image">
    <img src=${this.image}>
  </div>
  <div class="info">
    <p class="name">${this.name}</p>
    <p class="numberOfLegs">Number of Legs:${this.numberOfLegs}</p>
    <p class="age">${this.age}</p>
  </div>
  `;
    return card;
  }
}
export default Duck;
