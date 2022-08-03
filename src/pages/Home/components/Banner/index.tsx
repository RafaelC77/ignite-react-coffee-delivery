import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import bannerImage from "../../../../assets/coffee-delivery-banner.png";

import { BannerComponent, BannerContainer } from "./styles";

export function Banner() {
  return (
    <BannerComponent>
      <BannerContainer className="container">
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
      </BannerContainer>
    </BannerComponent>
  );
}
