import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  AddToCartButton,
  AddToCartComponent,
  CoffeeComponent,
  DecrementButton,
  IncrementButton,
  PriceTag,
  Tag,
} from "./styles";

interface CoffeeProps {
  image_source: string;
  tags: string[];
  title: string;
  description: string;
}

export function Coffee({
  image_source,
  tags,
  title,
  description,
}: CoffeeProps) {
  return (
    <CoffeeComponent>
      <img
        src={image_source}
        alt="xícara cheia de café com um pires por baixo vista de cima"
      />
      <div>
        {tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <AddToCartComponent>
        <PriceTag>
          R$ <strong>9,90</strong>
        </PriceTag>
        <div>
          <DecrementButton>
            <Minus />
          </DecrementButton>
          <input type="number" id="price" step={1} placeholder="1" readOnly />
          <IncrementButton>
            <Plus />
          </IncrementButton>
        </div>

        <AddToCartButton>
          <ShoppingCart weight="fill" size={22} />
        </AddToCartButton>
      </AddToCartComponent>
    </CoffeeComponent>
  );
}
