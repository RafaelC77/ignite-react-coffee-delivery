import { Banner } from "./components/Banner";
import { Coffee } from "./components/Coffee";

import { CoffeeListComponent } from "./styles";

const coffeeList = [
  {
    id: "1",
    image_url: "src/assets/coffee_images/traditional_espresso.png",
    tags: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    id: "2",
    image_url: "src/assets/coffee_images/american_espresso.png",
    tags: ["tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
  },
  {
    id: "3",
    image_url: "src/assets/coffee_images/creamy_espresso.png",
    tags: ["tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
  },
  {
    id: "4",
    image_url: "src/assets/coffee_images/iced_espresso.png",
    tags: ["tradicional", "gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
  },
  {
    id: "5",
    image_url: "src/assets/coffee_images/coffee_with_milk.png",
    tags: ["tradicional", "com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
  },
  {
    id: "6",
    image_url: "src/assets/coffee_images/latte.png",
    tags: ["tradicional", "com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },
  {
    id: "7",
    image_url: "src/assets/coffee_images/cappuccino.png",
    tags: ["tradicional", "com leite"],
    title: "Cappuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
  },
  {
    id: "8",
    image_url: "src/assets/coffee_images/macchiato.png",
    tags: ["tradicional", "com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
  },
  {
    id: "9",
    image_url: "src/assets/coffee_images/mocaccino.png",
    tags: ["tradicional", "com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
  },
  {
    id: "10",
    image_url: "src/assets/coffee_images/hot_chocolate.png",
    tags: ["especial", "com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
  },
  {
    id: "11",
    image_url: "src/assets/coffee_images/cuban.png",
    tags: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },
  {
    id: "12",
    image_url: "src/assets/coffee_images/hawaiian.png",
    tags: ["especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
  },
  {
    id: "13",
    image_url: "src/assets/coffee_images/arabian.png",
    tags: ["especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
  },
  {
    id: "14",
    image_url: "src/assets/coffee_images/irish.png",
    tags: ["especial", "alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  },
];

export function Home() {
  return (
    <>
      <Banner />

      <CoffeeListComponent>
        <h2>Nossos cafés</h2>

        <ul>
          {coffeeList.map((coffee) => {
            return (
              <Coffee
                key={coffee.id}
                image_source={coffee.image_url}
                tags={coffee.tags}
                title={coffee.title}
                description={coffee.description}
              />
            );
          })}
        </ul>
      </CoffeeListComponent>
    </>
  );
}
