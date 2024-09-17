import { FooterContainer } from "./Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <img src="PortoFooter.png" alt="Logo Porto Branco" />
      <p>Baixe o app da Porto</p>
      <div className="div-footer">
        <img src="AppleFooter.png" alt="Logo Apple Store" />
        <img src="PlayStoreFooter.png" alt="Logo Play Store" />
      </div>
    </FooterContainer>
  );
};
