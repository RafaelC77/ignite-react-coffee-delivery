import { coffeeList } from "../../data/coffee-list";
import { Banner } from "./components/Banner";
import { Coffee } from "./components/Coffee";

import { CoffeeListComponent } from "./styles";

export function Home() {
  return (
    <>
      <Banner />

      <CoffeeListComponent className="container">
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
