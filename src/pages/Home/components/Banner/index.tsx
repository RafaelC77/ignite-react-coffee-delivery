import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import bannerImage from "../../../../assets/coffee-delivery-banner.png";

import { BannerComponent, BannerContainer, IntroIcon } from "./styles";

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
              <IntroIcon color="yellow-dark">
                <ShoppingCart weight="fill" />
              </IntroIcon>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <IntroIcon color="base-text">
                <Package weight="fill" />
              </IntroIcon>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <IntroIcon color="yellow">
                <Timer weight="fill" />
              </IntroIcon>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <IntroIcon color="purple">
                <Coffee weight="fill" />
              </IntroIcon>
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
