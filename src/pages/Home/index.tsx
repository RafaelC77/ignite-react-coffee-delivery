import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import { Banner } from "./components/Banner";

import {
  AddToCartButton,
  AddToCartComponent,
  CoffeeListComponent,
  DecrementButton,
  IncrementButton,
  PriceTag,
  Tag,
} from "./styles";

export function Home() {
  return (
    <>
      <Banner />

      <CoffeeListComponent>
        <h2>Nossos cafés</h2>

        <ul>
          <li>
            <img
              src="src/assets/coffee_images/expresso.png"
              alt="xícara cheia de café com um pires por baixo vista de cima"
            />
            <div>
              <Tag>Tradicional</Tag>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <AddToCartComponent>
              <PriceTag>
                R$ <strong>9,90</strong>
              </PriceTag>
              <div>
                <DecrementButton>
                  <Minus />
                </DecrementButton>
                <input
                  type="number"
                  id="price"
                  step={1}
                  placeholder="1"
                  readOnly
                />
                <IncrementButton>
                  <Plus />
                </IncrementButton>
              </div>

              <AddToCartButton>
                <ShoppingCart weight="fill" size={22} />
              </AddToCartButton>
            </AddToCartComponent>
          </li>

          <li>
            <img
              src="src/assets/coffee_images/expresso.png"
              alt="xícara cheia de café com um pires por baixo vista de cima"
            />
            <div>
              <Tag>Tradicional</Tag>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <AddToCartComponent>
              <PriceTag>
                R$ <strong>9,90</strong>
              </PriceTag>
              <div>
                <DecrementButton>
                  <Minus />
                </DecrementButton>
                <input
                  type="number"
                  id="price"
                  step={1}
                  placeholder="1"
                  readOnly
                />
                <IncrementButton>
                  <Plus />
                </IncrementButton>
              </div>

              <AddToCartButton>
                <ShoppingCart weight="fill" size={22} />
              </AddToCartButton>
            </AddToCartComponent>
          </li>

          <li>
            <img
              src="src/assets/coffee_images/expresso.png"
              alt="xícara cheia de café com um pires por baixo vista de cima"
            />
            <div>
              <Tag>Tradicional</Tag>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <AddToCartComponent>
              <PriceTag>
                R$ <strong>9,90</strong>
              </PriceTag>
              <div>
                <DecrementButton>
                  <Minus />
                </DecrementButton>
                <input
                  type="number"
                  id="price"
                  step={1}
                  placeholder="1"
                  readOnly
                />
                <IncrementButton>
                  <Plus />
                </IncrementButton>
              </div>

              <AddToCartButton>
                <ShoppingCart weight="fill" size={22} />
              </AddToCartButton>
            </AddToCartComponent>
          </li>

          <li>
            <img
              src="src/assets/coffee_images/expresso.png"
              alt="xícara cheia de café com um pires por baixo vista de cima"
            />
            <div>
              <Tag>Tradicional</Tag>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <AddToCartComponent>
              <PriceTag>
                R$ <strong>9,90</strong>
              </PriceTag>
              <div>
                <DecrementButton>
                  <Minus />
                </DecrementButton>
                <input
                  type="number"
                  id="price"
                  step={1}
                  placeholder="1"
                  readOnly
                />
                <IncrementButton>
                  <Plus />
                </IncrementButton>
              </div>

              <AddToCartButton>
                <ShoppingCart weight="fill" size={22} />
              </AddToCartButton>
            </AddToCartComponent>
          </li>

          <li>
            <img
              src="src/assets/coffee_images/expresso.png"
              alt="xícara cheia de café com um pires por baixo vista de cima"
            />
            <div>
              <Tag>Tradicional</Tag>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <AddToCartComponent>
              <PriceTag>
                R$ <strong>9,90</strong>
              </PriceTag>
              <div>
                <DecrementButton>
                  <Minus />
                </DecrementButton>
                <input
                  type="number"
                  id="price"
                  step={1}
                  placeholder="1"
                  readOnly
                />
                <IncrementButton>
                  <Plus />
                </IncrementButton>
              </div>

              <AddToCartButton>
                <ShoppingCart weight="fill" size={22} />
              </AddToCartButton>
            </AddToCartComponent>
          </li>

          <li>
            <img
              src="src/assets/coffee_images/expresso.png"
              alt="xícara cheia de café com um pires por baixo vista de cima"
            />
            <div>
              <Tag>Tradicional</Tag>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <AddToCartComponent>
              <PriceTag>
                R$ <strong>9,90</strong>
              </PriceTag>
              <div>
                <DecrementButton>
                  <Minus />
                </DecrementButton>
                <input
                  type="number"
                  id="price"
                  step={1}
                  placeholder="1"
                  readOnly
                />
                <IncrementButton>
                  <Plus />
                </IncrementButton>
              </div>

              <AddToCartButton>
                <ShoppingCart weight="fill" size={22} />
              </AddToCartButton>
            </AddToCartComponent>
          </li>
        </ul>
      </CoffeeListComponent>
    </>
  );
}
