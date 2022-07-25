import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from "phosphor-react";

import bannerImage from "../../assets/coffee-delivery-banner.png";

import {
  AddToCartButton,
  AddToCartComponent,
  BannerComponent,
  CoffeeListComponent,
  DecrementButton,
  IncrementButton,
  PriceTag,
  Tag,
} from "./styles";

export function Home() {
  return (
    <>
      <BannerComponent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <div>
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <div>
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <div>
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <div>
                <Coffee weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <img
          src={bannerImage}
          alt="Um copo de café com grãos e café moído ao redor"
        />
      </BannerComponent>

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
