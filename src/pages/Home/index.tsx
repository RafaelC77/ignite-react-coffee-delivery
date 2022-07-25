import { Banner } from "./components/Banner";
import { Coffee } from "./components/Coffee";

import { CoffeeListComponent } from "./styles";

const coffeeList = [
  {
    id: "1",
    image_url: "src/assets/coffee_images/expresso.png",
    tags: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    id: "2",
    image_url: "src/assets/coffee_images/expresso.png",
    tags: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
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
