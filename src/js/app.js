import "../scss/app.scss";
import Dog from "./models/dog";
import Duck from "./models/duck";

const cardContainer = document.querySelector(".card-container");

const dog1 = new Dog("Max", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 4, 5);
cardContainer.appendChild(dog1.create());
const dog2 = new Dog("Rex", "https://iheartdogs.com/wp-content/uploads/2016/03/shutterstock_309507446.jpg", 4, 1);
cardContainer.appendChild(dog2.create());
const dog3 = new Dog("Oscar", "https://www.evcilhayvanal.com/wp-content/uploads/2019/01/Shar-Pei-Nas%C4%B1l-Bir-K%C3%B6pektir-Irk-%C3%96zellikleri-Shar-Pei-Yavrular%C4%B1.png", 4, 8);
cardContainer.appendChild(dog3.create());
const dog4 = new Dog("Shila", "https://www.dunedinamc.com/wp-content/uploads/2019/12/Chihuahua-watchTV-scaled.jpeg", 4, 7);
cardContainer.appendChild(dog4.create());
const dog5 = new Dog("Lady", "https://cdn8.bigcommerce.com/s-l3mkx1un84/content/img/blog/402-0-the-face-of-a-senior-dog.jpg", 4, 6);
cardContainer.appendChild(dog5.create());

const duck1 = new Duck("Coco", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*", 2, 8);
cardContainer.appendChild(duck1.create());
const duck2 = new Duck("Champ", "https://cdn.pixabay.com/photo/2018/03/14/21/42/duck-3226461_960_720.jpg", 2, 5);
cardContainer.appendChild(duck2.create());
const duck3 = new Duck("Rufus", "https://images.unsplash.com/photo-1597840637868-417c13c7e962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80", 2, 9);
cardContainer.appendChild(duck3.create());
const duck4 = new Duck("Donald", "https://c1.wallpaperflare.com/preview/442/307/793/duck-ducklings-duck-child-sweet.jpg", 2, 1);
cardContainer.appendChild(duck4.create());
const duck5 = new Duck("Daffy", "https://p1.pxfuel.com/preview/693/384/55/rubber-duck-toy-pool-bath-duck-swim.jpg", 2, 9);
cardContainer.appendChild(duck5.create());
