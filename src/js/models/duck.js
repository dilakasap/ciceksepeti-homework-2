import Animal from "./animal";

class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }

  create() {
    const age = document.createElement("p");
    age.innerHTML = this.age;
    age.className = "age";
    const numberOfLegs = document.createElement("p");
    numberOfLegs.innerHTML = "Number of legs:" + this.numberOfLegs;
    numberOfLegs.className = "numberOfLegs";
    const name = document.createElement("p");
    name.innerHTML = this.name;
    name.className = "name";
    const image = document.createElement("div");
    image.className = "image";
    const img = document.createElement("img");
    img.src = this.image;
    const info = document.createElement("div");
    info.className = "info";
    const card = document.createElement("div");
    card.className = "card";

    info.appendChild(name);
    info.appendChild(numberOfLegs);
    info.appendChild(age);
    image.appendChild(img);
    card.appendChild(image);
    card.appendChild(info);
    return card;
  }
}

export default Duck;
